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
    <div className="border border-slate-200 rounded-lg mb-3 overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
<div className="flex items-center gap-3">
           {iconMap[module.icon] && (() => {
             const Icon = iconMap[module.icon]
             return <Icon size={18} className="text-slate-500" />
           })()}
           <div className="text-left">
             <h2 className="text-base font-semibold text-slate-800">{module.title}</h2>
             <p className="text-xs text-slate-500">{module.description}</p>
           </div>
         </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorMap[module.color] || colorMap.gray}`}>
            {exerciseCount} ejercicios
          </span>
          <ChevronDown className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} size={18} />
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