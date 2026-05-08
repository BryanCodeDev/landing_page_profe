import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-slate-300 py-16 mt-auto border-t border-slate-800" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
              <BookOpen size={26} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Servysol</span>
          </div>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Plataforma gratuita de ejercicios de ofimática con descarga directa. 
            Aprende Excel y Word con archivos prácticos sin registro.
          </p>
          <nav className="flex flex-wrap justify-center gap-8 text-sm border-t border-slate-800 pt-8" aria-label="Footer - Enlaces rápidos">
            <Link to="/" className="text-slate-400 hover:text-white hover:text-blue-400 transition-colors font-medium">
              Inicio
            </Link>
            <Link to="/excel" className="text-slate-400 hover:text-white hover:text-emerald-400 transition-colors font-medium">
              Ejercicios Excel
            </Link>
            <Link to="/word" className="text-slate-400 hover:text-white hover:text-blue-400 transition-colors font-medium">
              Ejercicios Word
            </Link>
          </nav>
          <div className="mt-8 pt-6 border-t border-slate-800/50">
            <p className="text-sm text-slate-500">
              © {currentYear} Servysol. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer