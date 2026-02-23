import { getFilteredUniversities } from "@/src/lib/filter-logic";
import FilterSidebar from "@/src/components/university/FilterSidebar";
import UniversityCard from "@/src/components/university/UniversityCard";
import Pagination from "@/src/components/university/Pagination";
import { FilterParams } from "@/src/types";
import { Search, GraduationCap, Sparkles } from "lucide-react";

export default async function UniversitiesPage({
  searchParams,
}: {
  searchParams: Promise<FilterParams>;
}) {
  const params = await searchParams;
  const { data, totalPages, totalResults, currentPage } = await getFilteredUniversities(params);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Cinematic Header Section */}
      <header className="relative h-60 w-full overflow-hidden flex items-center bg-slate-900">
        {/* Background Image - Modern University Architecture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
            alt="Global University Campus"
            className="h-full w-full object-cover opacity-50 mix-blend-luminosity"
          />
          {/* Gradient Overlay for professional contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-white tracking-tight sm:text-6xl">
                Find Your <span className="text-blue-400">Future</span>
              </h1>
              <p className="text-slate-300 text-base max-w-lg font-medium leading-relaxed">
                Discover world-class education. Filter through accredited universities
                across major global destinations tailored to your profile.
              </p>
            </div>

            <div className="text-sm font-medium text-slate-100 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              Showing {data.length} of {totalResults} results
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-8">
              <FilterSidebar />
            </div>
          </div>

          {/* Results Grid */}
          <div className="flex-1 space-y-12">
            {data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {data.map((uni) => (
                    <UniversityCard key={uni.id} university={uni} />
                  ))}
                </div>
                {/* Pagination Controls */}
                <div className="pt-8 border-t border-slate-200">
                  <Pagination currentPage={currentPage} totalPages={totalPages} />
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200 shadow-sm">
                <div className="h-20 w-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 rotate-3">
                  <Search className="h-10 w-10 text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Zero Matches Found</h3>
                <p className="text-slate-500 mt-3 max-w-sm text-center text-sm leading-relaxed">
                  We couldn't find universities matching these specific filters.
                  Try broadening your tuition range or checking "All Regions".
                </p>
                <button
                  onClick={() => window.location.href = '/universities'}
                  className="mt-8 px-8 py-3 bg-slate-900 text-white text-xs font-bold rounded-2xl hover:bg-blue-600 transition-colors"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}