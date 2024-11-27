'use client';
import { SiNextdotjs } from 'react-icons/si';
import data from '../../../data/github-data.json';
import { RelativeDate } from '../relative-date';

export function Footer() {
  return (
    <div className="w-full pb-2 pt-5 text-xs">
      <div className="flex flex-grow flex-col justify-between gap-2 rounded-md bg-muted/50 px-2 py-1 text-muted-foreground md:px-4 md:py-2">
        <div className="flex justify-between">
          <p className="flex gap-2">
            Made with Next.js <SiNextdotjs className="size-4" />
          </p>
          <p>Updated <RelativeDate date={new Date(data.last_updated)} /> ago</p>
        </div>
      </div>
    </div>
  );
}
