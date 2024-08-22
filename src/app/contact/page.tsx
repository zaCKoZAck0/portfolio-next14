import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";
import { FloatingDock } from "~/components/floating-dock";
import { CopyableText, H1, H2 } from "~/components/typography";
import { ContactForm } from "./_components/contact-form";

export default function Contact() {
    return (
        <main className="bg-background text-foreground container mt-20">
            <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
                <div className="border-2 p-4 border-primary/50 w-full max-w-3xl">
                <table className="text-xl">
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
                        <td className="text-muted-foreground pr-4">
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