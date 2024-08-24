import Link from "next/link";
import { Hero } from "./_components/hero";
import type { Metadata } from 'next'
import { MoveUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Home() {
  return (
    <main className="bg-background text-foreground container">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
      <p className="my-2 flex items-center gap-2">Read my blogs here <Link className="flex items-center text-lg font-semibold text-orange-200 group" href="/blogs">Blogs <MoveUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" /></Link>
      </p>
        <Hero />
      </section>
    </main>
  );
}
