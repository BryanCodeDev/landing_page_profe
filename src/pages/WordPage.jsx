import { Helmet } from 'react-helmet-async'
import { FileText, Download, BookOpen, Layers, Search, X } from 'lucide-react'
import { wordModules } from '../data/wordContent'
import SearchBar from '../components/SearchBar'
import ExerciseCard from '../components/ExerciseCard'
import useFileSearch from '../hooks/useFileSearch'

const WordPage = () => {
  const { query, setQuery, results: flatResults } = useFileSearch(
    wordModules,
    ['title', 'description', 'skills', 'fileName', 'fileUrl']
  )

  const totalExercises = wordModules.reduce((acc, m) => acc + m.exercises.length, 0)
  const isSearching = query.trim().length > 0
  const hasResults = flatResults && flatResults.length > 0

  return (
    <>
      <Helmet>
        <title>Ejercicios de Word para Descargar | Formato, Imágenes, SmartArt - Servysol</title>
        <meta name="description" content="4 ejercicios prácticos de Microsoft Word en .docx: formato básico, tabulaciones, SmartArt e imágenes. Descarga y practica en tu computador." />
      </Helmet>

      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">

        {/* Hero de página */}
        <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-700/50 border border-blue-500/40 px-3 py-1 rounded-full">
                  Ofimática
                </span>
                <span className="text-blue-400 text-xs">›</span>
                <span className="text-xs font-semibold text-blue-200">Microsoft Word</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    Ejercicios de Word
                  </h1>
                  <p className="text-blue-100/80 mt-1 text-sm md:text-base">
                    {isSearching
                      ? hasResults
                        ? `Se encontraron ${flatResults.length} archivo(s) para "${query}"`
                        : `No se encontraron archivos para "${query}"`
                      : 'Busca cualquier archivo por nombre, descripción o habilidad. Resultados en tiempo real.'}
                  </p>
                </div>
              </div>

              {/* Stats row */}
              {!isSearching && (
                <div className="flex flex-wrap gap-4 mt-6">
                  {[
                    { icon: <BookOpen size={14} />, text: `${wordModules.length} módulos` },
                    { icon: <Download size={14} />, text: `${totalExercises} ejercicios .docx` },
                    { icon: <Layers size={14} />, text: 'Principiante a Intermedio' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-blue-100 bg-blue-700/40 border border-blue-500/30 px-3 py-1.5 rounded-full">
                      <span className="text-blue-300">{s.icon}</span>
                      {s.text}
                    </div>
                  ))}
                </div>
              )}

              {/* Barra de búsqueda integrada */}
              <div className="mt-6 max-w-xl">
                <div className="relative">
                  <Search
                    size={18}
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Buscar por nombre de archivo, habilidad o descripción..."
                    aria-label="Buscar ejercicios de Word"
                    className="
                      w-full pl-11 pr-10 py-3 text-sm text-slate-800
                      bg-white/10 border border-white/20 rounded-xl
                      placeholder:text-slate-300
                      focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40
                      transition-all duration-200 backdrop-blur-sm
                    "
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      aria-label="Limpiar búsqueda"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 py-8">
          {isSearching ? (
            <>
              {hasResults ? (
                <div className="space-y-3">
                  {flatResults.map((exercise, index) => (
                    <div key={exercise.id} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center mt-1">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <ExerciseCard exercise={exercise} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <FileText size={24} className="text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-semibold mb-1">Sin resultados</p>
                  <p className="text-sm text-slate-400">No hay archivos que coincidan con <span className="font-medium">"{query}"</span></p>
                </div>
              )}
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  Mostrando archivos individuales que coinciden con tu búsqueda.
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              {wordModules.map((module, index) => (
                <div key={module.id}>
                  <button
                    onClick={() => {}}
                    className="w-full px-5 py-3 flex justify-between items-center hover:bg-slate-50/70 transition-colors duration-200 group rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 mb-1"
                  >
                    <div className="flex items-center gap-4">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <h2 className="text-sm font-bold text-slate-900">{module.title}</h2>
                      <span className="text-[11px] text-slate-400">({module.exercises.length} archivos)</span>
                    </div>
                    <p className="text-xs text-slate-400 max-w-md truncate">{module.description}</p>
                  </button>
                </div>
              ))}
              <p className="text-center text-sm text-slate-400 mt-4">
                ↑ Escribe arriba para buscar archivos individuales en tiempo real
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default WordPage