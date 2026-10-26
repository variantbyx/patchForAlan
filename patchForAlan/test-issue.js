require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function fetchGitHubIssue(issueUrl) {
  const url = new URL(issueUrl);

  if (url.hostname !== "github.com") {
    throw new Error("Sirf github.com Issue URL allowed hai.");
  }

  const match = url.pathname.match(
    /^\/([^/]+)\/([^/]+)\/issues\/(\d+)\/?$/
  );

  if (!match) {
    throw new Error("Valid GitHub Issue URL do.");
  }

  const [, owner, repo, issueNumber] = match;

  const response = await octokit.issues.get({
    owner,
    repo,
    issue_number: Number(issueNumber),
  });

  return {
    owner,
    repo,
    issueNumber: Number(issueNumber),
    title: response.data.title,
    body: response.data.body || "",
    state: response.data.state,
  };
}

async function main() {
  const issueUrl =
    process.env.ISSUE_URL ||
    "https://github.com/variantbyx/patchForAlan/issues/3";

  console.log("Fetching issue from:", issueUrl);
  const issue = await fetchGitHubIssue(issueUrl);

  console.log("Title:", issue.title);
  console.log("Description:", issue.body);
  console.log("Issue number:", issue.issueNumber);
  console.log("Owner/Repo:", `${issue.owner}/${issue.repo}`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { fetchGitHubIssue };
