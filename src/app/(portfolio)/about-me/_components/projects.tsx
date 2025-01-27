import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { allDocs, allProjects } from 'contentlayer/generated';
import { BlogCard } from '~/components/blog-card';
import { ProjectCard } from '~/components/project-card';
import { Button } from '~/components/ui/button';

export function Projects() {
  return (
    <>
      <div className="pb-20 pt-40">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {allProjects.map((project) =>
            project.featured ? (
              <ProjectCard key={project._id} project={project} />
            ) : null,
          )}
        </div>
        <div className="mb-2 mt-10 flex justify-center">
          <Link href="/projects">
            <Button variant="link" size="sm" className="rounded-full text-xs">
            <ChevronDown size={20} className="mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-20">
        <div className="grid grid-cols-1 gap-4">
          {allDocs.map((blog) => (blog.published && blog.featured ? <BlogCard key={blog._id} blog={blog} /> : null))}
        </div>
        <div className="mb-2 mt-10 flex justify-center">
          <Link href="/blog">
            <Button variant="link" size="sm" className="rounded-full text-xs">
            <ChevronDown size={20} className="mr-2" />
              View All Blogs
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
