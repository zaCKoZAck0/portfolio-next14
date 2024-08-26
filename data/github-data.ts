export type ContributionDay = {
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

export type ContributionsCollection = {
    contributionCalendar: ContributionCalendar;
};

export type RepositoryNode = {
    nameWithOwner: string;
};

export type TopRepositories = {
    nodes: RepositoryNode[];
};

export type User = {
    name: string;
    issues: { totalCount: number };
    pullRequests: { totalCount: number };
    url: string;
    repositoriesContributedTo: { totalCount: number };
    topRepositories: TopRepositories;
    contributionsCollection: ContributionsCollection;
};

export type Data = {
    user: User;
};

export type GithubData = {
    data: Data;
};