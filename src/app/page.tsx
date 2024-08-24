import Link from "next/link";
import { Hero } from "./_components/hero";
import type { Metadata } from 'next'
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Home() {
  return (
    <main className="bg-background text-foreground container">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
      <p className="my-2 flex items-center gap-2">Read my blogs here <Link className="link group" href="/blogs">Blogs <ArrowUpRight className="inline-block ml-1 size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" /></Link>
      </p>
        <Hero />
      </section>
    </main>
  );
}
