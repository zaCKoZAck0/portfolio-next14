import { H3 } from "~/components/typography";
import Image from 'next/image';

export function Education(){
    return <section>
        <table>
            <tbody>
        <tr className='flex flex-col md:flex-row gap-2 md:gap-0'>
        <span className='flex items-center gap-4 md:flex-row'>
                <td>
                    <Image src="https://utfs.io/f/a8b81282-9354-497c-b465-c75a94301bcc-4o63ls.webp" alt="AKTU Logo" width={50} height={50} className='bg-white opacity-90' />
                </td>                    
                <td className='md:px-3 text-sm md:text-lg'>
                <H3 className='md:text-2xl text-sm'>
                            Dr. A.P.J. Abdul Kalam Technical University
                            </H3>
                            <p className='md:text-lg text-xs'>
                            (B.Tech in Computer Science and Engineering)
                            </p>
                        </td>
                </span>
                        <td className="md:text-lg text-sm text-muted-foreground">
                            <p>
                            2018 - 2022
                            </p>
                            <p>
                            Lucknow
                            </p>
                        </td>
            </tr>
            </tbody>
        </table>
        </section>
}