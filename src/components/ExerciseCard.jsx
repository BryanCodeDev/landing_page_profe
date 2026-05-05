import { FileSpreadsheet, FileText, Download } from 'lucide-react'

const ExerciseCard = ({ exercise }) => {
  const levelColors = {
    "Principiante": "bg-slate-100 text-slate-700",
    "Intermedio": "bg-amber-100 text-amber-800",
    "Avanzado": "bg-red-100 text-red-800"
  }

  const isWordFile = exercise.fileName?.endsWith('.docx')

  return (
    <div className="flex items-start justify-between gap-4 py-4 
                    border-b border-slate-100 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold text-slate-800">
            {exercise.title}
          </h3>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium 
                       ${levelColors[exercise.level]}`}>
            {exercise.level}
          </span>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-3">
          {exercise.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {exercise.skills.map(skill => (
            <span key={skill} 
                  className="text-xs bg-slate-50 border border-slate-200 
                         text-slate-600 px-2 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
          {isWordFile ? <FileText size={11} /> : <FileSpreadsheet size={11} />}
          <span>{exercise.fileName} · {exercise.fileSize}</span>
        </div>
      </div>

      <a href={exercise.fileUrl}
         download={exercise.fileName}
         className="flex items-center gap-2 text-xs font-medium 
                    px-3 py-2 rounded-lg border border-slate-200 
                    hover:bg-blue-50 hover:border-blue-300 
                    hover:text-blue-700 transition-colors 
                    whitespace-nowrap flex-shrink-0"
         aria-label={`Descargar archivo ${exercise.fileName} - ${exercise.title}`}
      >
        <Download size={13} aria-hidden="true" />
        <span>Descargar</span>
      </a>
    </div>
  )
}

export default ExerciseCard