"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function Contact() {
    return (
        <Section id="contact" className="relative min-h-[60vh] flex flex-col justify-center">
            {/* Grid Pattern */}
            <div className="grid-pattern" />

            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-sky-200/30 dark:from-cyan-500/5 to-transparent rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-10 max-w-3xl mx-auto"
            >
                {/* Terminal-style Header */}
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--neon-primary)]/10 border border-[var(--neon-primary)]/20 font-mono text-sm text-[var(--neon-primary)]"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>connection.establish()</span>
                    </motion.div>

                    <p className="font-mono text-sm text-muted-foreground">
                        <span className="text-[var(--neon-primary)]">$</span> contact --connect
                    </p>

                    <h2 className="section-title">
                        <span className="gradient-text">Let&apos;s Build Something Great</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto" />
                    <p className="text-muted-foreground text-lg md:text-xl">
                        I&apos;m open to opportunities in Backend Engineering, Distributed Systems, and Platform Infrastructure.
                    </p>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        className="h-14 px-10 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-0 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 glow-button"
                        asChild
                    >
                        <a href={`mailto:${profile.email}`} className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            <span>Get in Touch</span>
                        </a>
                    </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex justify-center gap-4 pt-4"
                >
                    {[
                        { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
                        { icon: Github, href: profile.social.github, label: "GitHub" },
                        { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                    ].map((social, idx) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target={social.label !== "Email" ? "_blank" : undefined}
                            rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative p-4 rounded-2xl bg-muted/50 dark:bg-muted/30 border border-border/50 hover:border-[var(--neon-primary)]/50 hover:bg-[var(--neon-primary)]/10 transition-all duration-300"
                        >
                            <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-[var(--neon-primary)] transition-colors" />

                            {/* Pulse effect on hover */}
                            <span className="absolute inset-0 rounded-2xl group-hover:animate-ping group-hover:bg-[var(--neon-primary)]/10 pointer-events-none" style={{ animationDuration: '1s', animationIterationCount: 1 }} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground"
                >
                    <Zap className="w-4 h-4 text-[var(--neon-tertiary)]" />
                    <span>Response time: </span>
                    <span className="text-[var(--neon-tertiary)]">&lt; 24 hours</span>
                </motion.div>
            </motion.div>
        </Section>
    );
}
