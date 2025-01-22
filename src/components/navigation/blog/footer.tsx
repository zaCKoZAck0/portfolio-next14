import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function BlogFooter() {
  return (
    <footer className="mt-36 rounded-xl bg-card text-card-foreground">
      <div className="max-w-7xl px-6 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            className="size-16 flex-shrink-0 rounded-full border-2 border-orange-200"
            alt="zackozack"
            width={100}
            height={100}
            src="https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif"
          />
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="font-mono text-lg font-semibold text-white text-center md:text-left">About Me</h3>
            <p className="text-xs">
              {`Full-stack engineer by day, blogger by night. Sharing knowledge, one line of code at a time.
              Hi, I'm Ayush. Join me at my coding adventures.
              `}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col md:flex-row md:justify-between border-t pt-6 text-center text-xs text-muted-foreground">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} zackozack</p>
          <div className="flex items-center justify-center gap-2">
            <Link className="flex items-center gap-1 underline-offset-2 hover:underline" href="/">
              Portfolio
            </Link>{' '}
            |
            <Link
              className="flex items-center gap-1 underline-offset-2 hover:underline"
              href="/projects"
            >
              Projects
            </Link>{' '}
            |
            <a
              className="flex items-center gap-1 underline-offset-2 hover:underline"
              href="https://github.com/zaCKoZAck0/portfolio-next14"
            >
              Github repo <ExternalLinkIcon size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
