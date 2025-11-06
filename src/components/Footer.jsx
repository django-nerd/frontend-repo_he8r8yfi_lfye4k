import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold">Ready to build something unreal?</h3>
            <p className="text-white/70 text-sm mt-1">Let’s design a web experience that feels from the future.</p>
          </div>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
          >
            Start a project
          </a>
        </motion.div>
        <div className="mt-10 text-center text-xs text-white/50">© {year} Nebula Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
