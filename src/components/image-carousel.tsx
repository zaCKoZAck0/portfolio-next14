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
              'absolute h-[250px] w-[200px] animate-fadeIn overflow-hidden rounded-xl border-4 border-orange-200 bg-primary shadow-md hover:scale-105',
            )}
            style={{
              transform: index === 1 ? 'scale(1.1) rotate(5deg)' : 'translateX(-30%) rotate(-5deg)',
              opacity: index === 1 ? 1 : 0.5,
              transition: 'transform 0.5s ease, filter 0.5s ease',
              filter: index === 1 ? 'none' : 'grayscale(100%)',
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
      <div className="flex items-center justify-center gap-2 md:pr-10">
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
