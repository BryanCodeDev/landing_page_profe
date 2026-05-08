import { Link } from 'react-router-dom'
import { BookOpen, FileSpreadsheet, FileText, Download, Shield } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-slate-300 mt-auto border-t border-slate-800" role="contentinfo">
      <div className="container mx-auto px-4 py-14">
        <div className="max-w-4xl mx-auto">

          {/* Top: logo + descripción */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <BookOpen size={22} className="text-white" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Servy<span className="text-blue-400">sol</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Ejercicios gratuitos de Excel y Word con descarga directa.
              Sin registro, sin redirecciones. Solo práctica real.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { icon: <FileSpreadsheet size={15} />, label: '28 ejercicios Excel', color: 'text-emerald-400' },
              { icon: <FileText size={15} />,        label: '4 ejercicios Word',   color: 'text-blue-400'    },
              { icon: <Download size={15} />,        label: 'Descarga directa',    color: 'text-slate-400'   },
              { icon: <Shield size={15} />,          label: 'Sin registro',        color: 'text-slate-400'   },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-xl py-3 px-4">
                <span className={item.color}>{item.icon}</span>
                <span className="text-xs font-medium text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Links + copyright */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer - Enlaces">
              <Link to="/"      className="text-slate-400 hover:text-white transition-colors font-medium">Inicio</Link>
              <Link to="/excel" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium">Ejercicios Excel</Link>
              <Link to="/word"  className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Ejercicios Word</Link>
            </nav>
            <p className="text-xs text-slate-600">
              © {currentYear} Servysol. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer