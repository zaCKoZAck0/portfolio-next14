import { ChevronDown, PlayIcon } from 'lucide-react';
import { H3 } from '~/components/typography';
import { Button, buttonVariants } from '~/components/ui/button';
import Link from 'next/link';
import { allDocs, allProjects } from 'contentlayer/generated';
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { SiGithub } from 'react-icons/si';
import { cn } from '~/lib/utils';
import { BlogCard } from '~/components/blog-card';

export function Projects() {
  return (
    <>
      <div className="pb-20 pt-40">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {allProjects.map((project) =>
            project.featured ? (
              <Card
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
              </Card>
            ) : null,
          )}
        </div>
        <div className="mb-2 mt-10 flex justify-center">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="rounded-full">
              View All Projects
              <ChevronDown size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-20">
        <div className="grid grid-cols-1 gap-4">
          {allDocs.map((blog) => (blog.featured ? <BlogCard key={blog._id} blog={blog} /> : null))}
        </div>
        <div className="mb-2 mt-10 flex justify-center">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="rounded-full">
              View All Blogs
              <ChevronDown size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
