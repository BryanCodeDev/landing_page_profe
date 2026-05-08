import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ onSearch, placeholder = "Buscar ejercicios..." }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query, onSearch])

  return (
    <div className="max-w-2xl mx-auto mb-6" role="search">
      <div className="relative shadow-sm hover:shadow-md transition-shadow duration-300">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full pl-12 pr-4 py-3.5 text-sm text-slate-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-lg transition-all placeholder:text-slate-400"
        />
      </div>
    </div>
  )
}

export default SearchBar