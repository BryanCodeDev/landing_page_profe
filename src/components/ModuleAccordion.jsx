import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Calculator, BarChart3, Hash, Pin, Filter, Search, Scale, Award, FileText } from 'lucide-react'
import ExerciseCard from './ExerciseCard'

const iconMap = {
  calculator: Calculator,
  "bar-chart-3": BarChart3,
  hash: Hash,
  pin: Pin,
  filter: Filter,
  search: Search,
  scale: Scale,
  award: Award,
  "file-text": FileText
}

const colorMap = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  teal: "bg-teal-100 text-teal-700",
  amber: "bg-amber-100 text-amber-700",
  purple: "bg-purple-100 text-purple-700",
  coral: "bg-rose-100 text-rose-700",
  pink: "bg-pink-100 text-pink-700",
  gray: "bg-slate-100 text-slate-700"
}

const ModuleAccordion = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const exerciseCount = module.exercises.length

  return (
    <div className="border-0 mb-4 overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center hover:bg-slate-50/80 transition-all duration-200 group"
      >
        <div className="flex items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center group-hover:shadow-sm transition-shadow">
            {iconMap[module.icon] && (() => {
              const Icon = iconMap[module.icon]
              return <Icon size={20} className="text-slate-600" />
            })()}
          </div>
          <div className="text-left">
            <h2 className="text-lg font-bold text-slate-900 leading-tight">{module.title}</h2>
            <p className="text-sm text-slate-500 mt-0.5">{module.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg ${colorMap[module.color] || colorMap.gray}`}>
            {exerciseCount} ejercicios
          </span>
          <ChevronDown className={`text-slate-400 group-hover:text-slate-600 transition-all duration-200 ${isOpen ? 'rotate-180 text-slate-600' : ''}`} size={20} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-3">
              {module.exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ModuleAccordion