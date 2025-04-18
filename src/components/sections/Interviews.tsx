'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import interviewsData from '@/lib/data/interviewsData.json';

export default function Interviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(interviewsData.videos.length / itemsPerPage);
  const showSlider = interviewsData.videos.length > itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentVideos = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return interviewsData.videos.slice(start, end);
  };

  return (
    <section id="interviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{interviewsData.title}</h2>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentVideos().map((video) => (
              <div key={video.id} className="flex flex-col">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full rounded-lg shadow-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {showSlider && (
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="rounded-full"
                disabled={currentPage === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentPage === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="rounded-full"
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 