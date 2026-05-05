import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="text-blue-400" size={24} aria-hidden="true" />
            <span className="text-xl font-bold text-white">Servysol</span>
          </div>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Plataforma gratuita de ejercicios de ofimática con descarga directa. 
            Aprende Excel y Word con archivos prácticos sin registro.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm border-t border-slate-800 pt-6" aria-label="Footer - Enlaces rápidos">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link to="/excel" className="hover:text-white transition-colors">Ejercicios Excel</Link>
            <Link to="/word" className="hover:text-white transition-colors">Ejercicios Word</Link>
          </nav>
          <p className="text-xs text-slate-500 mt-6">
            © {currentYear} Servysol. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer