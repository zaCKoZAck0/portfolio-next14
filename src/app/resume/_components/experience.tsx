import Image from 'next/image';
import { H3, H4, P } from '~/components/typography';

export function Experience(){
    return <section>
        <table>
            <tr>
                <td>
                    <Image src="https://utfs.io/f/65dc61ac-fe04-40dd-b493-0b0ea45a9125-hz764x.png" alt="Volkswagen Logo" width={50} height={50} className='bg-white opacity-90' />
                </td>                    
                        <td className='w-[300px] px-3'>
                            <H3>
                            Volkswagen Group
                            </H3>
                            <p className='text-lg'>
                            (Software Engineer)
                            </p>
                        </td>
                        <td className='text-lg text-muted-foreground'>
                            <P>
                            2021 - Present
                            </P>
                            <p>
                            1 Year(s) 3 Month(s) 12 Day(s)
                            </p>
                        </td>
            </tr>
        </table>
    </section>
}