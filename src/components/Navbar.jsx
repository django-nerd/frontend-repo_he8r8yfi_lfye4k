import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl">
          <nav className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 shadow-lg">
                <Rocket className="h-5 w-5 text-white" />
              </span>
              <span className="font-semibold tracking-wide text-white/90">Nebula Studio</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
              <a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              <a
                href="#get-started"
                className="inline-flex items-center rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
