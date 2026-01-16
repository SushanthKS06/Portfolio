"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Open Source", href: "#open-source" },
    { name: "Resumes", href: "#resumes" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Indicator */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 origin-left z-[60]"
            />

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "fixed top-0.5 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-3" : "py-5"
                )}
            >
                <div className="container flex items-center justify-center">
                    <nav className={cn(
                        "flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300",
                        isScrolled
                            ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5 dark:shadow-cyan-500/5"
                            : "bg-background/30 backdrop-blur-sm border border-transparent"
                    )}>
                        {/* Logo/Brand */}
                        <a href="#" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-foreground hover:text-[var(--neon-primary)] transition-colors">
                            <Terminal className="w-4 h-4 text-[var(--neon-primary)]" />
                            <span className="font-mono">SKS</span>
                        </a>

                        <div className="hidden md:block w-px h-6 bg-border mx-1" />

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full transition-all duration-200 hover:bg-[var(--neon-primary)]/10"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:block w-px h-6 bg-border mx-1" />

                        {/* Theme Toggle */}
                        <div className="mx-2">
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-[var(--neon-primary)]/10 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[var(--neon-primary)]/10"
                                >
                                    <span className="text-[var(--neon-primary)] mr-2">›</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.header>
        </>
    );
}
