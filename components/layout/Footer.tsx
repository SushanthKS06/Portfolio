"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-border/50 bg-muted/30 dark:bg-background">
            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-50" />

            <div className="container relative py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="p-2 rounded-lg bg-[var(--neon-primary)]/10 border border-[var(--neon-primary)]/20">
                            <Terminal className="w-5 h-5 text-[var(--neon-primary)]" />
                        </div>
                        <div className="font-mono text-sm">
                            <span className="text-muted-foreground">$ </span>
                            <span className="text-foreground">{profile.name}</span>
                            <span className="text-[var(--neon-tertiary)]"> ✓</span>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4"
                    >
                        {[
                            { icon: Github, href: profile.social.github, label: "GitHub" },
                            { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
                            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.label !== "Email" ? "_blank" : undefined}
                                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                                className="p-2 rounded-lg text-muted-foreground hover:text-[var(--neon-primary)] hover:bg-[var(--neon-primary)]/10 transition-all duration-200"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground font-mono"
                    >
                        <span>© {currentYear}</span>
                        <span className="text-border">|</span>
                        <span className="flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </span>
                    </motion.div>
                </div>

                {/* Terminal-style footer message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 pt-6 border-t border-border/50 text-center"
                >
                    <p className="font-mono text-xs text-muted-foreground/60">
                        <span className="text-[var(--neon-primary)]">[SYSTEM]</span> All systems operational •
                        <span className="text-[var(--neon-tertiary)]"> Response time: optimal</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
