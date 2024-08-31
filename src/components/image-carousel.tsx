"use client";
import React, { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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

  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % initialItems.length,
  ];

  const visibleItems = visibleIndices.map((index) => initialItems[index]);

  return (
    <div className="w-fit flex flex-col items-center">
    <div className="p-2 relative h-[250px] w-[200px] my-10">
      {visibleItems.map((item, index) => (
            <div
          key={item.id}
          className={cn(
            "absolute border-4 border-orange-200 shadow-md hover:scale-105 h-[250px] w-[200px] animate-fadeIn rounded-xl bg-primary bg-cover bg-center",
          )}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            transform:
              index === 1
                ? "scale(1.1) rotate(5deg)"
                : "translateX(-30%) rotate(-5deg)",
            transition: "transform 0.5s ease, filter 0.5s ease",
            filter: index === 1 ? "none" : "grayscale(100%)",
          }}
        />
      ))}
    </div>
    <div className="flex gap-2 justify-center items-center md:pr-10">
      <Tooltip>
        <TooltipTrigger>
        <Button onClick={handleNext} size='icon' className="rounded-full">
        <ArrowLeftRight />
      </Button>
        </TooltipTrigger>
        <TooltipContent>Switch Pictures</TooltipContent>
      </Tooltip>
    </div>
    </div>
  );
}