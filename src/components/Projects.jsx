import { projects } from '../data';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Work" title="Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
