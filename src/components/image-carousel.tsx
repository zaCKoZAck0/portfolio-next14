'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '~/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Image from 'next/image';

interface ICarouselItem {
  id: number;
  title: string;
  image: string;
}

interface IImageCarouselProps {
  items: ICarouselItem[];
}

export function ImageCarousel({ items: initialItems }: IImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialItems.length);
  };

  const visibleIndices = [currentIndex, (currentIndex + 1) % initialItems.length];
  const visibleItems = visibleIndices.map((index) => initialItems[index]);

  const imageVariants = {
    active: (index: number) => ({
      scale: index === 1 ? 1.1 : 1,
      rotate: index === 1 ? 3 : -3,
      opacity: index === 1 ? 1 : 0.5,
      filter: index === 1 ? 'grayscale(0%)' : 'grayscale(50%)',
      x: index === 1 ? 0 : '-15%',
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    }),
  };

  return (
    <div className="flex w-fit flex-col items-center">
      <div className="relative mb-10 h-[250px] w-[200px] p-2">
        <AnimatePresence mode="wait">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial={{ opacity: 0 }}
              variants={imageVariants}
              animate="active"
              className={cn(
                'absolute h-[250px] w-[200px] overflow-hidden rounded-xl border-2 bg-background',
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                // layout="fill"
                height={250}
                width={200}
                objectFit="cover"
                className="h-full rounded-xl object-cover"
                priority
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="mt-2 flex items-center justify-center gap-2"
      >
        <Tooltip>
          <TooltipTrigger>
            <Button onClick={handleNext} size="icon" variant="outline" className="rounded-full">
              <ArrowLeftRight className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Switch Images</TooltipContent>
        </Tooltip>
      </motion.div>
    </div>
  );
}
