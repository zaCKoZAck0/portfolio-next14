'use client';
import { Button } from '~/components/ui/button';
import { Logo } from '../logo';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { H4 } from '~/components/typography';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const navVariants = {
  initial: {
    boxShadow: 'none',
    backdropFilter: 'blur(0px)',
    borderBottom: '1px solid transparent',
    padding: '4rem 1rem',
  },
  scrolled: {
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    backdropFilter: 'blur(24px)',
    borderBottom: '1px solid hsl(var(--secondary))',
    padding: '0rem 1rem',
  },
};

export function BlogNavigation() {
  const { scrollY } = useScroll();
  const [navState, setNavState] = useState<keyof typeof navVariants>('initial');

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > 150) {
        setNavState('scrolled');
      } else if (latest === 0) {
        setNavState('initial');
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      animate={navState}
      initial="initial"
      variants={navVariants}
      className="fixed top-0 z-50 flex w-full items-center justify-center bg-transparent"
    >
      <div className="flex w-full max-w-3xl items-center justify-between gap-2 transition-all duration-300">
        <div className="flex items-center text-xl">
          <Logo short className="text-3xl" />
          <H4 className="rounded-full bg-orange-200 px-2 py-0.5 text-xs font-semibold text-secondary will-change-auto">
            Blogs
          </H4>
        </div>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost">
            <SearchIcon size={20} />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
