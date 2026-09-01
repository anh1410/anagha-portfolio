import { motion } from 'framer-motion';

const blobs = [
  { size: 420, color: '#b18cff', top: '-8%', left: '-10%', dur: 22 },
  { size: 360, color: '#4ee8ff', top: '20%', left: '75%', dur: 26 },
  { size: 320, color: '#ff5fc4', top: '65%', left: '5%', dur: 20 },
  { size: 260, color: '#ffd166', top: '80%', left: '70%', dur: 24 },
];

const stickers = ['✦', '✧', '◆', '✦', '✧'];

export default function FloatingBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(177,140,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(177,140,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {stickers.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl select-none"
          style={{
            top: `${10 + i * 18}%`,
            left: i % 2 === 0 ? '4%' : '92%',
            color: 'var(--lavender)',
            opacity: 0.5,
          }}
          animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}
