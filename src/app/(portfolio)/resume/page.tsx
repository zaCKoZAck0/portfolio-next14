import { ResumeAccordion } from "./_components/resume-accordion";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Resume() {
    return (
        <main className="bg-background text-foreground container">
            <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
                <ResumeAccordion />
            </section>
        </main>
    );
}