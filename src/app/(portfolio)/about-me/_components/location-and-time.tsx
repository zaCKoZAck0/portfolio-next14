'use client';
import { LocalTime } from '../../resume/_components/local-time';
import { motion } from 'framer-motion';
import { MapPinIcon, ClockIcon } from 'lucide-react';

export function LocationAndTime() {
  return (
    <motion.div
      className="mt-8 flex items-center justify-between gap-16 text-sm text-muted-foreground md:text-base"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
          },
        },
      }}
    >
      <motion.div
        className="flex items-center gap-2"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 120 },
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.5 }}>
          <MapPinIcon className="size-4 md:size-5" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0.8 }}
          whileHover={{
            opacity: 1,
          }}
        >
          India
        </motion.span>
      </motion.div>

      <motion.div
        className="flex items-center gap-2"
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 120 },
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span whileHover={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 0.5 }}>
          <ClockIcon className="size-4 md:size-5" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0.8 }}
          whileHover={{
            opacity: 1,
          }}
        >
          <LocalTime />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
