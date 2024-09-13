import axios from 'axios';
import ClientMoviePage from './ClientMoviePage';
import ErrorPage from '@/components/ErrorPage'; // Importa el componente de error
import SkeletonMoviePage from '@/components/SkeletonMoviePage'; // Importa el componente Skeleton

export async function generateMetadata({ params }) {
  const { id } = params;

  const movieId = id.split('-')[0];

  // Validar si movieId es un número válido
  if (isNaN(movieId)) {
    return {
      title: "Película no encontrada - PelisDeMiedo.com",
    };
  }

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        language: 'es-ES',
        append_to_response: 'videos,similar,credits',
      },
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });

    const movie = response.data;

    return {
      title: `PelisDeMiedo.com - ${movie.title}`,
      description: movie.overview,
      openGraph: {
        title: `PelisDeMiedo.com - ${movie.title}`,
        description: movie.overview,
        images: [
          {
            url: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            alt: `${movie.title} image`,
          },
        ],
        url: `https://pelisdemiedo.com/movie/${movie.id}-${movie.title.toLowerCase().replace(/\s+/g, '-')}`,
      },
    };
  } catch (error) {
    console.error('Error fetching movie:', error);
    return {
      title: "Película no encontrada - PelisDeMiedo.com",
    };
  }
}

export default async function MoviePage({ params }) {
  const { id } = params;
  const movieId = id.split('-')[0];

  // Validar si movieId es un número válido
  if (isNaN(movieId)) {
    return <ErrorPage message="El ID proporcionado no es válido." />;
  }

  try {
    // Simular un tiempo de carga para mostrar el Skeleton
    const fetchMovieData = new Promise(async (resolve) => {
      setTimeout(async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            language: 'es-ES',
            append_to_response: 'videos,similar,credits',
          },
          headers: {
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
        });
        resolve(response.data);
      }, 1000); // Simulación de un retraso de 1 segundo
    });

    const movie = await fetchMovieData;
    const cast = movie.credits.cast.slice(0, 20);

    // Una vez que los datos se carguen, renderizamos la página de la película
    return <ClientMoviePage movie={movie} cast={cast} />;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return <ErrorPage message="No se encontró la película solicitada." />;
  }
}

// Añadimos SkeletoMoviePage para mostrarlo antes de que los datos se carguen
export const loading = () => <SkeletonMoviePage />;
