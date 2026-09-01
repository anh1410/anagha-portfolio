import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-5xl px-6 py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {(eyebrow || title) && (
        <div className="mb-12 text-center">
          {eyebrow && (
            <p className="mb-2 font-mono text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--hot-pink)' }}>
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}
