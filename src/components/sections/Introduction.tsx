import Image from 'next/image';
import introData from '@/lib/data/introductionData.json';

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 bg-gray-50">
      <div className="container w-[80%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src={introData.image}
              alt="Archive Introduction"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{introData.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {introData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 