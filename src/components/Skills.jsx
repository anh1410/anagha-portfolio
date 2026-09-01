import { motion } from 'framer-motion';
import { certifications, education, leadership, profile, skills } from '../data';
import Pill from './Pill';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="resume" eyebrow="Snapshot" title="Skills & Resume">
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl p-6 text-left glass chrome-border"
          >
            <h3 className="mb-3 font-mono text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--hot-pink)' }}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 text-left glass chrome-border"
        >
          <h3 className="mb-1 font-mono text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--hyper-cyan)' }}>
            Education
          </h3>
          <p className="font-semibold">{education.school}</p>
          <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
            {education.degree}
          </p>
          <p className="mt-1 text-xs font-mono" style={{ color: 'var(--text-dim)' }}>
            {education.date} · {education.location}
          </p>
          <div className="mt-4 space-y-1">
            {certifications.map((c) => (
              <p key={c} className="text-xs" style={{ color: 'var(--text-dim)' }}>
                ✦ {c}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="rounded-2xl p-6 text-left glass chrome-border"
        >
          <h3 className="mb-1 font-mono text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--hyper-cyan)' }}>
            Leadership
          </h3>
          <p className="font-semibold">{leadership.role}</p>
          <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
            {leadership.org}
          </p>
          <p className="mt-1 mb-3 text-xs font-mono" style={{ color: 'var(--text-dim)' }}>
            {leadership.date}
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm" style={{ color: 'var(--text-dim)' }}>
            {leadership.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="text-center">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105"
          style={{ background: 'var(--grad-1)', boxShadow: 'var(--shadow-glow)' }}
        >
          Full Resume (PDF)
        </a>
      </div>
    </Section>
  );
}
