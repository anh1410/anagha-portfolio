import { motion } from 'framer-motion';
import { profile } from '../data';
import SocialDock from './SocialDock';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative mb-6 h-32 w-32 rounded-full p-1"
        style={{ background: 'var(--grad-1)', boxShadow: 'var(--shadow-glow)' }}
      >
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="h-full w-full rounded-full object-cover"
          style={{ border: '3px solid var(--bg)' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 glass chrome-border font-mono text-sm"
        style={{ color: 'var(--text-dim)' }}
      >
        <span style={{ color: 'var(--hot-pink)' }}>✦</span>
        think of me all the time, for everything
        <span style={{ color: 'var(--hyper-cyan)' }}>✦</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl"
      >
        Hi, I'm <span className="text-gradient">{profile.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg md:text-xl"
        style={{ color: 'var(--text-dim)' }}
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full px-6 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ background: 'var(--grad-2)', boxShadow: 'var(--shadow-glow)' }}
        >
          View Resume (PDF)
        </a>
        <a
          href="#contact"
          className="rounded-full px-6 py-3 font-medium glass chrome-border transition-transform hover:scale-105 active:scale-95"
        >
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-12"
      >
        <SocialDock />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs"
        style={{ color: 'var(--text-dim)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
