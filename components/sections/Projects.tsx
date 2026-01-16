"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, GitBranch, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function Projects() {
    return (
        <Section id="projects" className="relative">
            {/* Grid Pattern */}
            <div className="grid-pattern" />

            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-200/20 dark:bg-purple-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-200/20 dark:bg-cyan-500/5 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-16"
            >
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <p className="font-mono text-sm text-muted-foreground">
                        <span className="text-[var(--neon-primary)]">$</span> ls -la ~/projects/
                    </p>
                    <h2 className="section-title">
                        <span className="gradient-text">Engineering Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        High-impact systems focusing on correctness, performance, and scalability.
                    </p>
                </div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="group glass-card rounded-2xl overflow-hidden transition-all duration-500 animated-border">
                                {/* Terminal Header */}
                                <div className="terminal-header border-b border-border/50">
                                    <div className="terminal-dot red" />
                                    <div className="terminal-dot yellow" />
                                    <div className="terminal-dot green" />
                                    <span className="terminal-title">
                                        {project.title.toLowerCase().replace(/\s+/g, '-')}.ts
                                    </span>
                                    {project.featured && index < 3 && (
                                        <Badge className="ml-auto bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 px-3 py-1 text-xs flex items-center gap-1">
                                            <Zap className="w-3 h-3" /> TOP PROJECT
                                        </Badge>
                                    )}
                                </div>

                                <div className="p-8 md:p-10">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                                        {/* Main Content */}
                                        <div className="flex-1 space-y-6">
                                            <div className="space-y-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-[var(--neon-primary)] transition-colors flex items-center gap-3">
                                                    <GitBranch className="w-6 h-6 text-[var(--neon-primary)]" />
                                                    {project.title}
                                                </h3>
                                                <p className="text-lg text-primary/80 font-medium">{project.description}</p>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-2">
                                                    <span className="text-[var(--neon-tertiary)]">▸</span>
                                                    Engineering Challenges
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.longDescription.map((desc, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-muted-foreground/90">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--neon-primary)] flex-shrink-0" />
                                                            <span className="leading-relaxed">{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.techStack.map((tech) => (
                                                    <Badge key={tech} variant="outline" className="font-mono text-xs px-3 py-1.5 bg-muted/30 border-border/50 hover:border-[var(--neon-primary)]/50 transition-colors">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Metrics Sidebar */}
                                        <div className="lg:w-72 mt-8 lg:mt-0 lg:border-l lg:border-border/50 lg:pl-10 space-y-6">
                                            <div className="space-y-4">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-2">
                                                    <Star className="w-3 h-3 text-amber-500" />
                                                    Key Metrics
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.metrics.map((metric, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <span className="text-[var(--neon-primary)] mt-0.5">›</span>
                                                            <span className="text-sm font-medium font-mono text-foreground/90">{metric}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex gap-3 pt-4">
                                                {project.githubUrl && (
                                                    <Button variant="outline" size="sm" className="flex-1 rounded-lg hover:bg-[var(--neon-primary)]/10 hover:border-[var(--neon-primary)]/50 transition-all" asChild>
                                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                            <Github className="h-4 w-4" /> Code
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.liveUrl && (
                                                    <Button size="sm" className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 border-0 hover:opacity-90 transition-all" asChild>
                                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4" /> Live
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer with file info */}
                                <div className="px-8 py-3 bg-muted/30 dark:bg-black/20 border-t border-border/50">
                                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[var(--neon-tertiary)]" />
                                            {project.techStack.length} dependencies
                                        </span>
                                        <span>
                                            {project.metrics.length} metrics tracked
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
