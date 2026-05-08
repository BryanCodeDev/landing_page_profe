import { FileSpreadsheet, FileText, Download } from 'lucide-react'

const ExerciseCard = ({ exercise }) => {
  const levelColors = {
    "Principiante": "bg-blue-50 text-blue-700 border border-blue-100",
    "Intermedio": "bg-amber-50 text-amber-700 border border-amber-100",
    "Avanzado": "bg-rose-50 text-rose-700 border border-rose-100"
  }

  const isWordFile = exercise.fileName?.endsWith('.docx')

  const getButtonStyles = () => {
    if (isWordFile) {
      return "flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 hover:border-blue-400 hover:text-blue-800 hover:shadow-lg transition-all duration-200 whitespace-nowrap flex-shrink-0 group"
    }
    return "flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 to-white hover:from-emerald-100 hover:to-emerald-50 hover:border-emerald-400 hover:text-emerald-800 hover:shadow-lg transition-all duration-200 whitespace-nowrap flex-shrink-0 group"
  }

  const getIconColor = () => {
    return isWordFile ? "text-blue-600 group-hover:text-blue-700" : "text-emerald-600 group-hover:text-emerald-700"
  }

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-6 hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-base font-bold text-slate-900 leading-tight tracking-tight">
              {exercise.title}
            </h3>
            <span className={`shrink-0 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${levelColors[exercise.level]}`}>
              {exercise.level}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {exercise.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {exercise.skills.map(skill => (
              <span key={skill} 
                    className="text-xs font-medium bg-slate-50 border border-slate-200 
                           text-slate-700 px-2.5 py-1 rounded-md hover:bg-slate-100 
                           hover:border-slate-300 transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            {isWordFile ? (
              <FileText size={14} className="text-blue-500" />
            ) : (
              <FileSpreadsheet size={14} className="text-emerald-500" />
            )}
            <span className="font-medium">{exercise.fileName}</span>
            <span className="text-slate-300">·</span>
            <span>{exercise.fileSize}</span>
          </div>
        </div>

        <div className="shrink-0 self-start sm:self-center">
          <a href={exercise.fileUrl}
             download={exercise.fileName}
             className={getButtonStyles()}
             aria-label={`Descargar archivo ${exercise.fileName} - ${exercise.title}`}
          >
            {isWordFile ? (
              <FileText size={18} className={getIconColor()} />
            ) : (
              <FileSpreadsheet size={18} className={getIconColor()} />
            )}
            <span className="font-bold">Descargar</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard