import { H3, UL } from "~/components/typography";
import {FaAws, FaDocker, FaGit, FaJs,FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import {SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript} from 'react-icons/si'

export function Skills() {
    return <section>
        <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start overflow-x-hidden">
                <FaJs className="md:size-8 size-4 text-orange-200 shrink-0" />
                JavaScript
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start text-ellipsis truncate">
                <SiTypescript className="md:size-7 size-3 text-orange-200 shrink-0" />
                TypeScript
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <FaNodeJs className="md:size-8 size-4 text-orange-200" />
                Node.js
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <FaReact className="md:size-8 size-4 text-orange-200" />
                React
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <SiNextdotjs className="md:size-7 size-3 text-orange-200" />
                Next.js
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <FaPython className="md:size-8 size-4 text-orange-200" />
                Python
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <FaGit className="md:size-8 size-4 text-orange-200" />
                Git
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <FaAws className="md:size-8 size-4 text-orange-200" />
                AWS
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <SiTailwindcss className="md:size-7 size-3 text-orange-200 shrink-0" />
                Tailwind
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <FaDocker className="md:size-8 size-4 text-orange-200" />
                Docker
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start overflow-hidden">
                <SiPostgresql className="md:size-7 size-3 text-orange-200 shrink-0" />
                PostgreSQL
            </div>
            <div className="md:text-xl text-sm font-semibold flex items-center gap-2 justify-start">
                <SiMongodb className="md:size-7 size-3 text-orange-200" />
                MongoDB
            </div>
        </div>
    </section>
}