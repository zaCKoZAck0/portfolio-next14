import { ChevronDown } from "lucide-react";
import { ProjectCard } from "~/components/project-card";
import { H2, P } from "~/components/typography";
import { Button } from "~/components/ui/button";
import githubData from "../../../../data/github-data.json";
import Link from "next/link";

export function InterestsAndGoals() {
  return (
    <div className="py-20">
      <H2 className="w-full text-center">Interests and Goals</H2>
      <div className="mb-10">
        <P className="text-sm text-center">
          {
            "I'm passionate about web development and dedicated to creating applications that address real-world challenges. I believe open-source software should excel in delivering an outstanding user experience, robust security, and comprehensive accessibility."
          }
        </P>
        <P className="text-sm text-center">
          {
            "Here are the top open-source projects I've contributed to and maintain."
          }
        </P>
        <div>
          {githubData.data.user.topRepositories.nodes
            .slice(0, 2)
            .map((repo, index) => {
              return <ProjectCard key={index} {...repo} />;
            })}
        </div>
        <div className="mb-2 flex justify-center">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="rounded-full">
              View All Projects
              <ChevronDown size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
        <P className="text-sm text-center">
          {
            "I'm also going to start a blog soon, where I'll share my experiences, insights, and learnings from my journey as a developer."
          }
        </P>
      </div>
    </div>
  );
}
