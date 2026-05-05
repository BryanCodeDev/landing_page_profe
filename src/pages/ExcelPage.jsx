import { Helmet } from 'react-helmet-async'
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
      
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              Ejercicios de Excel
            </h1>
            <p className="text-slate-600">
              {filteredModules 
                ? `Mostrando resultados para "${query}"` 
                : 'Domina Excel con 28 ejercicios prácticos en 11 módulos'
              }
            </p>
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