import { ResumeAccordion } from './_components/resume-accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
};

export default function Resume() {
  return (
    <main className="bg-background px-4 text-foreground md:container">
      <section className="flex h-[calc(100vh-48px)] flex-col items-center justify-center md:mt-24">
        <ResumeAccordion />
      </section>
    </main>
  );
}
