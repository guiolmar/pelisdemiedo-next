import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonMovieCard = () => (
    <Card className="w-[200px] overflow-hidden cursor-pointer hover:shadow-lg">
      <Skeleton className="w-full h-[300px]" />
      <CardContent className="p-4">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2" />
      </CardContent>
    </Card>
);
