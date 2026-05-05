import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExerciseCard from '../components/ExerciseCard'

const mockExercise = {
  id: 1,
  title: 'Funciones Básicas de Excel',
  description: 'Aprende a usar las funciones de suma, resta y promedio',
  level: 'Principiante',
  skills: ['SUMA', 'PROMEDIO', 'RESTA'],
  fileName: 'ejercicio_basico.xlsx',
  fileSize: '25 KB',
  fileUrl: '/archivos/excel/ejercicio_basico.xlsx'
}

const mockExerciseWord = {
  ...mockExercise,
  id: 2,
  title: 'Formato de Texto en Word',
  fileName: 'formato_texto.docx',
  fileUrl: '/archivos/word/formato_texto.docx'
}

describe('ExerciseCard', () => {
  describe('Renderizado Excel', () => {
    it('muestra el título del ejercicio', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      expect(screen.getByText('Funciones Básicas de Excel')).toBeInTheDocument()
    })

    it('muestra la descripción completa', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      expect(screen.getByText('Aprende a usar las funciones de suma, resta y promedio')).toBeInTheDocument()
    })

    it('renderiza el badge de nivel correctamente', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      expect(screen.getByText('Principiante')).toBeInTheDocument()
    })

    it('aplica el color correcto según el nivel (Principiante)', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      const badge = screen.getByText('Principiante')
      expect(badge).toHaveClass('bg-slate-100', 'text-slate-700')
    })

    it('aplica el color correcto para nivel Intermedio', () => {
      const intermediateExercise = { ...mockExercise, level: 'Intermedio' }
      render(<ExerciseCard exercise={intermediateExercise} />)

      const badge = screen.getByText('Intermedio')
      expect(badge).toHaveClass('bg-amber-100', 'text-amber-800')
    })

    it('aplica el color correcto para nivel Avanzado', () => {
      const advancedExercise = { ...mockExercise, level: 'Avanzado' }
      render(<ExerciseCard exercise={advancedExercise} />)

      const badge = screen.getByText('Avanzado')
      expect(badge).toHaveClass('bg-red-100', 'text-red-800')
    })

    it('renderiza todos los skills como etiquetas', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      expect(screen.getByText('SUMA')).toBeInTheDocument()
      expect(screen.getByText('PROMEDIO')).toBeInTheDocument()
      expect(screen.getByText('RESTA')).toBeInTheDocument()
    })

    it('muestra el nombre del archivo y su tamaño', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      expect(screen.getByText(/ejercicio_basico.xlsx · 25 KB/)).toBeInTheDocument()
    })

    it('renderiza el enlace de descarga con atributos correctos', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      const downloadLink = screen.getByRole('link', { name: /Descargar/i })

      expect(downloadLink).toBeInTheDocument()
      expect(downloadLink).toHaveAttribute('href', '/archivos/excel/ejercicio_basico.xlsx')
      expect(downloadLink).toHaveAttribute('download', 'ejercicio_basico.xlsx')
    })

    it('muestra el texto "Descargar" en el enlace', () => {
      render(<ExerciseCard exercise={mockExercise} />)

      expect(screen.getByRole('link', { name: /Descargar/i })).toBeInTheDocument()
    })

    it('usa el ícono de Excel (FileSpreadsheet) para archivos .xlsx', () => {
      const { container } = render(<ExerciseCard exercise={mockExercise} />)

      // Verificar que contenga el svg de FileSpreadsheet (lucide-react)
      const excelIcon = container.querySelector('svg')
      expect(excelIcon).toBeInTheDocument()
    })
  })

  describe('Renderizado Word', () => {
    it('usa el ícono correcto para archivos .docx', () => {
      const { container } = render(<ExerciseCard exercise={mockExerciseWord} />)

      const wordIcon = container.querySelector('svg')
      expect(wordIcon).toBeInTheDocument()
    })

    it('muestra el nombre del archivo .docx', () => {
      render(<ExerciseCard exercise={mockExerciseWord} />)

      expect(screen.getByText(/formato_texto.docx · 25 KB/)).toBeInTheDocument()
    })
  })

  describe('Validación de datos', () => {
    it('maneja ejercicio sin skills (array vacío)', () => {
      const noSkillsExercise = {
        ...mockExercise,
        skills: []
      }

      render(<ExerciseCard exercise={noSkillsExercise} />)

      // No debería fallar, solo no mostrar badges de skills
      expect(screen.getByText('Funciones Básicas de Excel')).toBeInTheDocument()
    })

    it('maneja fileName undefined sin errores', () => {
      const noFileExercise = {
        ...mockExercise,
        fileName: undefined
      }

      render(<ExerciseCard exercise={noFileExercise} />)

      expect(screen.getByText('Funciones Básicas de Excel')).toBeInTheDocument()
    })
  })

  describe('Layout y estilo', () => {
    it('aplica las clases de flexbox correctas', () => {
      const { container } = render(<ExerciseCard exercise={mockExercise} />)

      const card = container.firstChild
      expect(card).toHaveClass('flex', 'items-start', 'justify-between')
    })

    it('tiene la clase border-b en el contenedor', () => {
      const { container } = render(<ExerciseCard exercise={mockExercise} />)

      const card = container.firstChild
      expect(card).toHaveClass('border-b', 'border-slate-100')
    })
  })
})
