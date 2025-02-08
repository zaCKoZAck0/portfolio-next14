'use client';
import { Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { H2, H3 } from '~/components/typography';
import { useCallback, useRef } from 'react';
import { useMousePosition } from '~/hooks/use-mouse-position';

import { Card, CardHeader, CardContent } from '~/components/ui/card';
import { ChevronDownIcon } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '~/components/ui/dialog';
import { BrowserMockup } from './browser-mock';
import { Mdx } from './mdx/mdx-components';

function ProjectCardButton({
  project,
  small = false,
  order,
}: {
  project: Project;
  small?: boolean;
  order: number;
}) {
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
      initial={{ opacity: 0, x: order % 2 == 0 ? -20 : 20, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 + order * 0.2 }}
      className="group relative h-full cursor-none text-left"
      ref={divRef}
    >
      <Card className="flex h-full flex-col border-0 bg-gradient-to-b from-card/30 to-card/50 shadow-lg transition-all duration-300 hover:scale-105 hover:from-card/40 hover:to-card/60 hover:shadow-xl">
        <CardHeader className="pb-3">
          <H3 className="line-clamp-2 bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-2xl font-semibold leading-tight text-transparent">
            {project.title}
          </H3>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {!small && (
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

export function ProjectCard({
  project,
  small = false,
  order = 0,
}: {
  project: Project;
  small?: boolean;
  order?: number;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <ProjectCardButton project={project} small={small} order={order} />
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent md:min-w-[780px]">
        <BrowserMockup url={project.liveUrl}>
          <div className="max-h-[80vh] overflow-auto p-1 md:max-h-[480px] md:p-4">
            <H2>{project.title}</H2>
            <p className="py-2 text-muted-foreground">{project.description}</p>
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 py-2">
                {project.technologies.map((tech) => (
                  <div key={tech} className="group relative flex">
                    {/* Front Text Layer */}
                    <span className="z-20 transform rounded-full bg-accent/25 px-3 py-1 text-xs font-medium text-accent-foreground/90 shadow-md transition-all duration-300 will-change-transform group-hover:translate-y-0.5 group-hover:shadow-lg">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <hr className="mt-5" />
            <div id="blog">
              <Mdx code={project.body.code} />
            </div>
          </div>
        </BrowserMockup>
      </DialogContent>
    </Dialog>
  );
}
