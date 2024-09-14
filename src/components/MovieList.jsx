import Link from "next/link";
import { Star, Calendar } from "lucide-react";
import moment from 'moment';
import 'moment/locale/es';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MovieList = ({ movie, badge }) => {
  moment.locale('es');

  const title = movie.media_type === "movie" ? movie.title : movie.name;
  const releaseDate = movie.media_type === "movie" ? movie.release_date : movie.first_air_date;
  const originalTitle = movie.media_type === "movie" ? movie.original_title : movie.original_name;
  const safeTitle = movie.original_title || movie.original_name || '';
  const encodedTitle = encodeURIComponent(safeTitle.toLowerCase().replace(/\s+/g, '-'));

  // Definimos el tipo de etiqueta para "película" o "serie"
  const mediaLabel = movie.media_type === "movie" ? "Película" : "Serie";
  const mediaType = movie.original_title ? "movie" : "tv";
  
  return (
    <Link href={`/${mediaType}/${movie.id}-${encodedTitle}`}>
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
      <div className="flex">
        <div className="w-24 flex-shrink-0">
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : "/assets/home-bg-search.jpg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex-grow p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">{title}</h3>

            <div className="flex items-center gap-2 mt-1">
              {badge && (
                <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs hover:bg-white hover:text-black">
                  {mediaLabel}
                </Badge>
              )}
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="w-3 h-3 text-yellow-400" />
                <span>{Math.round(movie.vote_average * 10) / 10}</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
              {movie.overview}
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
            <Calendar className="w-3 h-3" />
            <span>{moment(releaseDate).format("L")}</span>
          </div>
        </CardContent>
      </div>
    </Card>
    </Link>
  );
};