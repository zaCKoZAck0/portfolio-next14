import Image from "next/image";
import { H1 } from "~/components/typography";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="bg-background text-foreground container">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
        <Hero />
      </section>
    </main>
  );
}
