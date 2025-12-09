import { ArrowLeft, Database, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export const Phase3Overview = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-5xl px-6 py-6">
                    <Link
                        to="/data-fetching"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-lg font-medium text-amber-400 border border-amber-500/20">
                            3
                        </span>
                        <div>
                            <h1 className="text-xl font-semibold">
                                Phase 3: React Query (TanStack)
                            </h1>
                            <p className="text-sm text-neutral-400">
                                Professional data fetching with caching and mutations
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-8">
                <div className="space-y-4">
                    {/* 3.1 Query Basics */}
                    <Link
                        to="/data-fetching/phase-3/1-query-basics"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                                <Database className="h-5 w-5 text-amber-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">3.1 useQuery Basics</h2>
                                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                                        Foundation
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Query keys, stale time, cache time, and dependent
                                    queries.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "useQuery",
                                        "Query keys",
                                        "staleTime",
                                        "gcTime",
                                        "enabled",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 3.2 Mutations */}
                    <Link
                        to="/data-fetching/phase-3/2-mutations"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                                <RefreshCw className="h-5 w-5 text-amber-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        3.2 Mutations & Optimistic Updates
                                    </h2>
                                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                        Critical
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    useMutation, optimistic updates, cache invalidation,
                                    and rollback.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "useMutation",
                                        "onMutate",
                                        "Optimistic UI",
                                        "Rollback",
                                        "invalidateQueries",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 3.3 Advanced */}
                    <Link
                        to="/data-fetching/phase-3/3-advanced"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                                <Sparkles className="h-5 w-5 text-amber-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">3.3 Advanced Patterns</h2>
                                    <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                                        Pro
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Pagination, infinite scroll, prefetching, and URL
                                    state sync.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Pagination",
                                        "Infinite scroll",
                                        "Prefetch",
                                        "URL sync",
                                        "Placeholder data",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Success Criteria */}
                <section className="mt-10 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-400" />
                        Phase 3 Success Criteria
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            "useQuery with proper query keys",
                            "staleTime vs gcTime understood",
                            "Dependent queries with enabled",
                            "useMutation for create/update/delete",
                            "Optimistic updates with rollback",
                            "Cache invalidation strategy",
                            "Offset pagination implemented",
                            "Infinite scroll with useInfiniteQuery",
                            "Prefetching on hover",
                            "URL state synchronized with queries",
                        ].map((item) => (
                            <label
                                key={item}
                                className="flex items-center gap-3 text-sm text-neutral-300"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-neutral-600 bg-neutral-800"
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};
