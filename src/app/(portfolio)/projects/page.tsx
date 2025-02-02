import { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';
import { FeaturedProjects } from './_components/featured-projects';
import { OtherProjects } from './_components/other-projects';
import { Footer } from '~/components/navigation/footer';

export const metadata: Metadata = {
  title: 'Projects | zackozack',
  description: 'A list of projects I have worked on.',
};

export default function ProjectsPage() {
  return (
    <main className="flex justify-center px-4 md:container">
      <section className="flex h-[calc(100vh-48px)] w-full max-w-3xl flex-col">
        <FeaturedProjects featuredProjects={allProjects.filter((project) => project.featured)} />
        <OtherProjects otherProjects={allProjects.filter((project) => !project.featured)} />
        <Footer />
      </section>
    </main>
  );
}
