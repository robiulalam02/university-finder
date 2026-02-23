"use client";
import { useCompare } from "@/src/context/CompareContext";
import { X, Scale, Trophy, DollarSign, Calendar, ShieldCheck } from "lucide-react";

export default function CompareModal() {
    const { selectedUnis, clearComparison } = useCompare();

    // Only show the modal when 2 universities are selected
    if (selectedUnis.length < 2) return null;

    const [uni1, uni2] = selectedUnis;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4">
            <div className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Scale className="text-white h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Compare Institutions</h2>
                    </div>
                    <button onClick={clearComparison} className="p-2 hover:bg-slate-200 rounded-full transition-all">
                        <X className="h-6 w-6 text-slate-500" />
                    </button>
                </div>

                {/* Comparison Content */}
                <div className="p-8 grid grid-cols-3 gap-4 lg:gap-12">

                    {/* Column 1: Labels */}
                    <div className="space-y-10 pt-32 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Trophy className="h-4 w-4" /> World Ranking</div>
                        <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> Annual Tuition</div>
                        <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> IELTS Required</div>
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Est. Year</div>
                        <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-500" /> Work Permit</div>
                    </div>

                    {/* Column 2: University A */}
                    <div className="text-center space-y-10 group">
                        <div className="h-28 flex flex-col items-center justify-center">
                            <img src={uni1.logo} alt={uni1.name} className="h-16 w-16 object-contain mb-3 grayscale group-hover:grayscale-0 transition-all" />
                            <h3 className="font-bold text-slate-900 line-clamp-1">{uni1.name}</h3>
                        </div>
                        <div className="text-xl font-black text-blue-600">#{uni1.ranking}</div>
                        <div className="text-xl font-bold text-slate-800">${uni1.tuitionFee.toLocaleString()}</div>
                        <div className="text-xl font-bold text-slate-800">{uni1.ieltsScore}</div>
                        <div className="text-xl font-bold text-slate-800">{uni1.establishedYear}</div>
                        <div className="text-xl font-bold text-emerald-600">{uni1.workPermit ? "Available" : "N/A"}</div>
                    </div>

                    {/* Column 3: University B */}
                    <div className="text-center space-y-10 group">
                        <div className="h-28 flex flex-col items-center justify-center">
                            <img src={uni2.logo} alt={uni2.name} className="h-16 w-16 object-contain mb-3 grayscale group-hover:grayscale-0 transition-all" />
                            <h3 className="font-bold text-slate-900 line-clamp-1">{uni2.name}</h3>
                        </div>
                        <div className="text-xl font-black text-blue-600">#{uni2.ranking}</div>
                        <div className="text-xl font-bold text-slate-800">${uni2.tuitionFee.toLocaleString()}</div>
                        <div className="text-xl font-bold text-slate-800">{uni2.ieltsScore}</div>
                        <div className="text-xl font-bold text-slate-800">{uni2.establishedYear}</div>
                        <div className="text-xl font-bold text-emerald-600">{uni2.workPermit ? "Available" : "N/A"}</div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 bg-slate-50 text-center">
                    <button onClick={clearComparison} className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4">
                        Reset Comparison and Close
                    </button>
                </div>
            </div>
        </div>
    );
}