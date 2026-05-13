import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Monitor, Clock, BarChart3, FileText, ArrowRight } from 'lucide-react'

const WindowsPage = () => (
  <>
    <Helmet>
      <title>Windows - Próximamente | Servysol</title>
      <meta name="description" content="Ejercicios prácticos de Windows en desarrollo. Mientras tanto, practica con nuestros ejercicios de Excel y Word." />
    </Helmet>

    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">

          {/* Ícono */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center shadow-sm">
            <Monitor className="text-amber-500" size={36} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-amber-200">
            <Clock size={13} />
            En desarrollo
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Ejercicios de Windows
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-10">
            Estamos preparando contenido práctico sobre organización de archivos, 
            atajos de teclado y configuración del sistema. ¡Pronto disponible!
          </p>

          {/* Sugerencias mientras tanto */}
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Mientras tanto, practica con
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/excel"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
            >
              <BarChart3 size={16} />
              Ejercicios Excel
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/word"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 shadow-sm hover:shadow-md transition-all"
            >
              <FileText size={16} />
              Ejercicios Word
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  </>
)

export default WindowsPage