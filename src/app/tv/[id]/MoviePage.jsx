"use client"; // Este archivo será un componente del lado del cliente

import { useState, useEffect } from 'react';
import ClientMoviePage from './ClientMoviePage';
import SkeletoMoviePage from '@/components/SkeletoMoviePage'; // Importamos el Skeleton para el loading

export default function MoviePage({ movie, cast }) {
  const [loading, setLoading] = useState(true); // Agregamos estado de loading

  // Simulamos la obtención de datos para la película (puedes usar axios si es necesario)
  useEffect(() => {
    const loadMovieData = async () => {
      // Simular un retardo para ver el efecto de loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false); // Cambiamos el estado una vez que los datos están listos
    };
    
    loadMovieData();
  }, []);

  // Si estamos en estado de loading, mostramos el Skeleton
  if (loading) {
    return <SkeletoMoviePage />;
  }

  // Si los datos están listos, mostramos la página de película real
  return (
    <ClientMoviePage movie={movie} cast={cast} />
  );
}
