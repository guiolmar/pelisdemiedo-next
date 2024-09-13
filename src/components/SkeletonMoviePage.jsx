import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonMoviePage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden rounded-lg w-full">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-start justify-end text-white p-8">
          <Skeleton className="w-1/2 h-8 mb-2" />
          <Skeleton className="w-1/4 h-6 mb-4" />
          <Skeleton className="w-1/4 h-6 mb-4" />
        </div>
      </section>

      {/* Movie Details and Information */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <Skeleton className="w-1/2 h-6 mb-4" />
              <Skeleton className="w-full h-32" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="w-1/3 h-6 mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Skeleton className="w-full h-12" />
                <Skeleton className="w-full h-12" />
                <Skeleton className="w-full h-12" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <Skeleton className="w-full h-48 mb-4" />
              <Skeleton className="w-1/2 h-6 mb-4" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cast Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Reparto</h2>
        <div className="flex space-x-4 p-4">
          {[...Array(10)].map((_, index) => (
            <Card key={index} className="w-[150px] flex-shrink-0">
              <CardContent className="p-4">
                <Skeleton className="w-full h-[200px]" />
                <Skeleton className="w-3/4 h-4 mb-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
