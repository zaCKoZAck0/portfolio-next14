
import { FaGithub, FaLink } from "react-icons/fa6";
import { RepositoryNode } from "~/types/github-data";
import { A, H3, H4, P } from "./typography";
import { ArrowUpRight, GitFork, GitMergeIcon, GitPullRequest, Star } from "lucide-react";
import { formatLargeNumber } from "~/lib/numbers";
import { getRelativeDate } from "~/lib/date";

type ProjectCardProps = {
    key: number;
} & RepositoryNode;

export function ProjectCard({
    key,
    nameWithOwner,
    description,
    stargazerCount,
    forkCount,
    url,
    homepageUrl,
    primaryLanguage,
    defaultBranchRef
}: ProjectCardProps){
    return <div key={key} className="p-2">
    <div className="space-y-1 p-4 bg-muted rounded-md">
        <div className="flex justify-between items-center">
        <A href={url}>
            <FaGithub size={24} className="mr-2" /> {nameWithOwner}
        </A>
        <div className="flex items-center text-sm">
        {stargazerCount>0 && <>{formatLargeNumber(stargazerCount)}<Star size={18} className="mx-2" /></>}
        {forkCount>0 && <>{formatLargeNumber(forkCount)}<GitFork size={18} className="ml-2" /></>}
        </div>
        </div>
        {
            description && <H4 title={description} className="text-sm text-secondary-foreground w-[90%] font-normal overflow-hidden text-nowrap text-ellipsis">{description}</H4>
        }
        {
            (defaultBranchRef?.target.history.edges.length || 0 > 0) && 
            <a 
            href={defaultBranchRef?.target.history.edges[0].node.url} 
            className="flex text-xs items-center pt-3 hover:underline underline-offset-2">
                <GitPullRequest size={20} className="mr-2 flex-shrink-0" />
                <span className="w-[90%] overflow-hidden text-nowrap text-ellipsis font-semibold">
                {defaultBranchRef?.target.history.edges[0].node.message}
                </span>
            </a>
        }
        <div className="flex items-center gap-6 text-xs text-secondary-foreground">
            {
                defaultBranchRef?.target.history.edges.length && <div className="flex items-center">
                    <p>{getRelativeDate(new Date(defaultBranchRef.target.history.edges[0].node.committedDate || 0), true)} ago</p>
                    <GitMergeIcon size={18} className="mx-2" />
                    <p>on main</p>
                    </div>
            }
        {primaryLanguage && <div className="flex text-sm text-muted-foreground items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: primaryLanguage.color}} />
            <p>{primaryLanguage.name}</p>
        </div>}
        
        {homepageUrl && 
        <div>
        <a href={homepageUrl} className="text-sm hover:underline underline-offset-2 group">
            {homepageUrl.replace(/(^\w+:|^)\/\//, '')}<ArrowUpRight size={16} className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        </div>
        }
        </div>
    </div>
    </div>

}