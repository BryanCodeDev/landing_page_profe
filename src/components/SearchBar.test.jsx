import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  let onSearchMock

  beforeEach(() => {
    onSearchMock = vi.fn()
    // Simular elapsed time para debounce
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renderiza el input con placeholder correcto', () => {
    render(<SearchBar onSearch={onSearchMock} placeholder="Buscar algo..." />)

    expect(screen.getByPlaceholderText('Buscar algo...')).toBeInTheDocument()
  })

  it('usa placeholder por defecto si no se proporciona', () => {
    render(<SearchBar onSearch={onSearchMock} />)

    expect(screen.getByPlaceholderText('Buscar ejercicios...')).toBeInTheDocument()
  })

  it('muestra el ícono de búsqueda', () => {
    const { container } = render(<SearchBar onSearch={onSearchMock} />)

    // El ícono es un SVG con la clase 'lucide-search'
    const searchIcon = container.querySelector('svg.lucide-search')
    expect(searchIcon).toBeInTheDocument()
  })

  it('actualiza el valor del input al escribir', () => {
    render(<SearchBar onSearch={onSearchMock} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'excel' } })

    expect(input.value).toBe('excel')
  })

  it('no llama a onSearch inmediatamente (debounce 300ms)', () => {
    render(<SearchBar onSearch={onSearchMock} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'excel' } })

    // Avanzar el tiempo 299ms - no debería haberse llamado aún
    vi.advanceTimersByTime(299)

    expect(onSearchMock).not.toHaveBeenCalled()

    // Avanzar 1ms más para completar 300ms
    vi.advanceTimersByTime(1)

    expect(onSearchMock).toHaveBeenCalledTimes(1)
    expect(onSearchMock).toHaveBeenCalledWith('excel')
  })

  it('espera 300ms después del último cambio antes de llamar onSearch', async () => {
    render(<SearchBar onSearch={onSearchMock} />)

    const input = screen.getByRole('textbox')

    // Primer cambio
    fireEvent.change(input, { target: { value: 'ex' } })
    vi.advanceTimersByTime(200)

    // Segundo cambio antes de que expire el timer
    fireEvent.change(input, { target: { value: 'exc' } })
    vi.advanceTimersByTime(200)

    // Tercer cambio
    fireEvent.change(input, { target: { value: 'excel' } })
    vi.advanceTimersByTime(200)

    // Todavía no debería haberse llamado
    expect(onSearchMock).not.toHaveBeenCalled()

    // Completar los 100ms restantes del último timer
    vi.advanceTimersByTime(100)

    // Debería haberse llamado solo una vez con el último valor
    expect(onSearchMock).toHaveBeenCalledTimes(1)
    expect(onSearchMock).toHaveBeenCalledWith('excel')
  })

  it('limpia el timer anterior al cambiar rápidamente', () => {
    render(<SearchBar onSearch={onSearchMock} />)

    const input = screen.getByRole('textbox')

    // Cambios rápidos
    fireEvent.change(input, { target: { value: 'a' } })
    vi.advanceTimersByTime(100)

    fireEvent.change(input, { target: { value: 'ab' } })
    vi.advanceTimersByTime(100)

    fireEvent.change(input, { target: { value: 'abc' } })
    vi.advanceTimersByTime(100)

    // No se han llamado a onSearch aún
    expect(onSearchMock).not.toHaveBeenCalled()

    // Esperar a que expire el último timer
    vi.advanceTimersByTime(200)

    // Solo una llamada (debounce funcionó)
    expect(onSearchMock).toHaveBeenCalledTimes(1)
    expect(onSearchMock).toHaveBeenCalledWith('abc')
  })

  it('maneja string vacío correctamente', () => {
    render(<SearchBar onSearch={onSearchMock} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '' } })
    vi.advanceTimersByTime(300)

    expect(onSearchMock).toHaveBeenCalledWith('')
  })
})
