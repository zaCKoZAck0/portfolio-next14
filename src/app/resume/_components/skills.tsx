import { H3, UL } from "~/components/typography";
import {FaAws, FaDocker, FaGit, FaJs,FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import {SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript} from 'react-icons/si'

export function Skills() {
    return <section>
        <div className="grid grid-cols-4 gap-3">
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaJs className="size-8 text-orange-200" />
                JavaScript
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <SiTypescript className="size-7 text-orange-200" />
                TypeScript
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaNodeJs className="size-8 text-orange-200" />
                Node.js
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaReact className="size-8 text-orange-200" />
                React
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <SiNextdotjs className="size-7 text-orange-200" />
                Next.js
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaPython className="size-8 text-orange-200" />
                Python
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaGit className="size-8 text-orange-200" />
                Git
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaAws className="size-8 text-orange-200" />
                AWS
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <SiTailwindcss className="size-7 text-orange-200" />
                Tailwind
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <FaDocker className="size-8 text-orange-200" />
                Docker
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <SiPostgresql className="size-7 text-orange-200" />
                PostgreSQL
            </div>
            <div className="text-xl font-semibold flex items-center gap-2 justify-start">
                <SiMongodb className="size-7 text-orange-200" />
                MongoDB
            </div>
        </div>
    </section>
}