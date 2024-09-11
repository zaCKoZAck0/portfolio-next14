import { RepositoryNode } from '~/types/github-data';
import { A, H4 } from './typography';
import { ArrowUpRight, GitFork, GitMergeIcon, GitPullRequest, Star } from 'lucide-react';
import { formatLargeNumber } from '~/lib/numbers';
import { getRelativeDate } from '~/lib/date';
import Image from 'next/image';

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
  owner: { avatarUrl },
  homepageUrl,
  defaultBranchRef,
}: ProjectCardProps) {
  return (
    <div key={key} className="py-2 md:p-2">
      <div className="space-y-1 rounded-md bg-muted p-3 md:p-4">
        <div className="flex gap-2">
          <Image
            src={avatarUrl}
            alt={nameWithOwner}
            width={50}
            height={50}
            className="mr-1 size-14 flex-shrink-0 rounded-md md:mr-2 md:size-10"
          />
          <div className="flex-grow overflow-hidden">
            <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
              <A href={url}>
                <p className="w-fit text-sm md:text-base">{nameWithOwner}</p>
              </A>
              <div className="flex items-center pt-1 text-xs md:pt-0 md:text-sm">
                {stargazerCount > 0 && (
                  <>
                    {formatLargeNumber(stargazerCount)}
                    <Star className="mx-2 size-4" />
                  </>
                )}
                {forkCount > 0 && (
                  <>
                    {formatLargeNumber(forkCount)}
                    <GitFork className="ml-2 size-4" />
                  </>
                )}
              </div>
            </div>
            {description && (
              <H4
                title={description}
                className="w-[90%] overflow-hidden text-ellipsis text-nowrap text-sm font-normal text-muted-foreground"
              >
                {description}
              </H4>
            )}
          </div>
        </div>
        {(defaultBranchRef?.target.history.edges.length || 0 > 0) && (
          <a
            href={defaultBranchRef?.target.history.edges[0].node.url}
            className="flex items-center pt-3 text-xs underline-offset-2 hover:underline"
          >
            <GitPullRequest size={20} className="mr-2 flex-shrink-0" />
            <span className="w-[90%] overflow-hidden text-ellipsis text-nowrap font-semibold">
              {defaultBranchRef?.target.history.edges[0].node.message}
            </span>
          </a>
        )}
        <div className="flex flex-col gap-1 text-xs text-secondary-foreground md:flex-row md:items-center md:gap-6">
          {defaultBranchRef?.target.history.edges.length && (
            <div className="flex items-center">
              <p>
                {getRelativeDate(
                  new Date(defaultBranchRef.target.history.edges[0].node.committedDate || 0),
                  true,
                )}{' '}
                ago
              </p>
              <GitMergeIcon size={18} className="mx-2" />
              <p>on main</p>
            </div>
          )}
          {homepageUrl && (
            <div>
              <a
                href={homepageUrl}
                className="group text-sm text-orange-200 underline-offset-2 hover:underline"
              >
                {homepageUrl.replace(/(^\w+:|^)\/\//, '')}
                <ArrowUpRight
                  size={16}
                  className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
