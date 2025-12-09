import {
    ChevronLeft,
    ChevronRight,
    Loader2,
    Building2,
    MapPin,
    Filter,
} from "lucide-react";

// TODO: Implement advanced patterns
// import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
// import { useSearchParams } from 'next/navigation'

export const JobListAdvanced = () => {
    // TODO: Sync with URL
    // const searchParams = useSearchParams()
    // const page = Number(searchParams.get('page')) || 1

    const page: number = 1;
    const totalPages: number = 5;
    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "SF",
        },
        { id: "2", title: "React Engineer", company: "StartupXYZ", location: "Remote" },
        {
            id: "3",
            title: "Full Stack Developer",
            company: "Enterprise",
            location: "NYC",
        },
        { id: "4", title: "UI Engineer", company: "DesignCo", location: "LA" },
        { id: "5", title: "Frontend Architect", company: "BigTech", location: "Seattle" },
    ];

    const isLoading = false;
    const isFetching = false;
    const isPreviousData = false;

    // Pagination mode toggle
    const paginationMode: "offset" | "infinite" = "offset";

    return (
        <div>
            {/* Mode Toggle */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex rounded-lg border border-neutral-700 overflow-hidden">
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm ${
                            paginationMode === "offset"
                                ? "bg-amber-500 text-neutral-900"
                                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                        }`}
                    >
                        Offset Pagination
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm ${
                            paginationMode === "offset"
                                ? "bg-amber-500 text-neutral-900"
                                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                        }`}
                    >
                        Infinite Scroll
                    </button>
                </div>

                {isFetching && !isLoading && (
                    <span className="flex items-center gap-2 text-xs text-blue-400">
                        <Loader2 className="h-3 w-3 animate-spin" />
                        Background fetch...
                    </span>
                )}
            </div>

            {/* Filters (URL synced) */}
            <div className="flex flex-wrap items-center gap-3 mb-6 p-4 rounded-xl border border-neutral-800 bg-[#0f0f10]">
                <Filter className="h-4 w-4 text-neutral-500" />
                <select className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm">
                    <option>All Types</option>
                    <option>Full-time</option>
                    <option>Contract</option>
                </select>
                <select className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm">
                    <option>All Locations</option>
                    <option>Remote</option>
                    <option>San Francisco</option>
                </select>
                <span className="text-xs text-neutral-500 ml-auto">
                    URL: ?page={page}&type=all&location=all
                </span>
            </div>

            {/* Job List */}
            <div className={`space-y-3 ${isPreviousData ? "opacity-50" : ""}`}>
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="flex items-center justify-between rounded-xl border border-neutral-800 bg-[#0f0f10] p-5 hover:border-neutral-700 transition-colors"
                        // onMouseEnter={() => prefetchJobDetail(job.id)}
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-neutral-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">{job.title}</h3>
                                <div className="flex items-center gap-3 mt-1 text-sm text-neutral-400">
                                    <span>{job.company}</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400 transition-colors"
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>

            {/* Offset Pagination Controls */}
            {paginationMode === "offset" && (
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-800">
                    <button
                        type="button"
                        disabled={page === 1}
                        // onClick={() => setPage(p => p - 1)}
                        // onMouseEnter={() => prefetchPage(page - 1)}
                        className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </button>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((p) => (
                            <button
                                type="button"
                                key={p}
                                // onClick={() => setPage(p)}
                                className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                                    p === page
                                        ? "bg-amber-500 text-neutral-900"
                                        : "hover:bg-neutral-800 text-neutral-400"
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        disabled={page === totalPages}
                        // onClick={() => setPage(p => p + 1)}
                        // onMouseEnter={() => prefetchPage(page + 1)}
                        className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}

            {/* Infinite Scroll Controls */}
            {paginationMode === "offset" && (
                <div className="mt-6 text-center">
                    <button
                        type="button"
                        // onClick={() => fetchNextPage()}
                        // disabled={!hasNextPage || isFetchingNextPage}
                        className="rounded-lg border border-neutral-700 px-6 py-3 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                    >
                        {/* {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more jobs'} */}
                        Load More
                    </button>
                    <p className="text-xs text-neutral-500 mt-2">
                        Or scroll to bottom for auto-load
                    </p>
                </div>
            )}

            {/* Debug Panel */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Pagination Debug
                </h4>
                <div className="grid grid-cols-4 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Mode:</span>
                        <span className="ml-2 text-amber-400">{paginationMode}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Page:</span>
                        <span className="ml-2 text-blue-400">
                            {page} / {totalPages}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Previous Data:</span>
                        <span className="ml-2 text-neutral-400">
                            {String(isPreviousData)}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Prefetched:</span>
                        <span className="ml-2 text-emerald-400">[2, 3]</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
