import axios from 'axios';
import ClientTVPage from './ClientTVPage';
import ErrorPage from '@/components/ErrorPage'; // Página de error
import SkeletonTVPage from '@/components/SkeletonTVPage'; // Skeleton de carga

export async function generateMetadata({ params }) {
  const { id } = params;
  const tvId = id.split('-')[0];

  if (isNaN(tvId)) {
    return {
      title: "Serie no encontrada - PelisDeMiedo.com",
    };
  }

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}`, {
      params: {
        language: 'es-ES',
        append_to_response: 'videos,similar,credits',
      },
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });

    const tvShow = response.data;

    return {
      title: `PelisDeMiedo.com - ${tvShow.name}`,
      description: tvShow.overview,
      openGraph: {
        title: `PelisDeMiedo.com - ${tvShow.name}`,
        description: tvShow.overview,
        images: [
          {
            url: `https://image.tmdb.org/t/p/original/${tvShow.backdrop_path}`,
            alt: `${tvShow.name} image`,
          },
        ],
        url: `https://pelisdemiedo.com/tv/${tvShow.id}-${tvShow.name.toLowerCase().replace(/\s+/g, '-')}`,
      },
    };
  } catch (error) {
    console.error('Error fetching tv show:', error);
    return {
      title: "Serie no encontrada - PelisDeMiedo.com",
    };
  }
}

export default async function TVPage({ params }) {
  const { id } = params;
  const tvId = id.split('-')[0];

  if (isNaN(tvId)) {
    return <ErrorPage message="El ID proporcionado no es válido." />;
  }

  try {
    const fetchTVShowData = new Promise(async (resolve) => {
      setTimeout(async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}`, {
          params: {
            language: 'es-ES',
            append_to_response: 'videos,similar,credits',
          },
          headers: {
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
        });
        resolve(response.data);
      }, 1000);
    });

    const tvShow = await fetchTVShowData;
    const cast = tvShow.credits.cast.slice(0, 20);

    return <ClientTVPage tvShow={tvShow} cast={cast} />;
  } catch (error) {
    console.error('Error fetching tv show:', error);
    return <ErrorPage message="No se encontró la serie solicitada." />;
  }
}

// Añadimos SkeletonTVPage para mostrarlo antes de que los datos se carguen
export const loading = () => <SkeletonTVPage />;
