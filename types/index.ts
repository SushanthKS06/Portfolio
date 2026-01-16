export interface Project {
    title: string;
    description: string;
    longDescription: string[]; // Bullet points for "Why it was hard", "Tradeoffs", etc.
    techStack: string[];
    metrics: string[]; // "10K+ events/sec", "p95 latency reduced by 38%"
    githubUrl?: string;
    liveUrl?: string; // Optional
    featured: boolean;
    priority: number; // 1-10 sorting
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface Profile {
    name: string;
    headline: string;
    subHeadline: string;
    location: string;
    email: string;
    social: {
        github: string;
        linkedin: string;
        twitter?: string;
    };
    about: string[];
}

export interface GitHubRepo {
    name: string;
    description: string;
    stars: number;
    forks?: number;
    language: string;
    url: string;
    updatedAt: string;
}
