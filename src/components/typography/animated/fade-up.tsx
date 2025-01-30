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
    hidden: {
      opacity: 0,
      y: 20,
      rotate: -2,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        mass: 0.5,
        stiffness: 100,
        damping: 15,
        velocity: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -20px 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }}
      style={{ overflow: 'hidden' }}
    >
      <motion.h3
        className={clsx(className, sora.className)}
        variants={FADE_UP_ANIMATION_VARIANTS}
        layout="position"
        style={{
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
      >
        {text}
      </motion.h3>
    </motion.div>
  );
};
