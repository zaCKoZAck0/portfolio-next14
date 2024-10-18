'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export function HeadingNavigation() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState('');
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'));
    const tocItems = headings.map((heading) => ({
      id: heading.id,
      title: heading.textContent || '',
      level: parseInt(heading.tagName[1]) - 1,
    }));
    setToc(tocItems);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px',
        threshold: 1.0,
      },
    );

    headings.forEach((heading) => observerRef.current?.observe(heading));

    return () => {
      if (observerRef.current) {
        headings.forEach((heading) => observerRef.current?.unobserve(heading));
      }
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky rounded-lg bg-muted/25 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 flex w-full items-center justify-between rounded text-left font-semibold focus:outline-none focus:ring-2 focus:ring-secondary"
        aria-expanded={isOpen}
      >
        <span className="text-lg text-secondary-foreground/50">Table of Contents</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full space-y-1 text-xs"
          >
            {toc.map((item) => (
              <motion.li
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ marginLeft: `${(item.level - 1) * 0.75}rem` }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full rounded px-2 py-1 text-left transition-all duration-300 ${
                    activeId === item.id
                      ? 'bg-secondary/50 font-semibold text-secondary-foreground'
                      : 'text-secondary-foreground hover:bg-secondary'
                  }`}
                >
                  {item.title}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
