import { Helmet } from 'react-helmet-async'
import { BarChart3, Download, BookOpen, Layers } from 'lucide-react'
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
  const totalExercises = excelModules.reduce((acc, m) => acc + m.exercises.length, 0)

  return (
    <>
      <Helmet>
        <title>Ejercicios de Excel para Descargar | BUSCARV, SUMAR.SI, Fórmulas - Servysol</title>
        <meta name="description" content="28 ejercicios de Excel listos para descargar: fórmulas básicas, BUSCARV, SUMAR.SI, filtros, función SI y más. Archivos .xlsx con casos reales." />
      </Helmet>

      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">

        {/* Hero de página */}
        <div className="bg-linear-to-br from-emerald-600 to-emerald-800 text-white">
          <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-200 bg-emerald-700/50 border border-emerald-500/40 px-3 py-1 rounded-full">
                  Ofimática
                </span>
                <span className="text-emerald-400 text-xs">›</span>
                <span className="text-xs font-semibold text-emerald-200">Microsoft Excel</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    Ejercicios de Excel
                  </h1>
                  <p className="text-emerald-100/80 mt-1 text-sm md:text-base">
                    {filteredModules
                      ? `Mostrando resultados para "${query}"`
                      : 'Practica con casos reales y descarga los archivos directamente.'}
                  </p>
                </div>
              </div>

              {/* Stats row */}
              {!filteredModules && (
                <div className="flex flex-wrap gap-4 mt-6">
                  {[
                    { icon: <BookOpen size={14} />, text: `${excelModules.length} módulos` },
                    { icon: <Download size={14} />, text: `${totalExercises} ejercicios .xlsx` },
                    { icon: <Layers size={14} />, text: 'Principiante a Avanzado' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-emerald-100 bg-emerald-700/40 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                      <span className="text-emerald-300">{s.icon}</span>
                      {s.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 py-8">
          <SearchBar onSearch={setQuery} placeholder="Buscar ejercicios de Excel..." />

          <div className="mt-2 space-y-3">
            {modulesToRender.map((module, index) => (
              <ModuleAccordion key={module.id} module={module} index={index} />
            ))}
            {filteredModules && filteredModules.length === 0 && (
              <div className="text-center py-16">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={24} className="text-slate-400" />
                </div>
                <p className="text-slate-600 font-semibold mb-1">Sin resultados</p>
                <p className="text-sm text-slate-400">No hay ejercicios que coincidan con <span className="font-medium">"{query}"</span></p>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default ExcelPage