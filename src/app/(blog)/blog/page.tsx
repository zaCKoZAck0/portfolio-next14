import Link from 'next/link';
import { FaUser, FaXTwitter } from 'react-icons/fa6';
import { H2, H4 } from '~/components/typography';
import { Button } from '~/components/ui/button';
import { blogs } from './_blogs';

export default function BlogPage() {
  const groupedBlogs = Object.keys(blogs).reduce(
    (acc, slug) => {
      const blog = blogs[slug];
      const year = new Date(blog.created_at).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(slug);
      return acc;
    },
    {} as Record<string, string[]>,
  );
  return (
    <main className="flex min-h-screen justify-center md:container">
      <section className="flex w-full max-w-3xl translate-y-[calc(100vh/5)] flex-col p-4 md:translate-y-1/4">
        <div>
          <p className="w-full rounded-md border-orange-200 p-4 text-justify">
            <span className="w-full text-justify text-secondary-foreground">
              Hi there! I am zackozack, and thus far, I have written {Object.keys(blogs).length}{' '}
              blogs.
            </span>{' '}
            In my blogs, I write about my experiences, thoughts, and opinions on various topics. I
            hope you enjoy reading them as much as I enjoy writing them.
          </p>
          <div className="flex items-center justify-end gap-2 py-2">
            <Button size="sm" variant="secondary" className="rounded-full">
              <H4 className="mr-2 text-sm font-normal">@zaCKoZAck0</H4>
              <FaXTwitter size={14} />
            </Button>
            <Button size="sm" variant="secondary" className="rounded-full">
              <H4 className="mr-2 text-sm font-normal">Portfolio</H4>
              <FaUser size={12} />
            </Button>
          </div>
        </div>
        <div className="mt-32">
          <H2>Top Blogs</H2>
          <div className="flex flex-col gap-4">
            {Object.keys(blogs).map((slug) => {
              const blog = blogs[slug];
              return (
                <Link key={slug} href={`/blog/${slug}`}>
                  <div className="group rounded-lg border-2 border-primary p-4 transition-colors duration-500 hover:bg-primary/10">
                    <H4 className="text-lg font-normal text-secondary-foreground transition-colors duration-500 group-hover:text-orange-200 md:text-xl">
                      {blog.title}
                    </H4>
                    <p className="mt-1 text-xs text-muted-foreground">{blog.description}</p>
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
                    const blog = blogs[slug];
                    const createdDate = new Date(blog.created_at);
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
      </section>
    </main>
  );
}
