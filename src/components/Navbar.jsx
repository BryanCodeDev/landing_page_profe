import { Link, NavLink } from 'react-router-dom'
import { FileSpreadsheet, FileText, Monitor, Menu, X, BookOpen } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Inicio', icon: Monitor },
    { path: '/excel', label: 'Excel', icon: FileSpreadsheet },
    { path: '/word', label: 'Word', icon: FileText }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" aria-label="Navegación principal">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center gap-2.5 text-xl font-bold text-slate-900" aria-label="Servysol - Inicio">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="tracking-tight">Servysol</span>
          </Link>

          <div className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-linear-to-br from-blue-50 to-blue-100 text-blue-700 shadow-sm border border-blue-200'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm'
                    }`
                  }
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              )
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-slate-600 hover:bg-slate-50 hover:rounded-lg transition-colors"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 pt-2" role="menu">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                        isActive
                          ? 'bg-linear-to-br from-blue-50 to-blue-100 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                    role="menuitem"
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>{item.label}</span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar