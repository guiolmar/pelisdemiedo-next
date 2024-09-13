import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Star, Calendar } from "lucide-react";
import moment from "moment";
import 'moment/dist/locale/es';

export const MovieCard = ({ movie, badge }) => {
  moment.locale('es');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsPopoverOpen(true);
    }, 1000); 
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsPopoverOpen(false);
  };

  const title = movie.media_type === "movie" ? movie.title : movie.name;
  const releaseDate = movie.media_type === "movie" ? movie.release_date : movie.first_air_date;
  const originalTitle = movie.media_type === "movie" ? movie.original_title : movie.original_name;
  const safeTitle = movie.original_title || movie.original_name || '';
  const encodedTitle = encodeURIComponent(safeTitle.toLowerCase().replace(/\s+/g, '-'));

  // Definimos el tipo de etiqueta para "película" o "serie"
  const mediaLabel = movie.media_type === "movie" ? "Película" : "Serie";
  const mediaType = movie.original_title ? "movie" : "tv";

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-[200px] overflow-hidden cursor-pointer hover:shadow-lg"
        >
          {/* Etiqueta que indica si es una película o serie */}
          {badge && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
            {mediaLabel}
          </span>
        )}
          
          <Link href={`/${mediaType}/${movie.id}-${encodedTitle}`}>
            <Card>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/assets/home-bg-search.jpg"}
                alt={title}
                className="w-full h-[300px] object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 whitespace-normal">{title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {Math.round(movie.vote_average * 10) / 10}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {moment(releaseDate).format("L")}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] relative p-0">
        <div className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` : '/assets/home-bg-search.jpg'})`,
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        <div className="relative z-10 p-4 text-white">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm">
            Fecha de lanzamiento: {moment(releaseDate).format("LL")}
          </p>
          <p className="text-sm mt-2 flex items-center">
            Calificación: {Math.round(movie.vote_average * 10) / 10}
            <Star className="w-4 h-4 ml-1 text-yellow-400" />
          </p>
          <p className="text-sm mt-2">{movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
