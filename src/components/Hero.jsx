import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">        
        <Spline 
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient veil for cinematic depth, doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-40 pb-28 sm:pt-48 sm:pb-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            Crafting Futuristic Web Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
          >
            Cinematic interactions, immersive 3D, and lightning-fast performance. We blend art and code to design experiences that feel alive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
            >
              Explore Features
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              See Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
