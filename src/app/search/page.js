"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { MovieList } from '@/components/MovieList'; // Importamos el nuevo componente
import { SkeletonMovieList } from '@/components/SkeletonMovieList';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q'); 
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        try {
          const response = await axios.get('/api/tmdb', {
            params: {
              type: 'search/multi', 
              'query[query]': query, 
              'query[language]': 'es-ES'
            }
          });
          const filteredResults = response.data.results.filter(
            (result) => result.media_type === 'movie' || result.media_type === 'tv'
          );
          setSearchResults(filteredResults);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchSearchResults();
    }
  }, [query]);

  if (loading) {
    return (
      <div className="flex flex-col gap-8 p-4">
        <h1 className="text-3xl font-semibold text-white">Resultados de búsqueda para "{query}"</h1>
        {[...Array(10)].map((_, index) => (
          <SkeletonMovieList key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <h1 className="text-3xl font-semibold text-white">Resultados de búsqueda para "{query}"</h1>
      <div className="flex flex-col gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <MovieList key={result.id} movie={result} badge={true} />
          ))
        ) : (
          <p className='text-white'>No se encontraron resultados para "{query}".</p>
        )}
      </div>
    </div>
  );
}
