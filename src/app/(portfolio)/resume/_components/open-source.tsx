import { CircleDot, GitPullRequest } from 'lucide-react';
import { CommitGraph } from '~/components/commit-graph';
import { A, H3, H4 } from '~/components/typography';
import json from '../../../../../data/github-data.json';

export async function OpenSource() {
  const data = json.data;
  function getLastMonthCommits() {
    return data.user.contributionsCollection.contributionCalendar.weeks
      .slice(-4)
      .reduce((acc, week) => {
        return (
          acc +
          week.contributionDays.reduce((acc, day) => {
            return acc + day.contributionCount;
          }, 0)
        );
      }, 0);
  }
  return (
    <section>
      <table className="text-sm text-secondary-foreground md:text-lg">
        <tbody>
          <tr>
            <td className="text-muted-foreground md:pr-4">Total Repositories:</td>
            <td>Contributed to {data.user.repositoriesContributedTo.totalCount} Repos</td>
          </tr>
          <tr>
            <td className="text-muted-foreground md:pr-4">Top Repository:</td>
            <td>{data.user.topRepositories.nodes[0].nameWithOwner}</td>
          </tr>
          <tr>
            <td className="text-muted-foreground md:pr-4">PRs Merged:</td>
            <td className="flex items-center">
              {data.user.pullRequests.totalCount}
              <GitPullRequest className="ml-3 mr-1 inline-block size-4 text-orange-200 md:size-5" />
              Pull Requests
            </td>
          </tr>
          <tr>
            <td className="text-muted-foreground md:pr-4">Issues Open:</td>
            <td className="flex items-center">
              {data.user.issues.totalCount}
              <CircleDot className="ml-3 mr-1 inline-block size-4 text-orange-200 md:size-5" />
              Issues
            </td>
          </tr>
        </tbody>
      </table>
      <A href={data.user.url}>github.com/zaCKoZAck0</A>
      <H3 className="text-sm text-muted-foreground md:text-2xl">
        {getLastMonthCommits()} Github Contributions in the last Month
      </H3>
      <H4 className="mb-1 text-xs text-muted-foreground md:text-xl">
        {data.user.contributionsCollection.contributionCalendar.totalContributions} Github
        Contributions in the last Year (365 Days)
      </H4>
      <CommitGraph contributions={data.user.contributionsCollection.contributionCalendar.weeks} />
    </section>
  );
}
