import { CopyableText } from '~/components/typography';
import { LocalTime } from './local-time';
import { RelativeDate } from '~/components/relative-date';

export function AboutMe() {
  return (
    <section className="rounded-lg bg-primary/5 py-2 pl-3 md:p-4 md:px-6">
      <div>
        <table className="text-xs text-secondary-foreground md:text-lg">
          <tbody>
            <tr>
              <td className="text-muted-foreground md:pr-4">Name:</td>
              <td>Ayush Kumar Yadav</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Age:</td>
              <td>
                <RelativeDate date={new Date('2001-11-30')} />
              </td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Nationality:</td>
              <td>Indian 🇮🇳</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Timezone:</td>
              <LocalTime />
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Languages:</td>
              <td>Hindi, English</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Email:</td>
              <td>
                <CopyableText>id.ayushkryadav@gmail.com</CopyableText>
              </td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Phone Number:</td>
              <td>
                <CopyableText>+91 9198517250</CopyableText>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
