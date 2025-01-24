import { allProfiles } from 'contentlayer/generated';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from '~/components/social-icons';

export function BlogFooter() {
  const profile = allProfiles[0];
  return (
    <footer className="mt-36 rounded-xl bg-card text-card-foreground">
      <div className="max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Image
            className="size-16 flex-shrink-0 rounded-full border-2 border-orange-200"
            alt={profile.username}
            width={100}
            height={100}
            src={profile.profileImage}
          />
          {/* About Section */}
          <div className="space-y-2">
            <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
              <h3 className="text-center font-mono text-lg font-semibold text-white md:text-left">
                About Me
              </h3>
              <div className="flex w-full items-center justify-center gap-4 md:w-fit">
                {profile.links?.map((link) => (
                  <Link
                    key={link._id}
                    className="transition-colors hover:text-orange-200"
                    href={link.url}
                  >
                    <SocialIcon className="size-5 md:size-4" platform={link.platform} />
                    <span className="sr-only">{link.platform}</span>
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-xs">{profile.blogHeadline}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col border-t pt-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.username}
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link className="flex items-center gap-1 underline-offset-2 hover:underline" href="/">
              Portfolio
            </Link>{' '}
            |
            <Link
              className="flex items-center gap-1 underline-offset-2 hover:underline"
              href="/projects"
            >
              Projects
            </Link>{' '}
            |
            <a
              className="flex items-center gap-1 underline-offset-2 hover:underline"
              href="https://github.com/zaCKoZAck0/portfolio-next14"
            >
              Github repo <ExternalLinkIcon size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
