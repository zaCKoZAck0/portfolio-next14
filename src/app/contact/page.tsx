import { ContactForm } from './_components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
};

export default function Contact() {
  return (
    <main className="bg-background text-foreground md:container">
      <section className="flex h-[calc(100vh-48px)] flex-col items-center justify-center">
        <div className="px-6s w-full max-w-3xl border-primary/50 py-4 md:border-2">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
