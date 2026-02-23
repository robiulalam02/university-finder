"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Search, Globe, Sparkles } from "lucide-react";
import bgImg from '@/src/assets/campus.jpg'

export default function Home() {
    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-900">
            {/* Hero Section with Cinematic Background */}
            <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <Image
                        src={bgImg}
                        alt="University Campus"
                        fill // Tells Next.js to fill the parent container
                        priority // Preloads the image for better LCP (Performance)
                        className="object-cover"
                        quality={90}
                    />
                    {/* Professional Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-white" />
                </div>

                <main className="relative z-10 flex flex-col items-center px-6 text-center lg:px-8">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold tracking-widest text-white"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                        TRUSTED BY 145,000+ STUDENTS
                    </motion.div>

                    {/* Hero Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl"
                    >
                        Your Journey to Global <br />
                        <span className="text-blue-400">Education Starts Here.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl"
                    >
                        Navigate the complexities of international admissions with our next-generation
                        University Finder. Find the perfect match based on your budget, ranking, and goals.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
                    >
                        <Link
                            href="/universities"
                            className="group flex h-14 items-center gap-3 rounded-2xl bg-blue-600 px-8 text-sm font-bold tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
                        >
                            <Search className="h-4 w-4" />
                            FIND UNIVERSITIES
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <button className="flex h-14 items-center gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-8 text-sm font-bold tracking-widest text-white transition-all hover:bg-white/20">
                            <Globe className="h-4 w-4" />
                            BROWSE COUNTRIES
                        </button>
                    </motion.div>
                </main>
            </section>

            {/* Trust & Features Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 gap-12 sm:grid-cols-3"
                >
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 shadow-inner">
                            <GraduationCap className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">150+ Partners</h3>
                            <p className="mt-1 text-sm text-slate-500">World-class institutions globally</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 text-indigo-600 shadow-inner">
                            <Sparkles className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Expert Guidance</h3>
                            <p className="mt-1 text-sm text-slate-500">Certified educational counselors</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 shadow-inner">
                            <Globe className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">99% Visa Success</h3>
                            <p className="mt-1 text-sm text-slate-500">Best-in-class processing speed</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <footer className="py-12 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-t border-slate-100">
                © 2026 Shabuj Global Education | Official Partner of British Council
            </footer>
        </div>
    );
}