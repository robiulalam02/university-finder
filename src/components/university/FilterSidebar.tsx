"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { BookOpen, DollarSign, Globe2, Trophy, GraduationCap, Briefcase, MapIcon } from "lucide-react";

export default function FilterSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        params.delete("page");

        startTransition(() => {
            router.push(`?${params.toString()}`, { scroll: false });
        });
    };

    return (
        <aside className="w-full space-y-8 lg:w-64 bg-white p-4 rounded-2xl shadow border border-slate-50">
            <div className="relative">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">Refine Search</h4>
                <div className={`mt-2 h-1 w-10 bg-blue-600 rounded-full transition-all duration-500 ${isPending ? 'w-full opacity-50' : ''}`} />
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <BookOpen className="h-4 w-4 text-blue-500" /> Search Courses
                </label>
                <input
                    type="text"
                    placeholder="e.g. Computer Science"
                    defaultValue={searchParams.get("course") || ""}
                    onChange={(e) => handleFilterChange("course", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <DollarSign className="h-4 w-4 text-emerald-500" /> Max Tuition
                    </label>
                    <span className="text-xs font-bold text-blue-600">
                        ${Number(searchParams.get("maxFee") || "60000").toLocaleString()}
                    </span>
                </div>
                <input
                    type="range"
                    min="10000"
                    max="60000"
                    step="5000"
                    defaultValue={searchParams.get("maxFee") || "60000"}
                    onChange={(e) => handleFilterChange("maxFee", e.target.value)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>$10k</span>
                    <span>$60k+</span>
                </div>
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Globe2 className="h-4 w-4 text-indigo-500" /> Country
                </label>
                <select
                    onChange={(e) => handleFilterChange("country", e.target.value)}
                    defaultValue={searchParams.get("country") || ""}
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none cursor-pointer"
                >
                    <option value="">All Regions</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                </select>
            </div>

            <div className="space-y-3 border-t border-slate-100">

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-700">Work Permit Support</span>
                            <span className="text-[10px] text-blue-600">High Success Rate</span>
                        </div>
                        <input
                            type="checkbox"
                            checked={searchParams.get("workPermit") === "true"}
                            onChange={(e) => handleFilterChange("workPermit", e.target.checked ? "true" : "")}
                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold text-slate-700">
                            <MapIcon className="h-3 w-3" /> Campus Setting
                        </label>
                        <select
                            onChange={(e) => handleFilterChange("setting", e.target.value)}
                            defaultValue={searchParams.get("setting") || ""}
                            className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-bold outline-none focus:border-blue-500"
                        >
                            <option value="">Any Setting</option>
                            <option value="Metropolitan">Metropolitan (Max Jobs)</option>
                            <option value="Suburban">Suburban (Balanced)</option>
                            <option value="Town">Quiet Town (Low Cost)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Trophy className="h-4 w-4 text-amber-500" /> Max World Rank
                </label>
                <div className="relative">
                    <input
                        type="number"
                        placeholder="e.g. 500"
                        defaultValue={searchParams.get("minRanking") || ""}
                        onChange={(e) => handleFilterChange("minRanking", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-3 pl-10 text-sm outline-none focus:border-blue-500"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">#</span>
                </div>
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <GraduationCap className="h-4 w-4 text-purple-500" /> IELTS Score
                </label>
                <div className="grid grid-cols-3 gap-2">
                    {['6.0', '6.5', '7.0'].map((score) => (
                        <button
                            aria-label={`Select IELTS score ${score}`}
                            key={score}
                            onClick={() => handleFilterChange("ielts", score)}
                            className={`rounded-xl cursor-pointer py-2.5 text-xs font-bold border transition-all active:scale-95 ${searchParams.get("ielts") === score
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                                }`}
                        >
                            {score}
                        </button>
                    ))}
                </div>
            </div>

            <button
                onClick={() => router.push('/universities')}
                className="w-full py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors border-t border-slate-100 mt-4"
            >
                Clear All Filters
            </button>
        </aside>
    );
}