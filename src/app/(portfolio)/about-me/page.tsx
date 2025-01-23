import { Metadata } from 'next';
import { Introduction } from './_components/introduction';
import { Projects } from './_components/projects';
import { Recommendations } from './_components/recommendations';
import { Footer } from '~/components/navigation/footer';

export const metadata: Metadata = {
  title: 'About Me | zackozack',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
};

export default function AboutMe() {
  return (
    <main className="flex justify-center px-4 md:container">
      <section className="flex h-[calc(100vh-48px)] w-full max-w-3xl flex-col">
        <Introduction />
        <Projects />
        <Recommendations />
        <Footer />
      </section>
    </main>
  );
}
