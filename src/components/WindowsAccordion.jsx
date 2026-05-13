import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const colorVariants = {
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700' },
  purple:  { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-700' },
  pink:    { bg: 'bg-pink-50',    border: 'border-pink-200',    text: 'text-pink-700' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700' },
  slate:   { bg: 'bg-slate-50',   border: 'border-slate-200',   text: 'text-slate-700' },
}

const WindowsAccordion = ({ sections }) => {
  const [openSections, setOpenSections] = useState(
    sections.reduce((acc, s) => ({ ...acc, [s.id]: false }), {})
  )

  const toggle = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-3">
      {sections.map((section, index) => {
        const colors = colorVariants[section.color] || colorVariants.slate
        const isOpen = openSections[section.id]

        return (
          <div
            key={section.id}
            className={`
              overflow-hidden bg-white rounded-2xl border transition-all duration-300
              ${isOpen ? 'border-slate-300 shadow-md' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'}
            `}
          >
            <button
              onClick={() => toggle(section.id)}
              className="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-50/70 transition-colors duration-200 group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className={`shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${colors.bg} ${colors.border} ${colors.text}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <div className="text-left">
                  <h2 className="text-sm font-bold text-slate-900 leading-tight">{section.title}</h2>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{section.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <span className={`hidden sm:block text-[11px] font-bold px-2.5 py-1 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                  {section.shortcuts.length} atajos
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
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100">
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{section.description}</p>
                    <div className="space-y-2">
                      {section.shortcuts.map((sc, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors duration-150 group/row"
                        >
                          <span className="text-sm text-slate-700 group-hover/row:text-slate-900 transition-colors">
                            {sc.description}
                          </span>
                          <kbd className="
                            px-2.5 py-1 text-[11px] font-bold rounded-lg
                            bg-slate-100 border border-slate-200 text-slate-600
                            group-hover/row:bg-slate-200 group-hover/row:border-slate-300
                            transition-all duration-150 shadow-sm
                          ">
                            {sc.keys}
                          </kbd>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default WindowsAccordion