import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_ui-sans-serif,system-ui]">
      {/* Decorative background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[48rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
