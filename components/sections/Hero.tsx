"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, FileText, Terminal, Cpu, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { useEffect, useState } from "react";

const roles = [
    "Backend Engineer",
    "Systems Architect",
    "Data Engineer",
    "ML/AI Developer",
];

function TypingText({ texts }: { texts: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < currentText.length) {
                        setDisplayText(currentText.slice(0, displayText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(currentText.slice(0, displayText.length - 1));
                    } else {
                        setIsDeleting(false);
                        setCurrentIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts]);

    return (
        <span className="inline-flex items-baseline">
            <span className="gradient-text pb-2" style={{ lineHeight: 1.3 }}>{displayText}</span>
            <span className="typing-cursor" />
        </span>
    );
}

function FloatingIcon({ icon: Icon, delay, className }: { icon: React.ElementType; delay: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, type: "spring" }}
            className={`absolute ${className}`}
        >
            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay }}
                className="p-3 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 text-neon-primary dark:text-[var(--neon-primary)]"
            >
                <Icon className="w-6 h-6" />
            </motion.div>
        </motion.div>
    );
}

export function Hero() {
    return (
        <Section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="grid-pattern" />

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
                {/* Light Mode Gradients */}
                <div className="dark:hidden absolute top-20 right-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
                <div className="dark:hidden absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-3xl" />
                <div className="dark:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl" />

                {/* Dark Mode Gradients - Neon */}
                <div className="hidden dark:block absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="hidden dark:block absolute bottom-32 left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
                <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            {/* Floating Tech Icons */}
            <FloatingIcon icon={Terminal} delay={0.5} className="top-32 right-[15%] hidden lg:block" />
            <FloatingIcon icon={Cpu} delay={0.7} className="bottom-40 right-[25%] hidden lg:block" />
            <FloatingIcon icon={Braces} delay={0.9} className="top-48 left-[12%] hidden lg:block" />

            <div className="space-y-8 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="status-indicator status-available inline-flex">
                            <span className="status-dot" />
                            <span className="font-mono text-xs">OPEN_TO_WORK</span>
                        </div>
                    </motion.div>

                    {/* Name with Terminal Prefix */}
                    <div className="space-y-2">
                        <p className="font-mono text-sm text-muted-foreground">
                            <span className="text-[var(--neon-primary)]">$</span> whoami
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                            <span className="gradient-text">{profile.name}</span>
                        </h1>
                    </div>

                    {/* Typing Animation for Role */}
                    <div className="space-y-1">
                        <p className="font-mono text-sm text-muted-foreground">
                            <span className="text-[var(--neon-primary)]">$</span> echo $ROLE
                        </p>
                        <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90 tracking-tight font-mono">
                            <TypingText texts={roles} />
                        </h2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    className="terminal-window max-w-2xl"
                >
                    <div className="terminal-header">
                        <div className="terminal-dot red" />
                        <div className="terminal-dot yellow" />
                        <div className="terminal-dot green" />
                        <span className="terminal-title">about.sh</span>
                    </div>
                    <div className="terminal-body text-slate-300 dark:text-slate-400">
                        <p className="leading-relaxed">{profile.subHeadline}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    {/* Primary CTA */}
                    <Button
                        size="lg"
                        className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-0 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 glow-button"
                        asChild
                    >
                        <a href="#projects">
                            View Projects <ArrowRight className="h-5 w-5" />
                        </a>
                    </Button>
                    <div className="flex gap-3">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-6 text-base rounded-full border-2 border-border hover:border-[var(--neon-primary)] hover:bg-[var(--neon-primary)]/10 transition-all duration-300"
                            asChild
                        >
                            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" /> GitHub
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-6 text-base rounded-full border-2 border-border hover:border-[var(--neon-primary)] hover:bg-[var(--neon-primary)]/10 transition-all duration-300"
                            asChild
                        >
                            <a href="#resumes">
                                <FileText className="h-5 w-5" /> Resume
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-[var(--neon-primary)]/30 rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-[var(--neon-primary)] rounded-full"
                    />
                </motion.div>
            </motion.div>
        </Section>
    );
}
