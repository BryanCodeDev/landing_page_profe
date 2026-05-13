import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FileSpreadsheet, FileText, Monitor, BookOpen, Menu, X } from 'lucide-react'

const navItems = [
  { path: '/excel', label: 'Excel', icon: FileSpreadsheet, color: 'text-emerald-600', activeBg: 'bg-linear-to-br from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200' },
  { path: '/word',  label: 'Word',  icon: FileText,        color: 'text-blue-600',    activeBg: 'bg-linear-to-br from-blue-50 to-blue-100 text-blue-700 border-blue-200' },
  { path: '/windows', label: 'Windows', icon: Monitor,     color: 'text-amber-600',  activeBg: 'bg-linear-to-br from-amber-50 to-amber-100 text-amber-700 border-amber-200' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" aria-label="Navegación principal">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Servysol - Inicio">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
              <BookOpen size={17} className="text-white" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Servy<span className="text-blue-600">sol</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon, activeBg }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? `bg-linear-to-br ${activeBg} shadow-sm border`
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                  }`
                }
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

         {/* Mobile menu */}
         {mobileOpen && (
           <div id="mobile-menu" className="md:hidden pb-4 pt-1 border-t border-slate-100">
             <div className="flex flex-col gap-1 mt-2">
               {navItems.map(({ path, label, icon: Icon, activeBg }) => (
                 <NavLink
                   key={path}
                   to={path}
                   onClick={() => setMobileOpen(false)}
                   className={({ isActive }) =>
                     `flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                       isActive
                         ? `bg-linear-to-br ${activeBg} border`
                         : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                     }`
                   }
                 >
                   <Icon size={18} aria-hidden="true" />
                   {label}
                 </NavLink>
               ))}
             </div>
           </div>
         )}
      </div>
    </nav>
  )
}

export default Navbar