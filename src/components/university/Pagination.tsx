"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", pageNumber.toString());
        return `?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-200">
            <button
                onClick={() => router.push(createPageUrl(currentPage - 1))}
                disabled={currentPage <= 1}
                className="p-2 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => router.push(createPageUrl(i + 1))}
                        className={`h-10 w-10 rounded-lg text-sm font-bold transition-all ${currentPage === i + 1
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'hover:bg-slate-100 text-slate-600'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                onClick={() => router.push(createPageUrl(currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="p-2 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    );
}