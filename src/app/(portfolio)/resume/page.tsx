import { ResumeAccordion } from './_components/resume-accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
};

export default function Resume() {
  return (
    <main className="container bg-background text-foreground">
      <section className="mt-24 flex h-[calc(100vh-48px)] flex-col items-center justify-center">
        <ResumeAccordion />
      </section>
    </main>
  );
}
