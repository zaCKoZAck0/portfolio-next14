const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const username = 'zaCKoZAck0';
const id = 'MDQ6VXNlcjY5ODg5Mzgy';
const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
function init() {
  const headers = {
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
  const response = fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });
  response
    .then((res) => res.json())
    .then((data) => {
      fs.writeFileSync('data/github-data.json', JSON.stringify(data, null, 2));
    });
}

init();

module.exports = init;
