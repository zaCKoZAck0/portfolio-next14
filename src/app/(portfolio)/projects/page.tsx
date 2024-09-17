import { Metadata } from 'next';
import { Projects } from './_components/projects';

export const metadata: Metadata = {
  title: 'Projects | zackozack',
  description: 'A list of projects I have worked on.',
};

export default function ProjectsPage() {
  return <Projects />;
}
