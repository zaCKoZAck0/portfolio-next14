import { FaAws, FaDocker, FaGit, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

export function Skills() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
        <div className="flex items-center justify-start gap-2 overflow-x-hidden text-sm font-semibold md:text-xl">
          <FaJs className="size-4 shrink-0 text-orange-200 md:size-8" />
          JavaScript
        </div>
        <div className="flex items-center justify-start gap-2 truncate text-ellipsis text-sm font-semibold md:text-xl">
          <SiTypescript className="size-3 shrink-0 text-orange-200 md:size-7" />
          TypeScript
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaNodeJs className="size-4 text-orange-200 md:size-8" />
          Node.js
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaReact className="size-4 text-orange-200 md:size-8" />
          React
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiNextdotjs className="size-3 text-orange-200 md:size-7" />
          Next.js
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaPython className="size-4 text-orange-200 md:size-8" />
          Python
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaGit className="size-4 text-orange-200 md:size-8" />
          Git
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaAws className="size-4 text-orange-200 md:size-8" />
          AWS
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiTailwindcss className="size-3 shrink-0 text-orange-200 md:size-7" />
          Tailwind
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaDocker className="size-4 text-orange-200 md:size-8" />
          Docker
        </div>
        <div className="flex items-center justify-start gap-2 overflow-hidden text-sm font-semibold md:text-xl">
          <SiPostgresql className="size-3 shrink-0 text-orange-200 md:size-7" />
          PostgreSQL
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiMongodb className="size-3 text-orange-200 md:size-7" />
          MongoDB
        </div>
      </div>
    </section>
  );
}
