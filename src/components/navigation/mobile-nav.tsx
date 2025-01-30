'use client';
import { Menu, PenLine } from 'lucide-react';
import { Button } from '../ui/button';
import { Logo } from './logo';

import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { NavItem } from '.';
import { H3 } from '../typography';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '~/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

export function MobileNav({ tabs }: { tabs: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [navStyle, setNavStyle] = useState('shadow-none');
  const router = useRouter();
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
  function onTabClick(url: string) {
    router.push(url, {
      scroll: true,
    });
    setOpen(false);
  }
  const pathname = usePathname();
  return (
    <div
      className={cn(
        'mx-2 mt-2 flex w-full items-center justify-between rounded-full bg-secondary/50 px-2 text-secondary-foreground md:hidden',
        navStyle,
      )}
    >
      <Link href="/">
        <Logo className="px-3 text-xl" />
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-fit items-center justify-center bg-background/50 backdrop-blur-xl">
          <ul>
            {tabs.map((tab, idx) => (
              <li key={idx} className="p-4">
                <button onClick={() => onTabClick(tab.pathname)}>
                  <H3
                    className={cn(
                      'flex w-full items-center gap-1 rounded-full px-4 py-2 text-center',
                      tab.pathname === pathname
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground',
                    )}
                  >
                    {tab.label}
                  </H3>
                </button>
              </li>
            ))}
            <Link href="/blogs" className="p-4">
              <div className="relative flex items-center justify-center text-sm">
                <H3 className="relative z-50 flex items-center gap-1 rounded-full border border-blue-400 bg-gradient-to-t from-blue-400 to-purple-400 px-4 py-2 text-background shadow-sm shadow-blue-400 transition-all duration-300 will-change-transform hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                  Blogs
                  <PenLine />
                </H3>
              </div>
            </Link>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
