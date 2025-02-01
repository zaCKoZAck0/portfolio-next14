'use client';
import { Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { H3 } from '~/components/typography';
import { useCallback, useRef } from 'react';
import { useMousePosition } from '~/hooks/use-mouse-position';

import { Card, CardHeader, CardContent } from '~/components/ui/card';
import { ChevronDownIcon } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  const divRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    // We need to offset the position to center the info div
    const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
    const offsetY = (infoRef.current?.offsetHeight || 0) / 2;

    // Use CSS variables to position the info div instead of state to avoid re-renders
    infoRef.current?.style.setProperty('--x', `${x - offsetX}px`);
    infoRef.current?.style.setProperty('--y', `${y - offsetY}px`);
  }, []);

  useMousePosition(divRef, update);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
      className="group relative h-full cursor-none"
      ref={divRef}
    >
      <Card className="flex h-full flex-col border-0 bg-gradient-to-b from-card/30 to-card/50 shadow-lg transition-all hover:from-card/40 hover:to-card/60 hover:shadow-xl">
        <CardHeader className="pb-3">
          <H3 className="line-clamp-2 bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-xl font-semibold leading-tight text-transparent">
            {project.title}
          </H3>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="group relative flex" // Added 'transform' here
                >
                  {/* Front Text Layer */}
                  <span className="z-20 transform rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground/90 shadow-md transition-all duration-300 will-change-transform group-hover:translate-y-0.5 group-hover:shadow-lg">
                    {tech}
                  </span>
                  {/* Gradient Background Layer */}
                  <span className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 px-3 py-1 text-xs font-medium text-transparent transition-opacity duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <div
        ref={infoRef}
        style={{
          transform: 'translate(var(--x), var(--y))',
        }}
        className="pointer-events-none absolute left-0 top-0 z-[50] rounded-full bg-primary/25 px-4 py-2 text-sm font-bold text-secondary-foreground opacity-0 backdrop-blur-md duration-0 group-hover:opacity-100"
      >
        Read more <ChevronDownIcon size={16} className="inline-block" />
      </div>
    </motion.div>
  );
}
