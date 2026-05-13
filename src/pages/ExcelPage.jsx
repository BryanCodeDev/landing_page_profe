import ExercisePageLayout from '../components/ExercisePageLayout'
import { BarChart3 } from 'lucide-react'
import { excelModules } from '../data/excelContent'

const ExcelPage = () => (
  <ExercisePageLayout
    modules={excelModules}
    heroTitle="Ejercicios de Excel"
    heroSubtitle="Microsoft Excel"
    heroIcon={BarChart3}
    heroGradient="linear-gradient(to bottom right, #059669, #065f46)"
    helmetTitle="Ejercicios de Excel para Descargar | BUSCARV, SUMAR.SI, Fórmulas - Servysol"
    helmetDescription="28 ejercicios de Excel listos para descargar: fórmulas básicas, BUSCARV, SUMAR.SI, filtros, función SI y más. Archivos .xlsx con casos reales."
    statsModuleLabel="módulos"
    totalLabel="ejercicios .xlsx"
  />
)

export default ExcelPage