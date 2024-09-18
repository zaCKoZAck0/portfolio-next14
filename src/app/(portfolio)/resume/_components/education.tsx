import { H3 } from '~/components/typography';
import Image from 'next/image';

export function Education() {
  return (
    <section className="rounded-lg bg-primary/5 p-2 px-4 md:p-4 md:px-6">
      <table>
        <tbody>
          <tr className="flex flex-col gap-2 md:flex-row md:gap-0">
            <span className="flex items-center gap-4 md:flex-row">
              <td className="rounded-md bg-white/90 p-2">
                <Image
                  src="https://utfs.io/f/a8b81282-9354-497c-b465-c75a94301bcc-4o63ls.webp"
                  alt="AKTU Logo"
                  width={50}
                  height={50}
                  className="rounded-full opacity-90"
                />
              </td>
              <td className="text-sm md:px-3 md:text-lg">
                <H3 className="text-sm md:text-2xl">Dr. A.P.J. Abdul Kalam Technical University</H3>
                <p className="text-xs md:text-lg">(B.Tech in CSE)</p>
              </td>
            </span>
            <td className="text-sm text-muted-foreground md:text-lg">
              <p>2018 - 2022</p>
              <p>Lucknow</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
