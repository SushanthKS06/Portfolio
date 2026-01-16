"use client";

import { motion } from "framer-motion";
import { FileDown, Code2, BarChart3, Server, Folder, FileCode } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const resumeTracks = [
    {
        title: "Software Engineering",
        description: "Backend, Full Stack, and General SDE roles.",
        icon: Code2,
        file: "/resume/SushanthKS_Resume_Microsoft_SE_Intern.pdf",
        color: "cyan",
    },
    {
        title: "Systems & Quant",
        description: "Low-latency systems, C++, and Quant Dev roles.",
        icon: Server,
        file: "/resume/KSSushanth_Resume_AphaGrep_Quant_Intern.pdf",
        color: "purple",
    },
    {
        title: "Data Science & ML",
        description: "Machine Learning, Data Engineering, and Analytics.",
        icon: BarChart3,
        file: "/resume/SushanthKS_Resume_Microsoft_DataScience_Intern (1).pdf",
        color: "green",
    },
];

const colorClasses = {
    cyan: {
        gradient: "from-cyan-500 to-blue-600",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        text: "text-cyan-500",
        hover: "hover:border-cyan-500/50 hover:bg-cyan-500/10",
        shadow: "shadow-cyan-500/25",
    },
    purple: {
        gradient: "from-purple-500 to-pink-600",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-500",
        hover: "hover:border-purple-500/50 hover:bg-purple-500/10",
        shadow: "shadow-purple-500/25",
    },
    green: {
        gradient: "from-emerald-500 to-green-600",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-500",
        hover: "hover:border-emerald-500/50 hover:bg-emerald-500/10",
        shadow: "shadow-emerald-500/25",
    },
};

export function ResumeSection() {
    return (
        <Section id="resumes" className="relative">
            {/* Grid Pattern */}
            <div className="grid-pattern" />

            <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-200/20 dark:bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <p className="font-mono text-sm text-muted-foreground">
                        <span className="text-[var(--neon-primary)]">$</span> ls ~/resumes/
                    </p>
                    <h2 className="section-title">
                        <span className="gradient-text">Specialized Resumes</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Tailored documents for different engineering tracks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resumeTracks.map((track, idx) => {
                        const colors = colorClasses[track.color as keyof typeof colorClasses];
                        return (
                            <motion.div
                                key={track.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-300">
                                    {/* File Explorer Header */}
                                    <div className="terminal-header">
                                        <div className="terminal-dot red" />
                                        <div className="terminal-dot yellow" />
                                        <div className="terminal-dot green" />
                                        <span className="terminal-title flex items-center gap-2">
                                            <Folder className="w-3 h-3" />
                                            resumes/
                                        </span>
                                    </div>

                                    <div className="p-8 space-y-6 text-center">
                                        {/* Icon */}
                                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg ${colors.shadow}`}>
                                            <track.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold">{track.title}</h3>
                                            <p className="text-sm text-muted-foreground">{track.description}</p>
                                        </div>

                                        {/* File Info */}
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.bg} ${colors.border} border font-mono text-xs`}>
                                            <FileCode className={`w-3 h-3 ${colors.text}`} />
                                            <span className="text-muted-foreground">resume_{track.color}.pdf</span>
                                        </div>

                                        {/* Download Button */}
                                        <Button
                                            className={`w-full rounded-xl bg-foreground/5 text-foreground border border-border/50 ${colors.hover} transition-all duration-300`}
                                            variant="outline"
                                            asChild
                                        >
                                            <a href={track.file} download className="flex items-center justify-center gap-2">
                                                <FileDown className="h-4 w-4" />
                                                <span>Download PDF</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </Section>
    );
}
