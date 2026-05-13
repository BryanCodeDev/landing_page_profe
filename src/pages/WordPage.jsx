import ExercisePageLayout from '../components/ExercisePageLayout'
import { FileText } from 'lucide-react'
import { wordModules } from '../data/wordContent'

const WordPage = () => (
  <ExercisePageLayout
    modules={wordModules}
    heroTitle="Ejercicios de Word"
    heroSubtitle="Microsoft Word"
    heroIcon={FileText}
    heroGradientFrom="blue-600"
    heroGradientTo="blue-800"
    helmetTitle="Ejercicios de Word para Descargar | Formato, Imágenes, SmartArt - Servysol"
    helmetDescription="6 ejercicios prácticos de Microsoft Word en .docx y .doc: formato básico, tabulaciones, SmartArt, tablas e índices. Descarga y practica en tu computador."
    statsModuleLabel="módulos"
    totalLabel="ejercicios .docx"
  />
)

export default WordPage