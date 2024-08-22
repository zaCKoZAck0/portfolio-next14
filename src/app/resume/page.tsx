import { Button } from "~/components/ui/button";
import { ResumeAccordion } from "./_components/resume-accordion";

export default function Resume() {
    return (
        <main className="bg-background text-foreground container">
            <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
                <ResumeAccordion />
            </section>
        </main>
    );
}