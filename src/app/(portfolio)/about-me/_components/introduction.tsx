import { ClockIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react';
import Link from 'next/link';
import { ImageCarousel } from '~/components/image-carousel';
import { H3 } from '~/components/typography';
import { LocalTime } from '../../resume/_components/local-time';
import Image from 'next/image';
import { allProfiles } from 'contentlayer/generated';
import { SocialIcon } from '~/components/social-icons';
import { BlurryBlob } from '~/components/blurry-blob';

export function Introduction() {
  const profile = allProfiles[0];
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center md:mt-0">
        <div>
          <div className="flex flex-col items-start justify-between md:flex-row md:gap-4">
            <div className="hidden w-fit md:block">
              <ImageCarousel
                items={[
                  {
                    id: 1,
                    title: profile.username,
                    image: profile.profileImage,
                  },
                  {
                    id: 2,
                    title: profile.fullName,
                    image: profile.formalImage,
                  },
                ]}
              />
            </div>
            <div className="flex flex-col pt-6 font-semibold text-secondary-foreground md:pl-10 md:pt-0">
              <div className="flex items-center justify-between gap-4">
                <Image
                  className="block size-14 flex-shrink-0 rounded-full border-2 border-orange-200 md:hidden"
                  alt={profile.username}
                  width={100}
                  height={100}
                  src={profile.profileImage}
                />
                <div>
                  <H3 className="font-semibold leading-8 md:text-4xl">{profile.fullName}</H3>
                  <H3 className="font-thin leading-8 md:text-4xl">{profile.username}</H3>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-8 text-sm font-normal italic text-muted-foreground md:text-lg">
                {profile.links?.map((link) => (
                  <Link
                    key={link._id}
                    className="w-fit underline-offset-2 transition-all hover:text-orange-200 hover:underline"
                    href={link.url}
                  >
                    <div className="flex items-center gap-2">
                      <SocialIcon platform={link.platform} className="size-4 md:size-7" />
                      <span>{link.alias}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground md:text-base">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="size-4 md:size-5" /> India
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="size-4 md:size-5" /> <LocalTime />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center justify-center gap-1 py-10">
        <div className="z-10 p-1">
          <BriefcaseIcon className="size-10 text-muted-foreground" />
        </div>
        <H3 className="z-10 text-center text-2xl text-secondary-foreground">
          {profile.role} <span className="text-muted-foreground">@</span> {profile.company}
        </H3>
        <BlurryBlob
          className="rounded-xl opacity-45"
          firstBlobColor="bg-orange-300"
          secondBlobColor="bg-primary"
        />
      </div>
    </>
  );
}
