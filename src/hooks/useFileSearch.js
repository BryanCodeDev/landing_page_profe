import { useState, useMemo } from 'react';

const useFileSearch = (modules, searchKeys = []) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return null;

    const searchTerm = query.toLowerCase();
    const flatResults = [];

    modules.forEach((module) => {
      module.exercises.forEach((exercise) => {
        const matches = searchKeys.some((key) => {
          const value = exercise[key];
          if (Array.isArray(value)) {
            return value.some((v) => v.toLowerCase().includes(searchTerm));
          }
          return value && value.toString().toLowerCase().includes(searchTerm);
        });

        if (matches) {
          flatResults.push({
            ...exercise,
            moduleId: module.id,
            moduleTitle: module.title,
            moduleColor: module.color || 'gray',
          });
        }
      });
    });

    return flatResults;
  }, [modules, query, searchKeys]);

  return {
    query,
    setQuery,
    results,
  };
};

export default useFileSearch;