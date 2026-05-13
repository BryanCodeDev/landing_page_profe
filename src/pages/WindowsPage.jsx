import { Helmet } from 'react-helmet-async'
import { Monitor, Clock, BookOpen, ArrowRight } from 'lucide-react'
import { windowsShortcuts } from '../data/windowsContent'
import WindowsAccordion from '../components/WindowsAccordion'

const WindowsPage = () => {
  const totalShortcuts = windowsShortcuts.reduce((acc, s) => acc + s.shortcuts.length, 0)

  return (
    <>
      <Helmet>
        <title>Atajos de Windows | Guía Completa - Servysol</title>
        <meta name="description" content="Guía completa de atajos de teclado de Windows organizados por categoría: navegación, gestión de ventanas, accesibilidad y herramientas del sistema." />
      </Helmet>

      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">

        {/* Hero de página */}
        <div className="bg-linear-to-br from-amber-500 to-amber-700 text-white">
          <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-200 bg-amber-600/50 border border-amber-400/40 px-3 py-1 rounded-full">
                  Ofimática
                </span>
                <span className="text-amber-300 text-xs">›</span>
                <span className="text-xs font-semibold text-amber-200">Microsoft Windows</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <Monitor size={24} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    Guía de Atajos de Windows
                  </h1>
                  <p className="text-amber-100/80 mt-1 text-sm md:text-base">
                    Domina los atajos de teclado más usados de Windows. Organizados por categoría para que aprendas progresivamente.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { icon: <BookOpen size={14} />, text: `${windowsShortcuts.length} categorías` },
                  { icon: <Monitor size={14} />, text: `${totalShortcuts} atajos` },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-amber-100 bg-amber-600/40 border border-amber-400/30 px-3 py-1.5 rounded-full">
                    <span className="text-amber-300">{s.icon}</span>
                    {s.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-slate-500 text-center mb-6">
              Haz clic en cada categoría para ver sus atajos. Puedes dejar varias abiertas a la vez.
            </p>

            <WindowsAccordion sections={windowsShortcuts} />

            <div className="mt-8 text-center">
              <p className="text-xs text-slate-400">
                💡 Consejo: Usa <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-bold text-slate-600">Win</kbd>
                como tu tecla principal para acceder rápidamente a cualquier cosa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WindowsPage