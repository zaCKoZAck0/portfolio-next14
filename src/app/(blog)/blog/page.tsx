import Link from 'next/link';
import { FaUser, FaXTwitter } from 'react-icons/fa6';
import { H2, H4 } from '~/components/typography';
import { Button } from '~/components/ui/button';
import { allDocs } from 'contentlayer/generated'
import { Metadata } from 'next';
import { differenceInDays, format } from 'date-fns';
import { Badge } from '~/components/ui/badge';
import { Calendar } from 'lucide-react';
import { BlogFooter} from '~/components/navigation/blog/footer';

export const metadata: Metadata = {
  title: 'Blog | zackozack',
  description: 'A collection of blogs by zackozack',
};

export default function BlogPage() {
  const blogs = allDocs.filter(docs => docs.published)
  const groupedBlogs = blogs.reduce(
    (acc, blog) => {
      const year = new Date(blog.publishedAt).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(blog.slugAsParams);
      return acc;
    },
    {} as Record<string, string[]>,
  );
  return (
    <main className="flex min-h-screen justify-center md:container">
      <section className="flex w-full max-w-3xl min-h-screen flex-col p-4 pb-10">
        <div className='flex justify-center min-h-screen flex-col'>
          <p className="w-full rounded-md border-orange-200 p-4 text-justify">
            <span className="w-full text-justify text-secondary-foreground">
              Hi there! I am Ayush. Welcome to my personal blog. Thus far, I have written only {blogs.length}.
            </span>{' '} My blogs mostly have content around tools and technologies, tutorials, book / research-paper summaries, etc. 
          </p>
          <div className="flex items-center justify-end gap-2 py-2">
            <a href="https://x.com/zaCKoZAck0">
              <Button size="sm" variant="secondary" className="rounded-full">
                <H4 className="mr-2 text-sm font-normal">@zaCKoZAck0</H4>
                <FaXTwitter size={14} />
              </Button>
            </a>
            <Link href="/">
              <Button size="sm" variant="secondary" className="rounded-full">
                <H4 className="mr-2 text-sm font-normal">Portfolio</H4>
                <FaUser size={12} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-32">
          <div className="flex flex-col gap-4">
            {blogs.map((blog) => {
              const isNew = differenceInDays(new Date(), new Date(blog.publishedAt)) <= 7;
              const isUpdated =
                differenceInDays(new Date(blog.updatedAt), new Date(blog.publishedAt)) > 0 &&
                differenceInDays(new Date(), new Date(blog.updatedAt)) <= 7;
              return (
                <Link key={blog.slug} href={`/blog/${blog.slugAsParams}`}>
                  <div className="group border hover:-translate-y-2 relative overflow-hidden rounded-lg bg-primary/5 p-6 transition-all duration-500 hover:bg-primary/10">
                    <H4 className="flex items-center gap-2 text-xl font-normal text-secondary-foreground transition-colors duration-500 group-hover:text-orange-200 md:text-xl">
                      {blog.title}
                      {isNew && (
                        <Badge className="border-0 bg-gradient-to-br from-green-400 to-blue-500 text-white">
                          New
                        </Badge>
                      )}
                      {isUpdated && (
                        <Badge className="border-0 bg-gradient-to-br from-purple-400 to-pink-500 text-white">
                          Updated
                        </Badge>
                      )}
                    </H4>
                    <p className="mt-2 text-sm text-muted-foreground">{blog.description}</p>
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mt-2">
                      <Calendar className="size-3" />
                      <span>{format(new Date(blog.updatedAt), 'MMMM d, yyyy')}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-32">
          <H2>All Blogs</H2>
          {Object.keys(groupedBlogs).map((year) => (
            <div key={year}>
              <H4 className="pb-4 pt-8 text-lg text-secondary-foreground">{year}</H4>
              <table>
                <tbody>
                  {groupedBlogs[year].map((slug) => {
                    const blog = blogs.find((it) => it.slugAsParams === slug);
                    if (!blog) return null;
                    const createdDate = new Date(blog.publishedAt);
                    return (
                      <Link key={slug} href={`/blog/${slug}`}>
                        <tr key={blog.title} className="group flex items-center pt-4">
                          <td className="flex-shrink-0">
                            <H4 className="pr-3 text-left text-sm font-normal">
                              {createdDate.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </H4>
                          </td>
                          <td>
                            <H4 className="pl-3 text-base font-semibold text-secondary-foreground group-hover:text-orange-200">
                              {blog.title}
                            </H4>
                          </td>
                        </tr>
                      </Link>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      <BlogFooter />
      </section>
    </main>
  );
}
