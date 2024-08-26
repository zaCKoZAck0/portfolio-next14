import { CopyableText, H1, H2 } from "~/components/typography";
import { ContactForm } from "./_components/contact-form";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Contact() {
    return (
        <main className="bg-background text-foreground md:container">
            <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
                <div className="md:border-2 py-4 px-6 border-primary/50 w-full max-w-3xl">
                <ContactForm />
                </div>
                </section>
        </main>)
}