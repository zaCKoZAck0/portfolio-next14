'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

interface FadeUpStaggerProps {
  text?: string;
  className?: string;
}

export const FadeUpStagger: React.FC<FadeUpStaggerProps> = ({ text = '', className = '' }) => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h3 className={clsx(className, sora.className)} variants={FADE_UP_ANIMATION_VARIANTS}>
        {text}
      </motion.h3>
    </motion.div>
  );
};
