import { CircleDot, GitPullRequest } from "lucide-react";
import { CommitGraph } from "~/components/commit-graph";
import { H3, H4, P } from "~/components/typography";
import {data} from '~/data/github-data.json';

export function OpenSource() {
    function getLastMonthCommits(){
        return data.user.contributionsCollection.contributionCalendar.weeks.slice(-4).reduce((acc, week) => {
            return acc + week.contributionDays.reduce((acc, day) => {
                return acc + day.contributionCount;
            }, 0);
        }, 0);
    }
    return <section>
        <table className="text-lg">
            <tr>
                <td className="text-muted-foreground pr-4">
                    Total Repositories:
                </td>
                <td className="font-semibold">
                    Contributed to {data.user.repositoriesContributedTo.totalCount} Repos
                </td>
            </tr>
            <tr>
                <td className="text-muted-foreground pr-4">
                    Top Repository:
                </td>
                <td className="font-semibold">
                    {data.user.topRepositories.nodes[0].nameWithOwner}
                </td>
            </tr>
            <tr>
                <td className="text-muted-foreground pr-4">
                    PRs Merged:
                </td>
                <td className="font-semibold flex items-center">
                    {data.user.pullRequests.totalCount} 
                    <GitPullRequest className="inline-block ml-1 text-orange-200 size-5" />
                </td>
            </tr>
            <tr>
                <td className="text-muted-foreground pr-4">
                    Issues Open:
                </td>
                <td className="font-semibold flex items-center">
                    {data.user.issues.totalCount}
                    <CircleDot className="inline-block ml-1 text-orange-200 size-5" />
                </td>
            </tr>
        </table>
        <p className="mt-2">github.com/zaCKoZAck0</p>
        <H3 className="text-muted-foreground">
            {getLastMonthCommits()} Github Contribution(s) in the last Month
        </H3>
        <H4 className="text-muted-foreground mb-1">
            {data.user.contributionsCollection.contributionCalendar.totalContributions} Github Contribution(s) in the last Year (365 Days)
        </H4>
            <CommitGraph contributions={data.user.contributionsCollection.contributionCalendar.weeks} />
        </section>
}