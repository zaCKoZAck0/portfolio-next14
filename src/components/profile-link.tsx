'use client';
import { Link } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { SocialIcon } from './social-icons';
import NextLink from 'next/link';

interface ProfileLinkProps {
  link: Link;
  index: number;
}

export function ProfileLink({ link, index }: ProfileLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: -5 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      whileHover={{
        scale: 1.05,
        translateX: 2,
        transition: { type: 'spring', stiffness: 100 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        delay: index * 0.15 + 0.15,
        stiffness: 100,
        damping: 10,
      }}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
      className="w-fit origin-left"
    >
      <NextLink
        href={link.url}
        className="underline-offset-2 transition-all hover:text-orange-200 hover:underline"
      >
        <div
          className="flex items-center gap-2"
          // whileHover={{ gap: '1rem' }}
          // transition={{ type: 'spring', bounce: 0.5 }}
        >
          <motion.span
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
            }}
          >
            <SocialIcon platform={link.platform} className="size-4 md:size-7" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0.8 }}
            whileHover={{
              opacity: 1,
              textShadow: '0 0 8px rgba(253, 186, 116, 0.5)',
            }}
          >
            {link.alias}
          </motion.span>
        </div>
      </NextLink>
    </motion.div>
  );
}
