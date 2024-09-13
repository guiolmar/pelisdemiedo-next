export default function SkeletonTVPage() {
    return (
      <div className="flex flex-col gap-8 pb-16">
        <div className="relative h-[500px] bg-gray-800 rounded-lg w-full animate-pulse"></div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-48"></div>
            <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-64"></div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-80"></div>
        </div>
  
        <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-48"></div>
  
        <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-48"></div>
      </div>
    );
  }
  