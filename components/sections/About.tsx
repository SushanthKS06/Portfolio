"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { User, MapPin, Mail, Briefcase } from "lucide-react";

export function About() {
    return (
        <Section id="about" className="relative overflow-hidden">
            {/* Grid Pattern */}
            <div className="grid-pattern" />

            {/* Subtle Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-transparent dark:from-cyan-950/10 dark:to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-10"
            >
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <p className="font-mono text-sm text-muted-foreground">
                        <span className="text-[var(--neon-primary)]">$</span> cat ~/about.md
                    </p>
                    <h2 className="section-title">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto" />
                </div>

                {/* Terminal Style About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="terminal-window"
                >
                    <div className="terminal-header">
                        <div className="terminal-dot red" />
                        <div className="terminal-dot yellow" />
                        <div className="terminal-dot green" />
                        <span className="terminal-title">sushanth.config.json</span>
                    </div>
                    <div className="terminal-body">
                        <pre className="text-sm md:text-base">
                            <code>
                                <span className="text-slate-500">{"{"}</span>{"\n"}
                                <span className="text-slate-500">  </span>
                                <span className="text-[#c792ea]">&quot;name&quot;</span>
                                <span className="text-slate-400">: </span>
                                <span className="text-[#c3e88d]">&quot;{profile.name}&quot;</span>
                                <span className="text-slate-400">,</span>{"\n"}
                                <span className="text-slate-500">  </span>
                                <span className="text-[#c792ea]">&quot;role&quot;</span>
                                <span className="text-slate-400">: </span>
                                <span className="text-[#c3e88d]">&quot;{profile.headline}&quot;</span>
                                <span className="text-slate-400">,</span>{"\n"}
                                <span className="text-slate-500">  </span>
                                <span className="text-[#c792ea]">&quot;location&quot;</span>
                                <span className="text-slate-400">: </span>
                                <span className="text-[#c3e88d]">&quot;{profile.location}&quot;</span>
                                <span className="text-slate-400">,</span>{"\n"}
                                <span className="text-slate-500">  </span>
                                <span className="text-[#c792ea]">&quot;contact&quot;</span>
                                <span className="text-slate-400">: </span>
                                <span className="text-[#c3e88d]">&quot;{profile.email}&quot;</span>
                                <span className="text-slate-400">,</span>{"\n"}
                                <span className="text-slate-500">  </span>
                                <span className="text-[#c792ea]">&quot;status&quot;</span>
                                <span className="text-slate-400">: </span>
                                <span className="text-[#00ff88]">&quot;AVAILABLE&quot;</span>{"\n"}
                                <span className="text-slate-500">{"}"}</span>
                            </code>
                        </pre>
                    </div>
                </motion.div>

                {/* Info Cards Grid */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: User, label: "Engineer", value: profile.headline.split(" ")[0] },
                        { icon: MapPin, label: "Location", value: profile.location },
                        { icon: Mail, label: "Contact", value: "Available" },
                        { icon: Briefcase, label: "Status", value: "Open to Work" },
                    ].map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx, duration: 0.4 }}
                            className="glass-card rounded-xl p-4 text-center space-y-2"
                        >
                            <div className="inline-flex p-2 rounded-lg bg-[var(--neon-primary)]/10">
                                <item.icon className="w-5 h-5 text-[var(--neon-primary)]" />
                            </div>
                            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                            <p className="font-semibold text-foreground">{item.value}</p>
                        </motion.div>
                    ))}
                </div> */}

                {/* Bio Paragraphs */}
                <div className="space-y-6">
                    {profile.about.map((paragraph, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card rounded-xl p-6"
                        >
                            <div className="flex items-start gap-4">
                                <span className="font-mono text-[var(--neon-primary)] text-sm mt-1 shrink-0">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {paragraph}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
