import { ArrowLeft } from "lucide-react";
import { JobListAdvanced } from "./components/job-list-advanced";
import { Link } from "react-router";

export const QueryAdvancedPatterns = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <Link
                        to="/data-fetching/phase-3"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Phase 3
                    </Link>
                    <h1 className="text-xl font-semibold">3.3 Advanced Patterns</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Pagination, infinite scroll, prefetching, and URL state sync
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListAdvanced />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>Implement offset pagination with page numbers</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Add{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useInfiniteQuery
                                </code>{" "}
                                for infinite scroll
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Prefetch next page on hover with{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    prefetchQuery
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>
                                Sync filters with URL using{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useSearchParams
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Add placeholder data while loading</p>
                        </div>
                    </div>
                </section>

                {/* Patterns Reference */}
                <section className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                        <h3 className="text-sm font-medium text-neutral-400 mb-3">
                            Offset Pagination
                        </h3>
                        <pre className="text-xs text-neutral-400 overflow-x-auto">
                            {`useQuery({
  queryKey: ['jobs', 'list', { page }],
  queryFn: () => fetchJobs({ page, limit: 10 }),
  placeholderData: keepPreviousData,
});`}
                        </pre>
                    </div>
                    <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                        <h3 className="text-sm font-medium text-neutral-400 mb-3">
                            Infinite Scroll
                        </h3>
                        <pre className="text-xs text-neutral-400 overflow-x-auto">
                            {`useInfiniteQuery({
  queryKey: ['jobs', 'infinite'],
  queryFn: ({ pageParam }) => 
    fetchJobs({ cursor: pageParam }),
  getNextPageParam: (last) => last.nextCursor,
});`}
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
};
