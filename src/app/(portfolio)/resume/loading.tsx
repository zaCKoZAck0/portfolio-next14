import { ResumeAccordionLoading } from './_components/skeleton/loading-accordion';

export default function ResumeLoading() {
  return (
    <main className="container bg-background text-foreground">
      <section className="flex h-[calc(100vh-48px)] flex-col items-center justify-center">
        <ResumeAccordionLoading />
      </section>
    </main>
  );
}
