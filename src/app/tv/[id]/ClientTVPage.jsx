"use client";

import { useState } from 'react';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { MovieCard } from '@/components/MovieCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, Users, Globe, TrendingUp, Tv } from 'lucide-react'; // Cambié algunos iconos a Tv
import moment from 'moment';
import 'moment/dist/locale/es';

export default function ClientTVPage({ tvShow, cast }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState(
    tvShow.videos.results.find(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    )?.key || null
  );

  return (
    <div className="flex flex-col gap-8 pb-16">
      <section className="relative h-[500px] overflow-hidden rounded-lg w-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${tvShow.backdrop_path}`}
          alt={tvShow.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-start justify-end text-white p-8">
          <h1 className="text-4xl font-bold mb-2">{tvShow.name}<span className="text-2xl font-normal ml-2">({moment(tvShow.first_air_date).format('YYYY')})</span></h1>
          <p className="text-xl mb-4 italic">{tvShow.tagline}</p>
          <div className="flex items-center space-x-4 mb-4">
            {ratingCircle(tvShow.vote_average)}
            <span className="text-lg">Puntuación de usuario</span>
          </div>
          <div className="flex space-x-2 mb-4">
            {tvShow.genres.map((genre) => (
              <Badge key={genre.id} variant="secondary">{genre.name}</Badge>
            ))}
          </div>
          {trailerKey && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Ver Trailer
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-black rounded-lg shadow-lg w-full max-w-3xl">
                <div className="bg-white rounded-lg shadow-lg w-full">
                  <iframe
                    width="100%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="flex justify-end p-4 bg-black">
                    <AlertDialogAction onClick={() => setIsModalOpen(false)}>
                      Cerrar
                    </AlertDialogAction>
                  </div>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sinopsis</h2>
              <p className="text-lg">{tvShow.overview}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Detalles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <DetailItem icon={<Calendar className="text-primary" />} label="Fecha de estreno" value={moment(tvShow.first_air_date).format('LL')} />
                <DetailItem icon={<Clock className="text-primary" />} label="Duración" value={`${tvShow.episode_run_time[0]} minutos`} />
                <DetailItem icon={<Users className="text-primary" />} label="Clasificación" value={tvShow.adult ? 'Adultos' : 'Todos los públicos'} />
                <DetailItem icon={<Globe className="text-primary" />} label="Idioma original" value={tvShow.original_language.toUpperCase()} />
                <DetailItem icon={<Tv className="text-primary" />} label="Episodios" value={tvShow.number_of_episodes} />
                <DetailItem icon={<TrendingUp className="text-primary" />} label="Popularidad" value={tvShow.popularity.toFixed(2)} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt={tvShow.name}
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Información adicional</h3>
              <div className="space-y-2">
                <p><strong>Título original:</strong> {tvShow.original_name}</p>
                <p><strong>Votos:</strong> {tvShow.vote_count}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cast Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Reparto</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-4 p-4">
            {cast.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Similar TV Shows Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Series similares</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-4 p-4">
            {tvShow.similar.results.map((similarShow) => (
              <MovieCard key={similarShow.id} movie={similarShow} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 bg-secondary/50 p-3 rounded-lg">
    {icon}
    <div>
      <span className="font-semibold text-sm text-secondary-foreground">{label}</span>
      <p className="text-foreground">{value}</p>
    </div>
  </div>
);

const ratingCircle = (rating) => {
  const percentage = Math.round(rating * 10);
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  let color;
  if (percentage >= 70) {
    color = '#4caf50';
  } else if (percentage >= 40) {
    color = '#ffeb3b';
  } else {
    color = '#f44336';
  }

  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full" viewBox="0 0 40 40">
        <circle
          className="text-gray-300"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="18"
          cx="20"
          cy="20"
        />
        <circle
          stroke={color}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r="18"
          cx="20"
          cy="20"
          transform="rotate(-90 20 20)"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white">
        {percentage}%
      </div>
    </div>
  );
};

const ActorCard = ({ actor }) => (
  <Card className="w-[150px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-4">
    <img
  src={actor.profile_path 
    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
    : '/assets/placeholder-actor.png'  // Cambia la ruta aquí
  }
  alt={actor.name}
  className="w-full h-[200px] object-cover rounded-lg mb-2"
/>

      <h3 className="font-semibold text-sm truncate">{actor.name}</h3>
      <p className="text-xs text-muted-foreground truncate">{actor.character}</p>
    </CardContent>
  </Card>
);