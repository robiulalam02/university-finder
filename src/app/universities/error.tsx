"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("University Search Error:", error);
    }, [error]);

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative mb-8"
            >
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 animate-pulse rounded-full bg-red-100 blur-3xl" />
                <div className="relative rounded-full bg-white p-6 shadow-xl border border-red-50">
                    <AlertCircle className="h-16 w-16 text-red-500" />
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-md"
            >
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Oops! Something <span className="text-red-500">drifted</span> off course.
                </h1>
                <p className="mt-4 text-lg text-slate-500">
                    We couldn't load the university data right now. It might be a brief
                    connection issue or a glitch in the matrix.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
                <button
                    onClick={() => reset()}
                    className="group flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-blue-600 active:scale-95"
                >
                    <RefreshCcw className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    TRY AGAIN
                </button>

                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold tracking-widest text-slate-600 transition-all hover:border-slate-900 hover:text-slate-900"
                >
                    <Home className="h-4 w-4" />
                    BACK HOME
                </Link>
            </motion.div>

            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-slate-300">
                Error Code: {error.digest || "FETCH_FAILURE"}
            </p>
        </div>
    );
}