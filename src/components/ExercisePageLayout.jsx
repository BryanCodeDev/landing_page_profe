import { Helmet } from 'react-helmet-async'
import { Search, X } from 'lucide-react'
import ExerciseCard from './ExerciseCard'
import useFileSearch from '../hooks/useFileSearch'
import { useState } from 'react'

const ExercisePageLayout = ({
  modules,
  heroTitle,
  heroSubtitle,
  heroIcon: HeroIcon,
  heroGradient,
  helmetTitle,
  helmetDescription,
  statsModuleLabel,
  totalLabel,
}) => {
  const { query, setQuery, results: flatResults } = useFileSearch(
    modules,
    ['title', 'description', 'skills', 'fileName', 'fileUrl']
  )

  const [inputQuery, setInputQuery] = useState(query)
  const totalExercises = modules.reduce((acc, m) => acc + m.exercises.length, 0)
  const isSearching = query.trim().length > 0
  const hasResults = flatResults && flatResults.length > 0

  const handleSearch = (value) => {
    setInputQuery(value)
    setQuery(value)
  }

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDescription} />
        <meta property="og:title" content={helmetTitle} />
        <meta property="og:description" content={helmetDescription} />
      </Helmet>

      <div className="min-h-screen bg-slate-50">

        <div className="relative" style={{ background: heroGradient }}>
          <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                  Ofimática
                </span>
                <span className="text-white/40 text-xs">›</span>
                <span className="text-xs font-semibold text-white/80">{heroSubtitle}</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <HeroIcon size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
                    {heroTitle}
                  </h1>
                  <p className="text-white/80 mt-1 text-sm md:text-base">
                    {isSearching
                      ? hasResults
                        ? `Se encontraron ${flatResults.length} archivo(s) para "${query}"`
                        : `No se encontraron archivos para "${query}"`
                      : 'Busca cualquier archivo por nombre, descripción o habilidad. Resultados en tiempo real.'}
                  </p>
                </div>
              </div>

              {!isSearching && (
                <div className="flex flex-wrap gap-4 mt-6">
                  {[
                    { icon: <HeroIcon size={14} />, text: `${modules.length} ${statsModuleLabel}` },
                    { icon: <Search size={14} className="text-white" />, text: `${totalExercises} ${totalLabel}` },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-white/80 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                      <span className="text-white">{s.icon}</span>
                      {s.text}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 max-w-xl">
                <div className="relative">
                  <Search
                    size={18}
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder="Buscar por nombre de archivo, habilidad o descripción..."
                    aria-label="Buscar ejercicios"
                    className="
                      w-full pl-11 pr-10 py-3 text-sm text-white
                      bg-white/10 border border-white/20 rounded-xl
                      placeholder:text-slate-300 placeholder:font-light
                      focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40
                      transition-all duration-200 backdrop-blur-sm
                    "
                  />
                  {inputQuery && (
                    <button
                      onClick={() => { setInputQuery(''); setQuery('') }}
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

        <div className="container mx-auto px-4 py-8">
          {isSearching ? (
            <>
              {hasResults ? (
                <>
                  <div className="mb-4 text-sm text-slate-500">
                    {flatResults.length} resultado(s) encontrados
                  </div>
                  <div className="space-y-3">
                    {flatResults.map((exercise, index) => (
                      <div key={exercise.id} className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-white/80 text-slate-700 text-xs font-bold flex items-center justify-center mt-1 border border-slate-200">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <ExerciseCard exercise={exercise} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <HeroIcon size={24} className="text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-semibold mb-1">Sin resultados</p>
                  <p className="text-sm text-slate-400">No hay archivos que coincidan con <span className="font-medium">"{query}"</span></p>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-3">
              {modules.map((module, index) => (
                <div key={module.id} className="space-y-2 mb-6">
                  <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-1">
                    {index + 1}. {module.title}
                    <span className="text-[11px] font-medium text-slate-400 ml-1">({module.exercises.length} ejercicios)</span>
                  </h2>
                  {module.exercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                  ))}
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

export default ExercisePageLayout