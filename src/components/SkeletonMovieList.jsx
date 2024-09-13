import { Skeleton } from "@/components/ui/skeleton"; // Importamos el Skeleton de shadcn

export const SkeletonMovieList = () => (
  <div className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
    <div className="flex">
      {/* Placeholder para la imagen */}
      <div className="w-24 flex-shrink-0">
        <Skeleton className="w-full h-36 rounded-md" />
      </div>

      <div className="flex-grow p-4 flex flex-col justify-between">
        {/* Placeholder para el título */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4 rounded-md" />
          
          {/* Placeholder para la badge y calificación */}
          <div className="flex items-center gap-2 mt-1">
            {/* Placeholder para la badge */}
            <Skeleton className="w-12 h-4 rounded-md" />

            {/* Placeholder para la calificación */}
            <div className="flex items-center gap-1">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-4 w-8 rounded-md" />
            </div>
          </div>

          {/* Placeholder para la descripción */}
          <Skeleton className="h-3 w-full rounded-md mt-2" />
          <Skeleton className="h-3 w-full rounded-md mt-1" />
        </div>

        {/* Placeholder para la fecha de lanzamiento */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-16 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);
