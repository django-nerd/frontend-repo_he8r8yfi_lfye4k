import { motion } from 'framer-motion';
import { Sparkles, Cpu, Gauge, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Cinematic Interactions',
    desc: 'Micro-animations and fluid transitions that feel tangible and delightful.'
  },
  {
    icon: Cpu,
    title: '3D & WebGL',
    desc: 'Immersive visuals powered by Spline and GPU-accelerated rendering.'
  },
  {
    icon: Gauge,
    title: 'Performance First',
    desc: 'Optimized for speed, accessibility, and SEO without sacrificing beauty.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Ready',
    desc: 'Best practices, type safety, and robust architecture baked in.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Why teams choose us
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.05, duration: 0.7 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 shadow-lg">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
