"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/data/profile";
import { Code2, Database, Brain, Layers, Settings, BarChart3 } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
    "Systems & Backend": Code2,
    "Quantitative & Analytics": BarChart3,
    "Data Engineering": Database,
    "AI / ML / GenAI": Brain,
    "Frontend & Product": Layers,
    "Infrastructure & DevOps": Settings,
};

export function Skills() {
    return (
        <Section id="skills" className="relative">
            {/* Grid Pattern */}
            <div className="grid-pattern" />

            {/* Background Decoration */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl -z-10" />

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
                        <span className="text-[var(--neon-primary)]">$</span> skills --list --verbose
                    </p>
                    <h2 className="section-title">
                        <span className="gradient-text">Technical Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Production-grade proficiency across full stack, with specialized depth in distributed systems and data engineering.
                    </p>
                </div>

                <Tabs defaultValue={skillCategories[0].category} className="w-full">
                    <div className="flex justify-center mb-10">
                        <TabsList className="h-auto flex-wrap gap-2 bg-muted/30 dark:bg-muted/20 backdrop-blur-sm p-2 rounded-2xl border border-border/50">
                            {skillCategories.map((category) => {
                                const Icon = categoryIcons[category.category] || Code2;
                                return (
                                    <TabsTrigger
                                        key={category.category}
                                        value={category.category}
                                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{category.category}</span>
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                    {skillCategories.map((category) => {
                        const Icon = categoryIcons[category.category] || Code2;
                        return (
                            <TabsContent key={category.category} value={category.category}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="glass-card rounded-2xl overflow-hidden"
                                >
                                    {/* Terminal Header */}
                                    <div className="terminal-header">
                                        <div className="terminal-dot red" />
                                        <div className="terminal-dot yellow" />
                                        <div className="terminal-dot green" />
                                        <span className="terminal-title font-mono">
                                            skills/{category.category.toLowerCase().replace(/[^a-z]/g, '-')}.json
                                        </span>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-[var(--neon-primary)]/20">
                                                <Icon className="w-6 h-6 text-[var(--neon-primary)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                                                <p className="text-sm text-muted-foreground font-mono">
                                                    {category.skills.length} technologies loaded
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {category.skills.map((skill, idx) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="skill-badge"
                                                    >
                                                        <span className="text-[var(--neon-primary)]">▸</span>
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Skill Count Footer */}
                                        <div className="mt-8 pt-6 border-t border-border/50">
                                            <div className="flex items-center justify-between text-sm font-mono text-muted-foreground">
                                                <span>
                                                    <span className="text-[var(--neon-tertiary)]">✓</span> All skills loaded successfully
                                                </span>
                                                <span>
                                                    Total: <span className="text-[var(--neon-primary)]">{category.skills.length}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </motion.div>
        </Section>
    );
}
