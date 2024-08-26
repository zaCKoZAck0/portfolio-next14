import { ResumeAccordionLoading } from "./_components/skeleton/loading-accordion";


export default function ResumeLoading() {
    return (
        <main className="bg-background text-foreground container">
            <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
                <ResumeAccordionLoading />
            </section>
        </main>
    );
}