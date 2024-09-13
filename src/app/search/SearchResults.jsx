import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieList } from '@/components/MovieList';
import { SkeletonMovieList } from '@/components/SkeletonMovieList';

export default function SearchResults({ query }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('/api/tmdb', {
          params: {
            type: 'search/multi',
            'query[query]': query,
            'query[language]': 'es-ES',
          },
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

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {[...Array(6)].map((_, index) => (
          <SkeletonMovieList key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <MovieList key={result.id} movie={result} badge={true} />
        ))
      ) : (
        <p className="text-white text-xl">No se encontraron resultados para "{query}".</p>
      )}
    </div>
  );
}
