import { Project } from 'contentlayer/generated';
import { ProjectCard } from '~/components/project-card';

interface OtherProjectsProps {
  otherProjects: Project[];
}

export function OtherProjects({ otherProjects }: OtherProjectsProps) {
  return (
    <section className="flex flex-col gap-4 pb-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} small />
        ))}
      </div>
    </section>
  );
}
