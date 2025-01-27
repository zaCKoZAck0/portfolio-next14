import { Project } from "contentlayer/generated";
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { H3 } from '~/components/typography';
import { cn } from '~/lib/utils';
import { buttonVariants, Button } from "./ui/button";
import { PlayIcon, ChevronDown } from "lucide-react";

export function ProjectCard({project}: {project: Project}){
    return (<Card
        key={project._id}
        className="relative bg-gradient-to-bl from-orange-200/10 to-card to-30%"
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <H3>{project.title}</H3>
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <div className="absolute -top-6 right-0 flex gap-1 px-2">
          <Link
            href={project.github}
            className={cn(
              buttonVariants({ size: 'icon', variant: 'outline' }),
              'rounded-full',
            )}
          >
            <SiGithub className="size-4" />
            <span className="sr-only">Project Source Code</span>
          </Link>
          <Link
            href={project.liveUrl}
            className={cn(
              buttonVariants({ size: 'icon', variant: 'outline' }),
              'rounded-full',
            )}
          >
            <PlayIcon className="size-4" />
            <span className="sr-only">Live Preview</span>
          </Link>
        </div>
        <div className="absolute -bottom-4 left-[30%]">
          <Button size="sm" variant="outline" className="h-auto rounded-full py-1 text-xs">
            <ChevronDown className="mr-1 size-4" /> View More
          </Button>
        </div>
      </Card>)
}