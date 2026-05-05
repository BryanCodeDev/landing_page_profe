import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('NotFound', () => {
  it('renderiza el código 404 correctamente', () => {
    renderWithRouter(<NotFound />)

    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('muestra el mensaje de página no encontrada', () => {
    renderWithRouter(<NotFound />)

    expect(screen.getByText('Página no encontrada')).toBeInTheDocument()
  })

  it('tiene un enlace para volver al inicio', () => {
    renderWithRouter(<NotFound />)

    // El enlace principal dice "Inicio"
    const homeLink = screen.getByRole('link', { name: /Inicio/i })

    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('configura el título de página correctamente', () => {
    renderWithRouter(<NotFound />)

    expect(document.title).toBe('404 - Página no encontrada | SERVYSOL')
  })

  it('tiene meta description', () => {
    renderWithRouter(<NotFound />)

    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toBeInTheDocument()
    expect(metaDescription.getAttribute('content')).toContain('Página no encontrada')
    expect(metaDescription.getAttribute('content')).toContain('ejercicios')
  })
})
