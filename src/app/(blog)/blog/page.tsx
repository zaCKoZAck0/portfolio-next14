import Link from 'next/link';
import { FaUser, FaXTwitter } from 'react-icons/fa6';
import { H2, H4 } from '~/components/typography';
import { Button } from '~/components/ui/button';

export default function BlogPage() {
  return (
    <main className="flex min-h-screen justify-center md:container">
      <section className="flex w-full max-w-3xl translate-y-[calc(100vh/5)] flex-col p-4 md:translate-y-1/4">
        <div>
          <p className="w-full rounded-md border-orange-200 p-4 text-justify">
            <span className="w-full text-justify text-secondary-foreground">
              Hi there! I am zackozack, and thus far, I have written 10 blogs.
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
            <Link href="/blog/1">
              <div className="group rounded-lg border-2 border-primary p-4 transition-colors duration-500 hover:bg-primary/10">
                <H4 className="text-lg font-normal text-secondary-foreground transition-colors duration-500 group-hover:text-orange-200 md:text-xl">
                  React sub-components Part 2: Using the new Context API
                </H4>
                <p className="mt-1 text-xs text-muted-foreground">
                  A guide on how to reproduce a chromatic dispersion effect for your React Three
                  Fiber and shader projects with FBO, refraction, chromatic aberration, specular,
                  and other tricks through 9 interactive code playgrounds.
                </p>
              </div>
            </Link>
            <Link href="/blog/1">
              <div className="group rounded-lg border-2 border-primary p-4 transition-colors duration-500 hover:bg-primary/10">
                <H4 className="text-lg font-normal text-secondary-foreground transition-colors duration-500 group-hover:text-orange-200 md:text-xl">
                  React sub-components Part 2: Using the new Context API
                </H4>
                <p className="mt-1 text-xs text-muted-foreground">
                  A guide on how to reproduce a chromatic dispersion effect for your React Three
                  Fiber and shader projects with FBO, refraction, chromatic aberration, specular,
                  and other tricks through 9 interactive code playgrounds.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-32">
          <H2>All Blogs</H2>
          <H4 className="pb-4 pt-8 text-lg text-secondary-foreground">2024</H4>
          <table>
            <tbody>
              <Link href="/blog/1">
                <tr className="group flex items-start pt-4">
                  <td className="flex-shrink-0">
                    <H4 className="pr-3 text-left text-sm font-normal">Aug 24</H4>
                  </td>
                  <td>
                    <H4 className="pl-3 text-base font-semibold text-secondary-foreground group-hover:text-orange-200">
                      React sub-components Part 2: Using the new Context API
                    </H4>
                  </td>
                </tr>
              </Link>
              <tr className="flex items-start pt-4">
                <td className="flex-shrink-0">
                  <H4 className="pr-3 text-left text-sm font-normal">Sep 24</H4>
                </td>
                <td>
                  <H4 className="pl-3 text-base font-semibold text-secondary-foreground">
                    React sub-components Part 2: Using the new Context API
                  </H4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
