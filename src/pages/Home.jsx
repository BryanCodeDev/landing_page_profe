import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, BarChart3, FileText, Monitor, Download, CheckCircle, ArrowRight } from 'lucide-react'
import { windowsShortcuts } from '../data/windowsContent'

const Home = () => {
  const totalWindowsShortcuts = windowsShortcuts.reduce((acc, s) => acc + s.shortcuts.length, 0)

  return (
    <>
      <Helmet>
        <title>Servysol | Ejercicios Gratis de Word y Excel con Descarga Directa</title>
        <meta name="description" content="Aprende Microsoft Word, Excel y Windows con ejercicios prácticos descargables. 28 archivos de Excel + 6 de Word + guía de 81 atajos de Windows. Sin registro, descarga directa." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Servysol",
            "url": "https://servysol.com",
            "description": "Plataforma gratuita de ejercicios de ofimática",
            "teaches": ["Microsoft Excel", "Microsoft Word", "Windows"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ejercicios de Ofimática",
              "numberOfItems": 34
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[140px] opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">

          <div className="flex justify-center mb-6">
<span className="text-xs font-bold uppercase tracking-widest text-blue-300 border border-blue-500/30 bg-blue-500/10 px-5 py-2 rounded-full backdrop-blur-sm flex items-center gap-1.5">
               <BookOpen size={13} />
               Plataforma Educativa Gratuita
             </span>
          </div>

          <div className="text-center mb-4">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent">
                Servysol
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl text-slate-400 mb-4 max-w-xl mx-auto leading-relaxed font-light">
              Practica Microsoft Word, Excel y Windows con ejercicios reales y descargables.
              Sin registro, sin redirecciones.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-14" role="list" aria-label="Caracteristicas de la plataforma">
            {[
              { icon: <Download size={13} />, text: 'Descarga directa .xlsx y .docx' },
              { icon: <CheckCircle size={13} />, text: 'Sin registro requerido' },
              { icon: <ArrowRight size={13} />, text: '115 recursos disponibles' },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/60 border border-slate-700/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <span className="text-blue-400">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">

            <Link
              to="/excel"
              className="group relative bg-linear-to-br from-emerald-500/90 to-emerald-700/90 backdrop-blur-sm text-white p-7 rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 border border-emerald-400/20 hover:border-emerald-300/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                  <BarChart3 size={26} />
                </div>
                <span className="text-[11px] font-semibold bg-emerald-900/50 text-emerald-200 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  11 modulos
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1">Excel</h2>
              <p className="text-sm text-emerald-100/80 mb-4 leading-relaxed">
                BUSCARV, SUMAR.SI, tablas dinamicas, graficos y mas.
              </p>
              <ul className="text-xs text-emerald-100/70 space-y-1 mb-5">
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Formulas y funciones</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Tablas dinamicas</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Funciones de busqueda</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-100">
                  28 ejercicios
                </span>
                <span className="flex items-center gap-1 text-xs text-emerald-200 group-hover:gap-2 transition-all">
                  Ver modulos <ArrowRight size={13} />
                </span>
              </div>
            </Link>

            <Link
              to="/word"
              className="group relative bg-linear-to-br from-blue-500/90 to-blue-700/90 backdrop-blur-sm text-white p-7 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 border border-blue-400/20 hover:border-blue-300/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                  <FileText size={26} />
                </div>
                <span className="text-[11px] font-semibold bg-blue-900/50 text-blue-200 px-2.5 py-1 rounded-full border border-blue-500/30">
                  3 modulos
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1">Word</h2>
              <p className="text-sm text-blue-100/80 mb-4 leading-relaxed">
                Documentos profesionales, estilos, tablas e indices automaticos.
              </p>
              <ul className="text-xs text-blue-100/70 space-y-1 mb-5">
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Formato y estilos</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Tablas y listas</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Indice automatico</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-100">
                  6 ejercicios
                </span>
                <span className="flex items-center gap-1 text-xs text-blue-200 group-hover:gap-2 transition-all">
                  Ver modulos <ArrowRight size={13} />
                </span>
              </div>
            </Link>

            <Link
              to="/windows"
              className="group relative bg-linear-to-br from-amber-500/90 to-amber-700/90 backdrop-blur-sm text-white p-7 rounded-2xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 border border-amber-400/20 hover:border-amber-300/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Monitor size={26} />
                </div>
                <span className="text-[11px] font-semibold bg-amber-900/50 text-amber-200 px-2.5 py-1 rounded-full border border-amber-500/30">
                  7 categorias
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1">Windows</h2>
              <p className="text-sm text-amber-100/80 mb-4 leading-relaxed">
                Atajos de teclado organizados por categoria. Puro texto, sin archivos.
              </p>
              <ul className="text-xs text-amber-100/70 space-y-1 mb-5">
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Navegacion y archivos</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Gestion de ventanas</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={11} /> Accesibilidad</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-100">
                  {windowsShortcuts.reduce((acc, s) => acc + s.shortcuts.length, 0)} atajos
                </span>
                <span className="flex items-center gap-1 text-xs text-amber-200 group-hover:gap-2 transition-all">
                  Ver guia <ArrowRight size={13} />
                </span>
              </div>
            </Link>

          </div>

          <div className="flex justify-center">
            <div className="flex flex-wrap items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 text-slate-400 text-xs px-6 py-3 rounded-full">
              <span className="flex items-center gap-1.5"><BarChart3 size={12} className="text-emerald-400" /> 28 archivos Excel</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5"><FileText size={12} className="text-blue-400" /> 6 ejercicios Word</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5"><Monitor size={12} className="text-amber-400" /> {totalWindowsShortcuts} atajos Windows</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5"><Download size={12} className="text-slate-400" /> Descarga directa</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={12} className="text-slate-400" /> Sin registro</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home