import { Helmet } from 'react-helmet-async'
import { BarChart3 } from 'lucide-react'
import { excelModules } from '../data/excelContent'
import ModuleAccordion from '../components/ModuleAccordion'
import SearchBar from '../components/SearchBar'
import useExerciseSearch from '../hooks/useExerciseSearch'

const ExcelPage = () => {
  const { query, setQuery, results: filteredModules } = useExerciseSearch(
    excelModules,
    ['title', 'description', 'skills', 'fileName', 'fileUrl']
  )

  const modulesToRender = filteredModules || excelModules

  return (
    <>
      <Helmet>
        <title>Ejercicios de Excel para Descargar | BUSCARV, SUMAR.SI, Fórmulas - Servysol</title>
        <meta name="description" content="28 ejercicios de Excel listos para descargar: fórmulas básicas, BUSCARV, SUMAR.SI, filtros, función SI y más. Archivos .xlsx con casos reales." />
      </Helmet>
      
      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <BarChart3 size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Ejercicios de Excel
                </h1>
                <p className="text-slate-600 mt-1">
                  {filteredModules 
                    ? `Mostrando resultados para "${query}"` 
                    : 'Domina Excel con 28 ejercicios prácticos en 11 módulos'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <SearchBar onSearch={setQuery} placeholder="Buscar ejercicios de Excel..." />
          
          <div className="mt-6 space-y-3">
            {modulesToRender.map((module, index) => (
              <ModuleAccordion key={module.id} module={module} index={index} />
            ))}
            {filteredModules && filteredModules.length === 0 && (
              <p className="text-center text-slate-500 py-8">No se encontraron ejercicios que coincidan con tu búsqueda.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExcelPage