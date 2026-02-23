export default function Loading() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-64 space-y-8 animate-pulse">
                    <div className="h-8 w-32 bg-slate-200 rounded" />
                    <div className="h-48 bg-slate-200 rounded-xl" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-72 w-full bg-slate-100 animate-pulse rounded-2xl" />
                    ))}
                </div>
            </div>
        </div>
    );
}