import { Hero } from "./_components/hero";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Home() {
  return (
    <main className="bg-background text-foreground container">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
        <Hero />
      </section>
    </main>
  );
}
