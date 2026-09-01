import { motion } from 'framer-motion';
import { experience } from '../data';
import Pill from './Pill';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute top-0 bottom-0 left-4 w-px md:left-1/2"
          style={{ background: 'linear-gradient(var(--lavender), var(--hyper-cyan), var(--hot-pink))' }}
        />
        <div className="flex flex-col gap-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-0"
            >
              <span
                className="absolute top-2 left-2.5 h-3 w-3 rounded-full md:left-1/2 md:-translate-x-1/2"
                style={{ background: 'var(--hot-pink)', boxShadow: '0 0 12px var(--hot-pink)' }}
              />
              <div
                className={`rounded-2xl p-6 text-left glass chrome-border md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <Pill>{job.date}</Pill>
                </div>
                <p className="mb-3 text-sm font-medium" style={{ color: 'var(--hyper-cyan)' }}>
                  {job.org}
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-4 text-sm" style={{ color: 'var(--text-dim)' }}>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
