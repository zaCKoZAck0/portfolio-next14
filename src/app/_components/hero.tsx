import { Logo } from '~/components/navigation/logo';
import { H1, H4 } from '~/components/typography';
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { WordPullUp } from '~/components/typography/animated/word-pull-up';

export function Hero() {
  return (
    <div className="relative flex animate-fadeIn flex-col items-center justify-center gap-12">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="z-0 size-80 rounded-full bg-primary opacity-15 blur-3xl" />
      </div>
      <Logo className="z-10 text-5xl md:text-7xl" />
      <H1 className="z-10 text-nowrap text-2xl text-primary">
        {"I'm a"}
        <span className="mx-2 bg-primary">
          <WordPullUp
            className="h-auto px-2 py-0 text-primary-foreground"
            words="fullstack Developer."
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
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={24} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
