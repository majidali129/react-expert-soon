import { ArrowLeft } from "lucide-react";
import { JobListQuery } from "./components/job-list-query";
import { Link } from "react-router";

export const QueryBasics = () => {
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
                    <h1 className="text-xl font-semibold">3.1 useQuery Basics</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Query keys, caching configuration, and dependent queries
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListQuery />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Setup{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    QueryClientProvider
                                </code>{" "}
                                in layout
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Implement{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useQuery
                                </code>{" "}
                                with hierarchical query keys
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Configure{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    staleTime
                                </code>{" "}
                                and{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    gcTime
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>
                                Add dependent query for job details (enabled when job
                                selected)
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Show background refetch indicator</p>
                        </div>
                    </div>
                </section>

                {/* Query Key Strategy */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Query Key Strategy
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// Hierarchical keys for smart invalidation
const queryKeys = {
  all: ['jobs'] as const,
  lists: () => [...queryKeys.all, 'list'] as const,
  list: (filters: JobFilters) => [...queryKeys.lists(), filters] as const,
  details: () => [...queryKeys.all, 'detail'] as const,
  detail: (id: string) => [...queryKeys.details(), id] as const,
};

// Usage
useQuery({
  queryKey: queryKeys.list({ type: 'remote' }),
  queryFn: () => fetchJobs({ type: 'remote' }),
  staleTime: 5 * 60 * 1000,  // 5 minutes
  gcTime: 30 * 60 * 1000,    // 30 minutes
});

// Dependent query
useQuery({
  queryKey: queryKeys.detail(selectedJobId),
  queryFn: () => fetchJob(selectedJobId),
  enabled: !!selectedJobId,  // Only fetch when job is selected
});`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
