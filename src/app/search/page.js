"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Loading from './Loading'; // Componente de loading
import SearchResults from './SearchResults'; // Componente de resultados de búsqueda

export default function SearchPage() {
  return (
    <div className="p-4 bg-[#0A0A0A] min-h-screen">
      <Suspense fallback={<Loading />}>
        <SearchComponent />
      </Suspense>
    </div>
  );
}

function SearchComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  if (!query) {
    return <p className="text-white text-xl">Introduce un término de búsqueda para empezar.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-white mb-4">Resultados de búsqueda para: "{query}"</h1>
      <SearchResults query={query} />
    </div>
  );
}
