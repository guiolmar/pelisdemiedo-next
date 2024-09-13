import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Star, Calendar } from "lucide-react";
import moment from "moment";
import 'moment/dist/locale/es';

export const MovieCard = ({ movie }) => {
  moment.locale('es');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Estado para manejar si se abre el popover
  const [hoverTimeout, setHoverTimeout] = useState(null); // Guardar el timeout
  
  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsPopoverOpen(true);
    }, 1000); // Espera 1 segundo antes de abrir el popover
    setHoverTimeout(timeout); // Guardar el timeout en el estado
  };
  
  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout); // Limpiar el timeout si el ratón sale antes de 1 segundo
    setIsPopoverOpen(false); // Cerrar el popover
  };

  const encodedTitle = encodeURIComponent(movie.original_title.toLowerCase().replace(/\s+/g, '-'));

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-[200px] overflow-hidden cursor-pointer hover:shadow-lg"
        >
          <Link href={`/movie/${movie.id}-${encodedTitle}`}>
            <Card>
              <img
              // Si existe poster_path, mostrar la imagen, de lo contrario, mostrar una imagen por defecto (imagen no disponible)
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/assets/home-bg-search.jpg"}
                alt={movie.title}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 whitespace-normal">{movie.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {Math.round(movie.vote_average * 10) / 10}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {moment(movie.release_date).format("L")}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] relative p-0">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
            opacity: 0.3,  // Opacidad reducida para la imagen de fondo
            zIndex: 0,     // Mantiene la imagen detrás del contenido
          }}
        />

        {/* Contenido encima de la imagen */}
        <div className="relative z-10 p-4 text-white">
          <h4 className="text-lg font-semibold">{movie.title}</h4>
          <p className="text-sm">Fecha de lanzamiento: {moment(movie.release_date).format("LL")}</p>
          <p className="text-sm mt-2 flex items-center">Calificación: {Math.round(movie.vote_average * 10) / 10}
            <Star className="w-4 h-4 ml-1 text-yellow-400" />
          </p>
          {/* movie.overview tiene que ser truncado a 100 caracteres */}
          <p className="text-sm mt-2">{movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
