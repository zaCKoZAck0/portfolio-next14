import { H3 } from "~/components/typography";
import Image from 'next/image';

export function Education(){
    return <section>
        <table>
            <tr>
                <td>
                    <Image src="https://utfs.io/f/a8b81282-9354-497c-b465-c75a94301bcc-4o63ls.webp" alt="AKTU Logo" width={50} height={50} className='bg-white opacity-90' />
                </td>                    
                        <td className='px-3'>
                            <H3>
                            Dr. A.P.J. Abdul Kalam Technical University
                            </H3>
                            <p className='text-lg'>
                            (B.Tech in Computer Science and Engineering)
                            </p>
                        </td>
                        <td className="text-lg text-muted-foreground">
                            <p>
                            2018 - 2022
                            </p>
                            <p>
                            Lucknow
                            </p>
                        </td>
            </tr>
        </table>
        </section>
}