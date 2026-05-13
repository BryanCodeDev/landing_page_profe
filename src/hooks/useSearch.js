import { useState, useMemo } from 'react';

/**
 * useSearch — Búsqueda plana sobre un arreglo de objetos.
 * Retorna null si no hay resultados (no un arreglo vacío).
 *
 * @deprecated Preferir useFileSearch para búsqueda a nivel de archivo individual.
 */
const useSearch = (data, searchKeys = []) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return null;

    const searchTerm = query.toLowerCase();
    const filtered = [];

    data.forEach((item) => {
      const matches = searchKeys.some((key) => {
        const value = item[key];
        return value && value.toString().toLowerCase().includes(searchTerm);
      });

      if (matches) {
        filtered.push(item);
      }
    });

    return filtered.length > 0 ? filtered : [];
  }, [data, query, searchKeys]);

  return {
    query,
    setQuery,
    results
  };
};

export default useSearch;