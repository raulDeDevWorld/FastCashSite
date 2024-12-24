import { Header } from '../components/sections/Header';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}