'use client'
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import galleryData from '@/lib/data/galleryData.json';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const slides = galleryData.images.map(image => ({
    src: image.src,
    alt: image.alt,
    title: image.caption,
  }));

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container w-[80%] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{galleryData.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-101 max-h-[300px]"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
        />
      </div>
    </section>
  );
} 