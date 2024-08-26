"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { H4 } from '~/components/typography';
import {getDownloadUrl} from '@vercel/blob';
import Link from 'next/link';

const TextVariants = {
    hover: {
        display: 'inline-block',
        opacity: 1,
    },
    initial: {
        display: 'none',
        opacity: 0,
    }
}

const ButtonVariants = {
    hover: {
        padding: '0.5rem 1.5rem',
        width: 'auto',
    },
    initial: {
        width: "auto",
        padding: '0.5rem 1rem',   
    }
}

const RESUME_URL = "https://892ghcrnabuw2bw7.public.blob.vercel-storage.com/AyushResume-cGZpRMXm0TzKo1mEhv5zLAHtjSBPvB.pdf";

export const ResumeDownloadButton: React.FC = () => {
  return (
    <Link href={getDownloadUrl(RESUME_URL)}>
    <motion.button
      initial="initial"
      whileHover="hover"
      variants={ButtonVariants}
      transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 300 }}
      className="fixed bottom-5 right-5 bg-orange-200 text-primary-foreground h-14 flex rounded-full items-center shadow-lg cursor-pointer overflow-hidden"
    >
        <FileDown size={24} />

      <motion.span
        variants={TextVariants}
        transition={{ duration: 0.1 }}
        className="ml-2 whitespace-nowrap"
      >
        <H4>Resume PDF</H4>
      </motion.span>
    </motion.button>
    </Link>
  );
};