import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Pill from './Pill';

export default function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, rgba(177,140,255,0.25), transparent 70%)`;

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
    rotateY.set(((px - rect.width / 2) / rect.width) * 10);
    rotateX.set(-((py - rect.height / 2) / rect.height) * 10);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-2xl p-6 text-left glass chrome-border"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="relative">
        <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
        <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          style={{ background: 'var(--grad-1)' }}
        >
          View on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
