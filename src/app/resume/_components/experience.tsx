import Image from 'next/image';
import { H3, H4, P } from '~/components/typography';
import { getRelativeDate } from '~/lib/date';

export function Experience(){
    return <section>
        <table>
            <tbody>
            <tr className='flex flex-col md:flex-row items-center gap-2 md:gap-0'>
                <span className='flex items-center gap-4 md:flex-row'>
                <td>
                    <Image src="https://utfs.io/f/65dc61ac-fe04-40dd-b493-0b0ea45a9125-hz764x.png" alt="Volkswagen Logo" width={50} height={50} className='bg-white opacity-90' />
                </td>                    
                        <td className='md:w-[300px] md:px-3 text-sm md:text-lg'>
                            <H3 className='md:text-2xl text-sm'>
                            Volkswagen Group
                            </H3>
                            <p className='md:text-lg text-sm'>
                            (Software Engineer)
                            </p>
                        </td>
                </span>
                        <td className='md:text-lg text-sm text-muted-foreground'>
                            <p>
                            Aug 2022 - Present
                            </p>
                            <p>
                            {getRelativeDate(new Date('2022-08-30'))}
                            </p>
                        </td>
            </tr>
            </tbody>
        </table>
    </section>
}