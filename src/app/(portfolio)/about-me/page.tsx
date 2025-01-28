import { Metadata } from 'next';
import { Introduction } from './_components/introduction';
import { Projects } from './_components/projects';
import { Footer } from '~/components/navigation/footer';

export const metadata: Metadata = {
  title: 'About Me | zackozack (Ayush Kumar Yadav)',
  description: 'Fullstack developer skilled in React, Spring Boot and AWS.',
  metadataBase: new URL('https://www.zackozack.xyz'),
  openGraph: {
    title: 'About Me | zackozack (Ayush Kumar Yadav)',
    description: 'Fullstack developer skilled in React, Spring Boot and AWS.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutMe() {
  return (
    <main className="flex justify-center px-4 md:container">
      <section className="flex h-[calc(100vh-48px)] w-full max-w-3xl flex-col">
        <Introduction />
        <Projects />
        <Footer />
      </section>
    </main>
  );
}
