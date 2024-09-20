'use client';

import { motion, Variants } from 'framer-motion';

import { cn } from '~/lib/utils';

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0, filter: 'blur(24px)', color: 'rgb(254 215 170)' },
    show: {
      opacity: 1,
      color: 'hsl(var(--secondary-foreground) / 0.85)',
      filter: 'blur(0)',
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.span
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(className)}
    >
      {words.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: 'inline-block', paddingRight: '8px' }}
        >
          {word === '' ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.span>
  );
}
