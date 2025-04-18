import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import Documents from '@/components/sections/Documents';
import Interviews from '@/components/sections/Interviews';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Documents />
      <Interviews />
      <Gallery />
      <Contact />
    </main>
  );
}
