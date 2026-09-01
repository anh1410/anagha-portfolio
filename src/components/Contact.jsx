import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import SocialDock from './SocialDock';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl rounded-3xl p-10 glass chrome-border"
        style={{ boxShadow: 'var(--shadow-glow)' }}
      >
        <h2 className="mb-3 text-3xl font-semibold md:text-4xl">
          Let's build something <span className="text-gradient">together</span>
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-dim)' }}>
          Open to freelance work, internships, and interesting problems.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-105"
            style={{ background: 'var(--grad-2)' }}
          >
            Email Me
          </a>
          <button
            onClick={copyEmail}
            className="rounded-full px-6 py-3 font-mono text-sm font-medium glass chrome-border transition-transform hover:scale-105"
          >
            {copied ? 'Copied ✓' : profile.email}
          </button>
        </div>

        <SocialDock className="mx-auto" />
      </motion.div>
    </section>
  );
}
