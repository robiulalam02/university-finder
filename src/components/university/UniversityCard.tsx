"use client";

import { University } from "@/src/types";
import { useCompare } from "@/src/context/CompareContext";
import { MapPin, Check, Plus, ArrowUpRight, GraduationCap, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UniversityCard({ university }: { university: University }) {
    const { selectedUnis, toggleComparison } = useCompare();
    const isSelected = selectedUnis.some((u) => u.id === university.id);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-6 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* Decorative Background Gradient */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50/50 blur-3xl transition-colors group-hover:bg-blue-100/50" />

            {/* Header: Logo & Badge */}
            <div className="relative flex items-center justify-between gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-inner">
                    <img
                        src={university.logo}
                        alt={university.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold tracking-wider text-white">
                        <Globe2 className="h-3 w-3" />
                        RANK #{university.ranking}
                    </div>
                    {university.hasScholarship && (
                        <motion.span
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-[10px] font-black uppercase tracking-widest text-emerald-500"
                        >
                            • Scholarship
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Title & Info */}
            <div className="relative mt-6 flex-1">
                <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                    {university.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-sm font-medium text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-blue-500" />
                    {university.city}, {university.country}
                </div>
            </div>

            {/* Modern Stats Bento-Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50/80 p-3 transition-colors group-hover:bg-blue-50/30">
                    <p className="text-[10px] font-bold uppercase tracking-tight text-slate-400">IELTS Score</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-700">{university.ieltsScore}+ Req.</p>
                </div>
                <div className="rounded-2xl bg-slate-50/80 p-3 transition-colors group-hover:bg-blue-50/30">
                    <p className="text-[10px] font-bold uppercase tracking-tight text-slate-400">Founded</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-700">{university.establishedYear}</p>
                </div>
            </div>

            {/* Footer: Pricing & Dynamic Actions */}
            <div className="mt-8 pt-6 border-t border-dashed border-slate-100">
                <div className="flex items-end justify-between mb-5">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Est. Tuition</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-slate-900">${university.tuitionFee.toLocaleString()}</span>
                            <span className="text-xs font-semibold text-slate-400">/year</span>
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ rotate: 45 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400"
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-[2] relative overflow-hidden rounded-xl bg-slate-900 py-3 text-xs font-bold tracking-widest text-white transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95">
                        ENROLL NOW
                    </button>

                    <button
                        onClick={() => toggleComparison(university)}
                        className={`flex-1 relative flex items-center justify-center gap-2 rounded-xl border text-[10px] font-black tracking-widest transition-all active:scale-90 ${isSelected
                            ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                            : "border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600"
                            }`}
                    >
                        <AnimatePresence mode="wait">
                            {isSelected ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                >
                                    <Check className="h-4 w-4" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="plus"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                >
                                    <Plus className="h-4 w-4" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {isSelected ? "ADDED" : "COMPARE"}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}