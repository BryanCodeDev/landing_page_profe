import { Helmet } from 'react-helmet-async'
import { Monitor, Clock } from 'lucide-react'

const WindowsPage = () => {
  return (
    <>
      <Helmet>
        <title>Windows - SERVYSOL</title>
        <meta name="description" content="Aprende Windows con ejercicios prácticos" />
      </Helmet>
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Monitor className="text-amber-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">Windows</h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-6">
              <Clock size={14} />
              Próximamente
            </div>
            <p className="text-slate-600">
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