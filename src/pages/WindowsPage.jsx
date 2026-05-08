import { Helmet } from 'react-helmet-async'
import { Monitor, Clock } from 'lucide-react'

const WindowsPage = () => {
  return (
    <>
      <Helmet>
        <title>Windows - SERVYSOL</title>
        <meta name="description" content="Aprende Windows con ejercicios prácticos" />
      </Helmet>
      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-linear-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center shadow-lg">
              <Monitor className="text-amber-600" size={44} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Windows</h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-50 to-amber-100 text-amber-700 rounded-full text-sm font-bold uppercase tracking-wider mb-8 border border-amber-200">
              <Clock size={16} />
              Próximamente
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto">
              Estamos trabajando en contenido exclusivo para Windows. 
              ¡Suscríbete para recibir notificaciones cuando esté disponible!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WindowsPage;