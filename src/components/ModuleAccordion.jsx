import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Calculator, BarChart3, Hash, Pin, Filter, Search, Scale, Award, FileText } from 'lucide-react'
import ExerciseCard from './ExerciseCard'

const iconMap = {
  calculator:    Calculator,
  "bar-chart-3": BarChart3,
  hash:          Hash,
  pin:           Pin,
  filter:        Filter,
  search:        Search,
  scale:         Scale,
  award:         Award,
  "file-text":   FileText,
}

const colorMap = {
  green:  { icon: "bg-emerald-50 border-emerald-200 text-emerald-600",  badge: "bg-emerald-50 text-emerald-700 border border-emerald-200"  },
  blue:   { icon: "bg-blue-50 border-blue-200 text-blue-600",           badge: "bg-blue-50 text-blue-700 border border-blue-200"           },
  teal:   { icon: "bg-teal-50 border-teal-200 text-teal-600",           badge: "bg-teal-50 text-teal-700 border border-teal-200"           },
  amber:  { icon: "bg-amber-50 border-amber-200 text-amber-600",        badge: "bg-amber-50 text-amber-700 border border-amber-200"        },
  purple: { icon: "bg-purple-50 border-purple-200 text-purple-600",     badge: "bg-purple-50 text-purple-700 border border-purple-200"     },
  coral:  { icon: "bg-rose-50 border-rose-200 text-rose-600",           badge: "bg-rose-50 text-rose-700 border border-rose-200"           },
  pink:   { icon: "bg-pink-50 border-pink-200 text-pink-600",           badge: "bg-pink-50 text-pink-700 border border-pink-200"           },
  gray:   { icon: "bg-slate-50 border-slate-200 text-slate-600",        badge: "bg-slate-50 text-slate-600 border border-slate-200"        },
}

const ModuleAccordion = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const Icon   = iconMap[module.icon]
  const colors = colorMap[module.color] || colorMap.gray
  const count  = module.exercises.length

  return (
    <div className={`
      mb-3 overflow-hidden bg-white rounded-2xl border transition-all duration-300
      ${isOpen ? 'border-slate-300 shadow-md' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'}
    `}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-50/70 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Número de módulo */}
          <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-400 text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>

          {/* Ícono con color del módulo */}
          <div className={`shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${colors.icon}`}>
            {Icon && <Icon size={18} aria-hidden="true" />}
          </div>

          <div className="text-left">
            <h2 className="text-sm font-bold text-slate-900 leading-tight">{module.title}</h2>
            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{module.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className={`hidden sm:block text-[11px] font-bold px-2.5 py-1 rounded-lg ${colors.badge}`}>
            {count} {count === 1 ? 'ejercicio' : 'ejercicios'}
          </span>
          <ChevronDown
            size={18}
            className={`text-slate-400 group-hover:text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-slate-100">
              {module.exercises.map(ex => (
                <ExerciseCard key={ex.id} exercise={ex} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ModuleAccordion