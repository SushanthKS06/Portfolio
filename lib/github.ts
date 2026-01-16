import { Octokit } from "octokit";
import { GitHubRepo } from "@/types";

// Initialize Octokit (anonymous or with token if available in env)
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

export async function getPinnedRepos(username: string): Promise<GitHubRepo[]> {
    try {
        // Note: fetching pinned repos via public API is tricky without a specific endpoint or scraping.
        // Standard approach: fetch all repos, sort by stars or updated.
        // Or use the user's explicit list from profile/projects if we want specific ones.
        // For this portfolio, fetching top starred repos is a good proxy for "pinned" / "best".

        const { data } = await octokit.request("GET /users/{username}/repos", {
            username,
            sort: "pushed",
            per_page: 6,
            type: "owner",
        });

        return data.map((repo) => ({
            name: repo.name,
            description: repo.description || "",
            stars: repo.stargazers_count || 0,
            language: repo.language || "Plain Text",
            url: repo.html_url,
            updatedAt: repo.updated_at || new Date().toISOString(),
        }));
    } catch (error) {
        console.warn("GitHub API failed, using fallback/empty list", error);
        return [];
    }
}
