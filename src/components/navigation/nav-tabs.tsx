'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

import { cn } from '~/lib/utils';
import { H4 } from '../typography';
import { Logo } from './logo';
import { NavItem } from '.';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface TabProps {
  text: string;
  selected: boolean;
  url: string;
}

export default function NavTabs({ tabs }: { tabs: NavItem[] }) {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>('');
  const [navStyle, setNavStyle] = useState<string>('shadow-none');

  const scroll = useScroll();
  const scrollY = scroll.scrollY;

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > 0) {
        setNavStyle('shadow-md bg-secondary/75 backdrop-blur-md');
      } else {
        setNavStyle('shadow-none bg-secondary/50');
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const matchedTab = tabs.find((tab) => tab.pathname === pathname);
    if (matchedTab) {
      setSelected(matchedTab.pathname);
    } else {
      setSelected('');
    }
  }, [pathname, tabs]);

  return (
    <div
      className={cn(
        'relative m-2 hidden flex-wrap items-center justify-center gap-2 overflow-hidden rounded-full bg-secondary/50 p-2 md:flex',
        navStyle,
      )}
    >
      {pathname === '/' && (
        <motion.div
          initial={{ translateX: -20 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: -20 }}
          className="absolute left-0 size-40 rounded-full bg-primary/15 blur-xl"
        />
      )}
      <Link href="/" className="z-10">
        <Logo className="px-3 text-xl" />
      </Link>
      {tabs.map((tab) => (
        <Tab
          text={tab.label}
          selected={selected === tab.pathname}
          url={tab.pathname}
          key={tab.label}
        />
      ))}
    </div>
  );
}

const Tab = ({ text, selected, url }: TabProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        router.push(url, {
          scroll: false,
        })
      }
      className={cn(
        'relative rounded-full px-4 py-1 text-sm transition-all',
        selected ? 'text-primary-foreground' : 'text-secondary-foreground hover:text-primary',
      )}
    >
      <H4 className="relative z-50 min-w-20">{text}</H4>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary"
        />
      )}
    </button>
  );
};
