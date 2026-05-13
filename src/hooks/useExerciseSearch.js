import { useState, useMemo } from 'react';

/**
 * useExerciseSearch — Búsqueda agrupada por módulos/temas.
 * Retorna módulos con sus ejercicios filtrados.
 *
 * @deprecated Preferir useFileSearch para búsqueda a nivel de archivo individual.
 */
const useExerciseSearch = (modules, searchKeys = []) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return null;

    const searchTerm = query.toLowerCase();

    return modules
      .map(module => ({
        ...module,
        exercises: module.exercises.filter(exercise =>
          searchKeys.some(key => {
            const value = exercise[key];
            if (Array.isArray(value)) {
              return value.some(v => v.toLowerCase().includes(searchTerm));
            }
            return value && value.toString().toLowerCase().includes(searchTerm);
          })
        )
      }))
      .filter(module => module.exercises.length > 0);
  }, [modules, query, searchKeys]);

  return {
    query,
    setQuery,
    results
  };
};

export default useExerciseSearch;