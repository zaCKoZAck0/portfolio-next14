import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { BlurryBlob } from '~/components/blurry-blob';
import { H3 } from '~/components/typography';

interface WorkExperienceProps {
  company: string;
  role: string;
}
export function WorkExperience({ company, role }: WorkExperienceProps) {
  return (
    <motion.div
      className="z-10 flex flex-col items-center justify-center gap-1 pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        className="z-10 p-1"
        variants={{
          hidden: { scale: 0.5, rotate: -45 },
          visible: {
            scale: 1,
            rotate: 0,
            transition: { type: 'spring', bounce: 0.5 },
          },
        }}
        whileHover={{ y: -5, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <BriefcaseIcon className="size-10 text-muted-foreground" />
        </motion.div>
      </motion.div>

      <motion.div
        className="z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 120 },
          },
        }}
      >
        <H3 className="flex flex-col items-center gap-1.5 text-center text-2xl text-secondary-foreground md:flex-row">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {role}
          </motion.span>
          <motion.span
            className="text-muted-foreground"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.4 }}
          >
            @
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {company}
          </motion.span>
        </H3>
      </motion.div>
      <BlurryBlob firstBlobColor="" secondBlobColor="" className="rounded-xl opacity-45" />
    </motion.div>
  );
}
