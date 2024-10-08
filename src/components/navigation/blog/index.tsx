'use client';
import { Logo } from '../logo';
import { H4 } from '~/components/typography';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { blogs } from '~/app/(blog)/blog/_blogs';
import { BlogSearch } from './search';

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
  const router = useRouter();
  const pathname = usePathname();
  const isBlog = pathname.startsWith('/blog');
  const blogPath = isBlog ? (pathname.split('/')[2] ?? null) : null;
  const blogTitle = blogPath ? blogs[blogPath]?.title : '';

  const [navState, setNavState] = useState<keyof typeof navVariants>('initial');
  const [showBlogTitle, setShowBlogTitle] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > 150) {
        setNavState('scrolled');
        if (latest > 300) {
          setShowBlogTitle(true);
        }
      } else if (latest === 0) {
        setNavState('initial');
        setShowBlogTitle(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY, showBlogTitle]);

  return (
    <motion.nav
      animate={navState}
      initial="initial"
      variants={navVariants}
      className="fixed top-0 z-50 flex w-full items-center justify-center bg-transparent"
    >
      <div className="flex w-full max-w-3xl items-center justify-between gap-2 py-2 transition-all duration-300">
        <button onClick={() => router.push('/blog')} className="flex items-center">
          <Logo short className="text-3xl" />
          <p className="rounded-full bg-orange-200 px-1.5 text-xs font-semibold text-secondary will-change-auto">
            Blogs
          </p>
        </button>
        {showBlogTitle && (
          <H4 className="hidden text-base font-semibold text-secondary-foreground md:block">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 1 },
              }}
            >
              {blogTitle}
            </motion.span>
          </H4>
        )}
        <BlogSearch />
      </div>
    </motion.nav>
  );
}
