import { Logo } from '~/components/navigation/logo';
import { H1, H4 } from '~/components/typography';
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { WordPullUp } from '~/components/typography/animated/word-pull-up';
import { Ripple } from '~/components/ripple';

export function Hero() {
  return (
    <div className="relative flex animate-fadeIn flex-col items-center justify-center">
      <Ripple />
      <div className="relative flex h-[calc(100vh-48px)] w-screen animate-fadeIn flex-col items-center justify-center gap-8 md:gap-12">
        <Logo className="z-10 text-5xl md:text-7xl" />
        <H1 className="z-10 text-center text-2xl text-primary md:text-nowrap">
          {"I'm a"}
          <span className="rounded-lg bg-secondary/50 md:mx-2">
            <WordPullUp
              className="block h-auto px-2 py-0 md:inline-block"
              words="Fullstack Developer."
            />
          </span>
        </H1>
        <div className="z-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link href="/about-me">
            <Button className="rounded-full text-xl font-semibold shadow" size="lg">
              <H4>About Me</H4>
            </Button>
          </Link>
          <Link href="/resume">
            <Button
              className="group rounded-full text-xl font-semibold"
              size="lg"
              variant="secondary"
            >
              <H4>Resume</H4>
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={24}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
