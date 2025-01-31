'use client';
import React, { useState } from 'react';
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

  return (
    <div className="flex w-fit flex-col items-center">
      <div className="relative mb-10 h-[250px] w-[200px] p-2">
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'absolute h-[250px] w-[200px] overflow-hidden rounded-xl border-2 bg-background animate-in',
            )}
            style={{
              transform: index === 1 ? 'scale(1.1) rotate(3deg)' : 'translateX(-15%) rotate(-3deg)',
              opacity: index === 1 ? 1 : 0.5,
              transition: 'transform 0.2s ease, filter 0.2s ease',
              filter: index === 1 ? 'none' : 'grayscale(50%)',
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-center gap-2 md:pr-10">
        <Tooltip>
          <TooltipTrigger>
            <Button onClick={handleNext} size="icon" variant="outline" className="rounded-full">
              <ArrowLeftRight className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Switch Images</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
