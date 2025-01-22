import { ClockIcon, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { ImageCarousel } from '~/components/image-carousel';
import { H3 } from '~/components/typography';
import { LocalTime } from '../../resume/_components/local-time';
import Image from 'next/image';

export function Introduction() {
  return (
    <div className="relative flex min-h-screen items-center justify-center md:mt-0">
      <div>
        <div className="flex flex-col items-start justify-between md:flex-row md:gap-4">
          <div className="hidden w-fit md:block">
            <ImageCarousel
              items={[
                {
                  id: 1,
                  title: 'zackozack',
                  image: 'https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif',
                },
                {
                  id: 2,
                  title: 'ayush',
                  image: 'https://utfs.io/f/2c14b502-511f-45f9-9dff-4a83a1cb77b1-wj0x4g.webp',
                },
              ]}
            />
          </div>
          <div className="flex flex-col pt-6 font-semibold text-secondary-foreground md:pl-10 md:pt-0">
            <div className="flex items-center justify-between gap-4">
              <Image
                className="block size-14 flex-shrink-0 rounded-full border-2 border-orange-200 md:hidden"
                alt="zackozack"
                width={100}
                height={100}
                src="https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif"
              />
              <div>
                <H3 className="font-semibold leading-8 md:text-4xl">Ayush Kumar Yadav</H3>
                <H3 className="font-thin leading-8 md:text-4xl">zackozack</H3>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8 text-sm font-normal italic text-muted-foreground md:text-lg">
              <Link
                className="underline-offset-2 transition-all hover:text-orange-200 hover:underline"
                href="https://github.com/zaCKoZAck0"
              >
                <div className="flex items-center gap-2">
                  <FaGithub className="size-4 md:size-7" />
                  <span>zaCKoZAck0</span>
                </div>
              </Link>
              <Link
                className="underline-offset-2 transition-all hover:text-orange-200 hover:underline"
                href="https://github.com/zaCKoZAck0"
              >
                <div className="flex items-center gap-2">
                  <FaXTwitter className="size-4 md:size-7" />
                  <span>@zaCKoZAck0</span>
                </div>
              </Link>
              <Link
                className="underline-offset-2 transition-all hover:text-orange-200 hover:underline"
                href="https://github.com/zaCKoZAck0"
              >
                <div className="flex items-center gap-2">
                  <SiLeetcode className="size-4 md:size-7" />
                  <span>u/zackozack2</span>
                </div>
              </Link>
              <Link
                className="underline-offset-2 transition-all hover:text-orange-200 hover:underline"
                href="https://github.com/zaCKoZAck0"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin className="size-4 md:size-6" />
                  <span>in/ayush-kumar-yadav</span>
                </div>
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-between text-sm text-muted-foreground md:text-base">
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
  );
}
