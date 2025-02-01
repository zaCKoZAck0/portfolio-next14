import { Project } from 'contentlayer/generated';
import { ProjectCard } from '~/components/project-card';
import { H1 } from '~/components/typography';

interface FeaturedProjectsProps {
  featuredProjects: Project[];
}

export function FeaturedProjects({ featuredProjects }: FeaturedProjectsProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4">
      <H1 className="relative z-10 pb-10 text-4xl font-bold">Featured Projects</H1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
