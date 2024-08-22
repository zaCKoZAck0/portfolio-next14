type ContributionDay = {
    color: string;
    contributionCount: number;
    date: string;
    weekday: number;
};

export type ContributionCalendar = {
    colors: string[];
    totalContributions: number;
    weeks: { contributionDays: ContributionDay[] }[];
    firstDay: string;
};

type ContributionsCollection = {
    contributionCalendar: ContributionCalendar;
};

type RepositoryNode = {
    nameWithOwner: string;
};

type TopRepositories = {
    nodes: RepositoryNode[];
};

type User = {
    name: string;
    issues: { totalCount: number };
    pullRequests: { totalCount: number };
    url: string;
    repositoriesContributedTo: { totalCount: number };
    topRepositories: TopRepositories;
    contributionsCollection: ContributionsCollection;
};

type Data = {
    user: User;
};