"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, GitFork, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GitHubRepo } from "@/types";

interface GithubSectionProps {
    repos: GitHubRepo[];
}

export function GithubSection({ repos }: GithubSectionProps) {
    if (!repos.length) return null;

    return (
        <Section id="open-source" className="relative">
            {/* Grid Pattern */}
            <div className="grid-pattern" />

            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 dark:bg-green-500/5 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                    <div className="space-y-4">
                        <p className="font-mono text-sm text-muted-foreground">
                            <span className="text-[var(--neon-primary)]">$</span> gh repo list --public
                        </p>
                        <h2 className="section-title">
                            <span className="gradient-text">Open Source</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
                        <p className="text-muted-foreground text-lg">
                            Recent activity from GitHub.
                        </p>
                    </div>
                    <a
                        href="https://github.com/SushanthKS06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-medium text-[var(--neon-primary)] hover:text-[var(--neon-secondary)] transition-colors font-mono"
                    >
                        <span>View all repositories</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, idx) => (
                        <motion.a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block group"
                        >
                            <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-300">
                                {/* Terminal Header */}
                                <div className="terminal-header">
                                    <div className="terminal-dot red" />
                                    <div className="terminal-dot yellow" />
                                    <div className="terminal-dot green" />
                                    <span className="terminal-title">{repo.name}</span>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <span className="text-xs font-mono text-[var(--neon-tertiary)] bg-[var(--neon-tertiary)]/10 px-2 py-1 rounded-md border border-[var(--neon-tertiary)]/20">
                                            {repo.language || "Unknown"}
                                        </span>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                                                <span>{repo.stars}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <GitFork className="h-4 w-4" />
                                                <span>{repo.forks || 0}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--neon-primary)] transition-colors">
                                        {repo.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {repo.description || "No description available"}
                                    </p>

                                    {/* Activity Indicator */}
                                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pt-2">
                                        <Activity className="w-3 h-3 text-[var(--neon-primary)]" />
                                        <span>Active</span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
