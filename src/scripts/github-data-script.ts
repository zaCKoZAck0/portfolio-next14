import dotenv from 'dotenv';
import fs from 'fs';
import fetch from 'node-fetch';
import { Data } from '~/types/github-data';

dotenv.config();

const username: string = 'zaCKoZAck0';
const id: string = 'MDQ6VXNlcjY5ODg5Mzgy';
const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

if (!token) {
  throw new Error('GitHub Personal Access Token is not defined in the environment variables.');
}

interface GitHubResponse {
  data: Data;
}

async function init(): Promise<void> {
  const headers: HeadersInit = {
    Authorization: `bearer ${token}`,
  };

  const body = {
    query: `{
      user(login: "${username}") {
        name
        issues {
          totalCount
        }
        pullRequests {
          totalCount
        }
        url
        repositoriesContributedTo {
          totalCount
        }
        topRepositories(orderBy: { field: STARGAZERS, direction: DESC }, first: 100) {
          nodes {
            nameWithOwner
            description
            stargazerCount
            forkCount
            url
            owner {
              avatarUrl
            }
            homepageUrl
            primaryLanguage {
              name
              color
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 1, author: { id: "${id}" }) {
                    edges {
                      node {
                        committedDate
                        message
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            months {
              totalWeeks
              firstDay
            }
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
              firstDay
            }
          }
        }
      }
    }`,
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
    });

    const data = (await response.json()) as GitHubResponse;
    fs.writeFileSync('data/github-data.json', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error fetching data from GitHub:', error);
  }
}

init();

export default init;
