'use client';
import { Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { H3 } from '~/components/typography';

import { Card, CardHeader, CardContent } from '~/components/ui/card';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 150 }}
      className="h-full"
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
                  className="group relative inline-block transition-transform duration-300"
                >
                  {/* Front Text Layer */}
                  <span className="relative z-20 rotate-[15deg] rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground/90 transition-all duration-300">
                    {tech}
                  </span>
                  {/* Gradient Background Layer */}
                  <span className="group-hover absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-transparent opacity-0 transition-opacity duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
