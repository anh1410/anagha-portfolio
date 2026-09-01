import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Kolkata',
        })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t px-6 py-8 text-center font-mono text-xs" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: '#4ade80' }} />
          Available · {time} IST
        </span>
        <span>·</span>
        <span>© {new Date().getFullYear()} Anagha Katla</span>
        <span>·</span>
        <span>Built with React + Tailwind + Framer Motion</span>
      </div>
    </footer>
  );
}
