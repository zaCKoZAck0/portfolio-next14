import Image from 'next/image';
import { H3 } from '~/components/typography';
import { getRelativeDate } from '~/lib/date';

export function Experience() {
  return (
    <section className="rounded-lg bg-primary/5 p-3 md:p-4 md:px-6">
      <table>
        <tbody>
          <tr className="flex flex-col gap-2 md:flex-row md:items-center md:gap-0">
            <div className="flex items-center gap-4 md:flex-row">
              <td>
                <Image
                  src="https://utfs.io/f/65dc61ac-fe04-40dd-b493-0b0ea45a9125-hz764x.png"
                  alt="Volkswagen Logo"
                  width={50}
                  height={50}
                  className="rounded-md bg-white/95 opacity-90"
                />
              </td>
              <td className="text-sm md:w-[300px] md:px-3 md:text-lg">
                <H3 className="text-sm md:text-2xl">Volkswagen Group</H3>
                <p className="text-sm md:text-lg">(Software Engineer)</p>
              </td>
            </div>
            <td className="text-sm text-muted-foreground md:text-lg">
              <p>Aug 2022 - Present</p>
              <p>{getRelativeDate(new Date('2022-08-30'))}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
