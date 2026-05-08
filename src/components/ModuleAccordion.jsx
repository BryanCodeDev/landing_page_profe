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
  green:  { icon: "bg-green-50 border-green-200 text-green-700",   badge: "bg-green-100 text-green-700 border border-green-200"  },
  blue:   { icon: "bg-blue-50 border-blue-200 text-blue-700",      badge: "bg-blue-100 text-blue-700 border border-blue-200"    },
  teal:   { icon: "bg-teal-50 border-teal-200 text-teal-700",      badge: "bg-teal-100 text-teal-700 border border-teal-200"    },
  amber:  { icon: "bg-amber-50 border-amber-200 text-amber-700",   badge: "bg-amber-100 text-amber-700 border border-amber-200" },
  purple: { icon: "bg-purple-50 border-purple-200 text-purple-700",badge: "bg-purple-100 text-purple-700 border border-purple-200"},
  coral:  { icon: "bg-rose-50 border-rose-200 text-rose-700",      badge: "bg-rose-100 text-rose-700 border border-rose-200"    },
  pink:   { icon: "bg-pink-50 border-pink-200 text-pink-700",      badge: "bg-pink-100 text-pink-700 border border-pink-200"    },
  gray:   { icon: "bg-slate-50 border-slate-200 text-slate-600",   badge: "bg-slate-100 text-slate-600 border border-slate-200" },
}

const ModuleAccordion = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const colors = colorMap[module.color] ?? colorMap.gray
  const Icon   = iconMap[module.icon]

  return (
    <div className={`mb-3 overflow-hidden bg-white rounded-2xl border transition-all duration-300 ${
      isOpen ? 'border-slate-300 shadow-md' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
    }`}>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-50/70 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Número de módulo */}
          <span className="hidden sm:flex shrink-0 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 items-center justify-center text-xs font-bold text-slate-400">
            {index + 1}
          </span>

          {/* Ícono */}
          <div className={`shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${colors.icon}`}>
            {Icon && <Icon size={19} />}
          </div>

          {/* Texto */}
          <div className="text-left">
            <h2 className="text-sm font-bold text-slate-900 leading-tight">{module.title}</h2>
            <p className="text-xs text-slate-400 mt-0.5 leading-snug">{module.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 ml-3">
          <span className={`hidden sm:inline text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
            {module.exercises.length} ejercicios
          </span>
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
          }`}>
            <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-4 pt-3 pb-4">
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