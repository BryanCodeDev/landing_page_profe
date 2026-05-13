import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'

export const SearchBar = ({ onSearch, placeholder = "Buscar ejercicios..." }) => {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => onSearch(query), 300)
    return () => clearTimeout(timer)
  }, [query, onSearch])

  const clear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className="max-w-2xl mx-auto mb-8" role="search">
      <div className="relative group">
        <Search
          size={17}
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors pointer-events-none"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="
            w-full pl-11 pr-10 py-3 text-sm text-slate-800
            bg-white border border-slate-200 rounded-xl
            shadow-sm group-hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400
            placeholder:text-slate-400 transition-all duration-200
          "
        />
        {query && (
          <button
            onClick={clear}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={15} />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar