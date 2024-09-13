"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, TrendingUp, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { SkeletonMovieCard } from '@/components/SkeletonMovieCard';
import { MovieCard } from '@/components/MovieCard';
import moment from 'moment';
import Image from 'next/image';

moment.locale('es');

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingPopular, setLoadingPopular] = useState(true);

  useEffect(() => {
    // Llamada para obtener películas en tendencia
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('/api/tmdb', {
          params: { type: 'trending/movie/week', language: 'es-ES' },
        });
        const filteredMovies = response.data.results.filter((movie) =>
          movie.genre_ids.includes(27) // ID del género terror
        );
        setTrendingMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoadingTrending(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    // Llamada para obtener películas populares
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('/api/tmdb', {
          params: { type: 'discover/movie', language: 'es-ES', with_genres: 27 },
        });
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoadingPopular(false);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden rounded-lg">
        <Image
          src="/assets/home-bg-search.jpg"
          alt="Horror Movie Collage"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-4xl font-bold mb-4 text-center">Bienvenido a PelisDeMiedo.com</h1>
          <p className="text-xl mb-8">Descubre las mejores películas y series de terror</p>
          <div className="w-full max-w-md relative">
            <Input
              type="search"
              placeholder="Buscar películas, series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Películas en tendencia */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
          <TrendingUp className="mr-2" /> Películas en Tendencia
        </h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          {loadingTrending ? (
            <div className="flex w-max space-x-4 p-4">
              {[...Array(10)].map((_, index) => (
                <SkeletonMovieCard key={index} />
              ))}
            </div>
          ) : (
            <div className="flex w-max space-x-4 p-4">
              {trendingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Películas populares */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
          <Star className="mr-2" /> Películas Populares
        </h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          {loadingPopular ? (
            <div className="flex w-max space-x-4 p-4">
              {[...Array(10)].map((_, index) => (
                <SkeletonMovieCard key={index} />
              ))}
            </div>
          ) : (
            <div className="flex w-max space-x-4 p-4">
              {popularMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}
