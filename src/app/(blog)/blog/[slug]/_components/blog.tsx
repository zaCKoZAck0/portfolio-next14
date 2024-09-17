import { ArrowLeft } from 'lucide-react';
import { H1, H4 } from '~/components/typography';
import { Button } from '~/components/ui/button';
import { Sora } from 'next/font/google';
import { cn } from '~/lib/utils';
import { BashShell, Code, Output } from './code';
import { Aside } from './aside';
import { BlogImage } from './img';
import { Blog } from '../../_blogs';

const sora = Sora({ subsets: ['latin'] });

interface BlogPageProps {
  blog: Blog;
}

export function BlogPage({ blog }: BlogPageProps) {
  const createdDate = new Date(blog.created_at);
  const updatedDate = new Date(blog.updated_at);
  return (
    <main className="flex min-h-screen justify-center md:container">
      <section className="flex w-full max-w-3xl translate-y-[calc(100vh/5)] flex-col p-4 md:translate-y-[calc(100vh/4)]">
        <div className="py-2">
          <Button size="sm" variant="link" className="group h-auto items-center rounded-full px-0">
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            <span className="ml-1 text-xs font-light">Home</span>
          </Button>
        </div>
        <H1 className="text-3xl font-semibold text-secondary-foreground lg:text-3xl">
          {blog.title}
        </H1>
        <div className="my-4">
          <H4 className="text-xs text-muted-foreground">
            <span className="mr-2">By</span>
            <span className="text-secondary-foreground">zackozack</span>
            <span className="mx-2">|</span>
            <span className="text-secondary-foreground">
              {createdDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="mx-4 hidden rounded-md bg-primary/15 px-2 py-0.5 md:inline">
              Last Updated on{' '}
              {updatedDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
            </span>
          </H4>
        </div>
        <div className={cn('my-4 text-sm text-muted-foreground', sora.className)}>
          {blog.sections.map((section, idx) => {
            switch (section.type) {
              case 'heading':
                switch (section.level) {
                  case 'h2':
                    return <h2 dangerouslySetInnerHTML={{ __html: section.content }} key={idx} />;
                  case 'h3':
                    return <h3 dangerouslySetInnerHTML={{ __html: section.content }} key={idx} />;
                  default:
                    return <h4 dangerouslySetInnerHTML={{ __html: section.content }} key={idx} />;
                }
              case 'code':
                switch (section.codeType) {
                  case 'shell':
                    return (
                      <BashShell code={section.code} highlight={section.highlight} key={idx} />
                    );
                  case 'code':
                    return (
                      <Code
                        key={idx}
                        code={section.code}
                        language={section.language ?? 'plaintext'}
                        lines={section.highlight}
                        title={section.title}
                      />
                    );
                  default:
                    return <Output code={section.code} key={idx} />;
                }
              case 'image':
                return <BlogImage key={idx} src={section.src} alt={section.alt} />;
              case 'aside':
                return (
                  <Aside
                    key={idx}
                    type={section.tag}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                );
              default:
                return <p dangerouslySetInnerHTML={{ __html: section.content }} key={idx} />;
            }
          })}
        </div>
      </section>
    </main>
  );
}
