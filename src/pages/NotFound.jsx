import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, FileSpreadsheet, FileText, ArrowLeft } from 'lucide-react'

const quickLinks = [
  { to: '/excel', label: 'Ejercicios Excel', icon: FileSpreadsheet, color: 'hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700', iconColor: 'text-emerald-500' },
  { to: '/word',  label: 'Ejercicios Word',  icon: FileText,        color: 'hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700',       iconColor: 'text-blue-500'    },
]

const NotFound = () => (
  <>
    <Helmet>
      <title>404 - Página no encontrada | Servysol</title>
      <meta name="description" content="Página no encontrada. Explora nuestros ejercicios de Excel y Word." />
    </Helmet>

    <div className="min-h-[80vh] flex items-center justify-center bg-linear-to-b from-slate-50 to-white px-4">
      <div className="max-w-md w-full text-center">

        {/* Número 404 */}
        <div className="relative mb-6">
          <p className="text-[120px] font-extrabold text-slate-100 leading-none select-none tracking-tighter">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          Página no encontrada
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
          La página que buscas no existe o fue movida. Prueba con uno de estos accesos directos.
        </p>

        {/* Links rápidos */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {quickLinks.map(({ to, label, icon: Icon, color, iconColor }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center justify-center gap-2 px-4 py-3.5 bg-white border border-slate-200 rounded-xl font-semibold text-sm text-slate-700 transition-all duration-200 shadow-sm hover:shadow-md ${color}`}
            >
              <Icon size={17} className={iconColor} />
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={15} />
          Volver al inicio
        </Link>
      </div>
    </div>
  </>
)

export default NotFound