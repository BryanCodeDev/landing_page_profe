import { Helmet } from 'react-helmet-async'
import { FileText } from 'lucide-react'
import { wordModules } from '../data/wordContent'
import ModuleAccordion from '../components/ModuleAccordion'
import SearchBar from '../components/SearchBar'
import useExerciseSearch from '../hooks/useExerciseSearch'

const WordPage = () => {
  const { query, setQuery, results: filteredModules } = useExerciseSearch(
    wordModules,
    ['title', 'description', 'skills', 'fileName', 'fileUrl']
  )

  const modulesToRender = filteredModules || wordModules

  return (
    <>
      <Helmet>
        <title>Ejercicios de Word para Descargar | Formato, Imágenes, SmartArt - Servysol</title>
        <meta name="description" content="4 ejercicios prácticos de Microsoft Word en .docx: formato básico, tabulaciones, SmartArt e imágenes. Descarga y practica en tu computador." />
      </Helmet>
      
      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <FileText size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Ejercicios de Word
                </h1>
                <p className="text-slate-600 mt-1">
                  {filteredModules 
                    ? `Mostrando resultados para "${query}"` 
                    : 'Domina Word con 4 ejercicios prácticos en 2 módulos'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <SearchBar onSearch={setQuery} placeholder="Buscar ejercicios de Word..." />
          
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

export default WordPage