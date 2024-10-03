"use client";
import { SiNextdotjs } from 'react-icons/si';
import data from '../../../data/github-data.json';
import { getRelativeDate } from '~/lib/date';

export function Footer() {
  return (
    <div className="w-full pb-2 pt-5 text-xs">
      <div className="flex flex-grow justify-between rounded-md bg-muted/50 px-2 py-1 text-muted-foreground md:px-4 md:py-2">
        <p className="flex gap-2">
          Made with Next.js <SiNextdotjs className="size-4" />
        </p>
        <p>Updated {getRelativeDate(new Date(data.last_updated))} ago</p>
      </div>
    </div>
  );
}
