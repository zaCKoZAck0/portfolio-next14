import { ImageCarousel } from '~/components/image-carousel';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FloatingDock } from '~/components/floating-dock';
import { H4 } from '~/components/typography';

export function Introduction() {
  return (
    <table className="flex min-h-screen items-center justify-center md:mt-0">
      <tbody>
        <tr className="flex flex-col items-center justify-between md:flex-row md:gap-4">
          <td className="w-fit">
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
          </td>
          <td className="pt-3 text-justify font-semibold text-secondary-foreground md:pl-10 md:pt-0">
            <H4 className="leading-8">
              {
                "Hello! I'm Ayush, also known as ZackoZack, depending on where you know me from. I'm a Fullstack Software Developer based in India with a passion for building web applications. I have expertise in Next.js, React, Node.js, and TypeScript, and I'm also well-versed in Java and Spring Boot. Currently, I work as a Software Engineer at Volkswagen Group."
              }
            </H4>
            <FloatingDock
              items={[
                {
                  title: 'GitHub',
                  icon: <FaGithub className="size-5 md:size-10" />,
                  href: 'https://github.com/zackozack0',
                },
                {
                  title: 'LinkedIn',
                  icon: <FaLinkedin className="size-5 md:size-10" />,
                  href: 'https://linkedin.com/in/ayush-kumar-yadav',
                },
                {
                  title: 'X.com',
                  icon: <FaXTwitter className="size-5 md:size-10" />,
                  href: 'https://x.com/zaCKoZAck0',
                },
                {
                  title: 'Instagram',
                  icon: <FaInstagram className="size-5 md:size-10" />,
                  href: 'https://www.instagram.com/byayushkumaryadav/',
                },
                {
                  title: 'Discord',
                  icon: <FaDiscord className="size-5 md:size-10" />,
                  href: 'https://discord.gg/NGe6pFwhdp',
                },
              ]}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
