import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Experience from './components/Experience';
import FloatingBg from './components/FloatingBg';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Cursor />
      <FloatingBg />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
