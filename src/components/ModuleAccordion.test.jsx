import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ModuleAccordion from '../components/ModuleAccordion'

const mockModule = {
  id: 1,
  title: 'Funciones Básicas',
  description: 'Aprende las funciones más utilizadas',
  icon: 'calculator',
  color: 'green',
  exercises: [
    {
      id: 1,
      title: 'SUMA',
      description: 'Ejercicio de suma simple',
      level: 'Principiante',
      skills: ['SUMA'],
      fileName: 'ejercicio1.xlsx',
      fileSize: '15 KB',
      fileUrl: '/archivos/excel/ejercicio1.xlsx'
    },
    {
      id: 2,
      title: 'PROMEDIO',
      description: 'Ejercicio de promedio',
      level: 'Principiante',
      skills: ['PROMEDIO'],
      fileName: 'ejercicio2.xlsx',
      fileSize: '20 KB',
      fileUrl: '/archivos/excel/ejercicio2.xlsx'
    }
  ]
}

describe('ModuleAccordion', () => {
  it('renderiza el título y descripción del módulo', () => {
    render(<ModuleAccordion module={mockModule} index={0} />)

    expect(screen.getByText('Funciones Básicas')).toBeInTheDocument()
    expect(screen.getByText('Aprende las funciones más utilizadas')).toBeInTheDocument()
  })

  it('muestra el contador de ejercicios', () => {
    render(<ModuleAccordion module={mockModule} index={0} />)

    expect(screen.getByText('2 ejercicios')).toBeInTheDocument()
  })

  it('inicia cerrado por defecto', () => {
    render(<ModuleAccordion module={mockModule} index={0} />)

    // Los ejercicios no deben estar visibles inicialmente
    expect(screen.queryByText('SUMA')).not.toBeInTheDocument()
    expect(screen.queryByText('PROMEDIO')).not.toBeInTheDocument()
  })

  it('se abre al hacer clic en el botón', () => {
    render(<ModuleAccordion module={mockModule} index={0} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    // Verificar que el ejercicio aparece por su título (único)
    expect(screen.getByRole('heading', { level: 3, name: 'SUMA' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'PROMEDIO' })).toBeInTheDocument()
  })

  it('se cierra al hacer clic nuevamente', async () => {
    render(<ModuleAccordion module={mockModule} index={0} />)

    const button = screen.getByRole('button')

    // Abrir
    fireEvent.click(button)
    expect(screen.getByRole('heading', { level: 3, name: 'SUMA' })).toBeInTheDocument()

    // Cerrar
    fireEvent.click(button)

    // Esperar a que la animación de salida complete (200ms)
    await new Promise(resolve => setTimeout(resolve, 250))

    expect(screen.queryByRole('heading', { level: 3, name: 'SUMA' })).not.toBeInTheDocument()
  })

  it('rota el ícono ChevronDown cuando está abierto', () => {
    render(<ModuleAccordion module={mockModule} index={0} />)

    const button = screen.getByRole('button')
    // El ChevronDown es el segundo SVG dentro del botón (después del ícono del módulo)
    const chevron = button.querySelectorAll('svg')[1]

    // Inicialmente sin rotación
    expect(chevron).not.toHaveClass('rotate-180')

    // Después del clic, rotado
    fireEvent.click(button)
    expect(chevron).toHaveClass('rotate-180')
  })

  it('renderiza múltiples ejercicios correctamente', () => {
    const bigModule = {
      ...mockModule,
      exercises: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        title: `Ejercicio ${i + 1}`,
        description: `Descripción ${i + 1}`,
        level: 'Principiante',
        skills: ['skill'],
        fileName: `file${i + 1}.xlsx`,
        fileSize: '10 KB',
        fileUrl: `/archivos/excel/file${i + 1}.xlsx`
      }))
    }

    render(<ModuleAccordion module={bigModule} index={0} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByText('5 ejercicios')).toBeInTheDocument()
    expect(screen.getByText('Ejercicio 5')).toBeInTheDocument()
  })
})
