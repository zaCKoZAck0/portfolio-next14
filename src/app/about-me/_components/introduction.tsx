import { ImageCarousel } from "~/components/image-carousel";
import { P } from "~/components/typography";

export function Introduction() {
  return (
    <table className="mb-5 min-h-screen flex items-center justify-center ">
      <tbody>
        <tr className="flex md:flex-row flex-col items-center justify-between">
          <td className="w-fit">
            <ImageCarousel
              items={[
                {
                  id: 1,
                  title: "zackozack",
                  image:
                    "https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif",
                },
                {
                  id: 2,
                  title: "ayush",
                  image:
                    "https://utfs.io/f/2c14b502-511f-45f9-9dff-4a83a1cb77b1-wj0x4g.webp",
                },
              ]}
            />
          </td>
          <td className="md:pl-10 pt-3 md:pt-0 text-justify text-secondary-foreground font-semibold">
            <P>
              {
                "Hello! I'm Ayush, also known as ZackoZack, depending on where you know me from. I'm a Fullstack Software Developer based in India 🇮🇳 with a passion for building web applications. I have expertise in Next.js, React, Node.js, and TypeScript, and I'm also well-versed in Java and Spring Boot. Currently, I work as a Software Engineer at Volkswagen Group."
              }
            </P>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
