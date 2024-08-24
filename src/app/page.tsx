import Link from "next/link";
import { Hero } from "./_components/hero";
import type { Metadata } from 'next'
import { ArrowUpRight } from "lucide-react";
import { A } from "~/components/typography";

export const metadata: Metadata = {
  title: 'About Me | zaCKoZAck',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
}

export default function Home() {
  return (
    <main className="bg-background text-foreground container">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-48px)]">
      <p className="my-2 flex items-center gap-2">Read my blogs here <A href="/blogs">Blogs</A>
      </p>
        <Hero />
      </section>
    </main>
  );
}
