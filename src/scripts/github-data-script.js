const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const username = 'zaCKoZAck0';
const token  = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
function init(){
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
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
    topRepositories(orderBy: {
      field: STARGAZERS
      direction: DESC
    }, first: 1) {
      nodes {
        nameWithOwner
      }
    }
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
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
          }`
    }
    const response = fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    response.then(res => res.json()).then(data => {
        fs.writeFileSync('data/github-data.json', JSON.stringify(data, null, 2));
    })
}

init();

module.exports = init;