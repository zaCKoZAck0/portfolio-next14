import { CopyableText, H1, H2 } from "~/components/typography";
import { ContactForm } from "./_components/contact-form";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Contact() {
    return (
        <main className="bg-background text-foreground md:container mt-28">
            <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
                <div className="md:border-2 p-4 border-primary/50 w-full max-w-3xl">
                <table className="md:text-xl text-sm">
                    <tr>
                        <td className="text-muted-foreground">
                            Name:
                        </td>
                        <td className="font-semibold">
                            <CopyableText>
                            Ayush Kumar Yadav
                            </CopyableText>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-muted-foreground md:pr-4">
                                Email:
                        </td>
                        <td className="font-semibold">
                            <CopyableText>
                                id.ayushkryadav@gmail.com
                            </CopyableText>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-muted-foreground pr-4">
                            Phone Number:
                        </td>
                        <td className="font-semibold">
                            <CopyableText>
                                +91 9198517250
                            </CopyableText>
                        </td>
                    </tr>
                </table>
                <ContactForm />
                </div>
                </section>
        </main>)
}