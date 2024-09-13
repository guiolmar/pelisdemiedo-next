import { SkeletonMovieList } from '@/components/SkeletonMovieList';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(6)].map((_, index) => (
        <SkeletonMovieList key={index} />
      ))}
    </div>
  );
}
