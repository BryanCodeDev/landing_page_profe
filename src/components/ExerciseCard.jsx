import { FileSpreadsheet, FileText, Download } from 'lucide-react'

const levelConfig = {
  "Principiante": { cls: "bg-blue-50 text-blue-700 border border-blue-100",   dot: "bg-blue-400"   },
  "Intermedio":   { cls: "bg-amber-50 text-amber-700 border border-amber-100", dot: "bg-amber-400"  },
  "Avanzado":     { cls: "bg-rose-50 text-rose-700 border border-rose-100",    dot: "bg-rose-400"   },
}

const ExerciseCard = ({ exercise }) => {
  const isWord   = exercise.fileName?.endsWith('.docx')
  const accent   = isWord ? 'blue' : 'emerald'
  const FileIcon = isWord ? FileText : FileSpreadsheet
  const level    = levelConfig[exercise.level] || levelConfig["Principiante"]

  return (
    <div className={`
      group bg-white rounded-2xl border border-slate-200 shadow-sm
      hover:shadow-lg hover:border-${accent}-200 hover:-translate-y-0.5
      transition-all duration-300 p-5 mb-3 last:mb-0
    `}>
      <div className="flex flex-col sm:flex-row items-start gap-4">

        {/* Icono lateral */}
        <div className={`
          shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
          bg-${accent}-50 border border-${accent}-100
          group-hover:bg-${accent}-100 transition-colors
        `}>
          <FileIcon size={20} className={`text-${accent}-600`} />
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-sm font-bold text-slate-900 leading-tight tracking-tight">
              {exercise.title}
            </h3>
            <span className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md ${level.cls}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${level.dot}`}></span>
              {exercise.level}
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
            {exercise.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {exercise.skills.map(skill => (
              <span key={skill} className="text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md hover:bg-slate-100 transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <FileIcon size={12} className={`text-${accent}-400`} />
            <span className="font-medium text-slate-500">{exercise.fileName}</span>
            <span className="text-slate-300">·</span>
            <span>{exercise.fileSize}</span>
          </div>
        </div>

        {/* Botón descarga */}
        <div className="shrink-0 self-start sm:self-center">
          <a
            href={exercise.fileUrl}
            download={exercise.fileName}
            aria-label={`Descargar ${exercise.fileName} - ${exercise.title}`}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold
              bg-${accent}-600 text-white
              hover:bg-${accent}-700 active:scale-95
              shadow-sm hover:shadow-md transition-all duration-200
              whitespace-nowrap
            `}
          >
            <Download size={14} />
            Descargar
          </a>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard