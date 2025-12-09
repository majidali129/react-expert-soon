import {
    Database,
    Layers,
    Zap,
    Clock,
    RefreshCw,
    GitBranch,
    Shield,
    Server,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

export const DataFetchingDashboard = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            {/* Header */}
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-6xl px-6 py-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                            <Database className="h-5 w-5 text-amber-400" />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Data Fetching Mastery
                        </h1>
                    </div>
                    <p className="text-neutral-400 max-w-2xl">
                        Job Board Dashboard - Master data fetching from native patterns to
                        React Query through a real-world hiring platform.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-6xl px-6 py-10">
                {/* Phase Cards */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Phase 1 */}
                    <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] overflow-hidden">
                        <div className="p-6 border-b border-neutral-800">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-sm font-medium text-blue-400 border border-blue-500/20">
                                    1
                                </span>
                                <h2 className="text-lg font-medium">Native Patterns</h2>
                            </div>
                            <p className="text-sm text-neutral-400">
                                Core React data fetching with useState, useEffect, custom
                                hooks, and proper cleanup.
                            </p>
                        </div>

                        <div className="p-4 space-y-2">
                            <Link
                                to="/data-fetching/phase-1/1-basic-fetch"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Zap className="h-4 w-4 text-neutral-500 group-hover:text-blue-400" />
                                <span className="text-sm">
                                    Basic useState + useEffect
                                </span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-1/2-custom-hooks"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Layers className="h-4 w-4 text-neutral-500 group-hover:text-blue-400" />
                                <span className="text-sm">Custom useFetch Hook</span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-1/3-waterfall"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Clock className="h-4 w-4 text-neutral-500 group-hover:text-blue-400" />
                                <span className="text-sm">Request Waterfalls</span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-1/4-cancellation"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <RefreshCw className="h-4 w-4 text-neutral-500 group-hover:text-blue-400" />
                                <span className="text-sm">Request Cancellation</span>
                            </Link>
                        </div>

                        <div className="px-4 pb-4">
                            <Link
                                to="/data-fetching/phase-1"
                                className="flex items-center justify-center gap-2 w-full rounded-lg bg-blue-500/10 border border-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-400 hover:bg-blue-500/20 transition-colors"
                            >
                                Start Phase 1
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] overflow-hidden">
                        <div className="p-6 border-b border-neutral-800">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-medium text-emerald-400 border border-emerald-500/20">
                                    2
                                </span>
                                <h2 className="text-lg font-medium">State Libraries</h2>
                            </div>
                            <p className="text-sm text-neutral-400">
                                Integrate with Context, Redux Thunk, RTK createAsyncThunk,
                                and Zustand for async state.
                            </p>
                        </div>

                        <div className="p-4 space-y-2">
                            <Link
                                to="/data-fetching/phase-2/1-context-di"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <GitBranch className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400" />
                                <span className="text-sm">Context for DI</span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-2/2-redux-thunk"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Server className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400" />
                                <span className="text-sm">Redux Thunk</span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-2/3-rtk-async"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Shield className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400" />
                                <span className="text-sm">RTK createAsyncThunk</span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-2/4-zustand"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Sparkles className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400" />
                                <span className="text-sm">Zustand Async</span>
                            </Link>
                        </div>

                        <div className="px-4 pb-4">
                            <Link
                                to="/data-fetching/phase-2"
                                className="flex items-center justify-center gap-2 w-full rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                            >
                                Start Phase 2
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] overflow-hidden">
                        <div className="p-6 border-b border-neutral-800">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-sm font-medium text-amber-400 border border-amber-500/20">
                                    3
                                </span>
                                <h2 className="text-lg font-medium">React Query</h2>
                            </div>
                            <p className="text-sm text-neutral-400">
                                TanStack Query for professional data fetching with
                                caching, mutations, and advanced patterns.
                            </p>
                        </div>

                        <div className="p-4 space-y-2">
                            <Link
                                to="/data-fetching/phase-3/1-query-basics"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Database className="h-4 w-4 text-neutral-500 group-hover:text-amber-400" />
                                <span className="text-sm">useQuery Basics</span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-3/2-mutations"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <RefreshCw className="h-4 w-4 text-neutral-500 group-hover:text-amber-400" />
                                <span className="text-sm">
                                    Mutations & Optimistic Updates
                                </span>
                            </Link>
                            <Link
                                to="/data-fetching/phase-3/3-advanced"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800/50 transition-colors group"
                            >
                                <Sparkles className="h-4 w-4 text-neutral-500 group-hover:text-amber-400" />
                                <span className="text-sm">Advanced Patterns</span>
                            </Link>
                        </div>

                        <div className="px-4 pb-4">
                            <Link
                                to="/data-fetching/phase-3"
                                className="flex items-center justify-center gap-2 w-full rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 text-sm font-medium text-amber-400 hover:bg-amber-500/20 transition-colors"
                            >
                                Start Phase 3
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Concepts Overview */}
                <section className="mt-12">
                    <h2 className="text-lg font-medium mb-6">Concepts Covered</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                label: "Loading States",
                                desc: "Skeleton, spinner, error boundaries",
                            },
                            {
                                label: "Race Conditions",
                                desc: "Stale closures, cleanup patterns",
                            },
                            {
                                label: "Caching Strategy",
                                desc: "Stale-while-revalidate, TTL",
                            },
                            {
                                label: "Optimistic Updates",
                                desc: "Instant UI, rollback on error",
                            },
                            {
                                label: "Pagination",
                                desc: "Offset, cursor, infinite scroll",
                            },
                            {
                                label: "Request Deduplication",
                                desc: "Single flight, batching",
                            },
                            {
                                label: "Background Sync",
                                desc: "Refetch on focus, intervals",
                            },
                            {
                                label: "Type Safety",
                                desc: "Generic hooks, Zod validation",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
                            >
                                <h3 className="text-sm font-medium text-neutral-200">
                                    {item.label}
                                </h3>
                                <p className="text-xs text-neutral-500 mt-1">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Backend Setup Guide */}
                <section className="mt-12 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="text-lg font-medium mb-4">Backend Setup Options</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-neutral-700 bg-neutral-900/50 p-4">
                            <h3 className="text-sm font-medium text-amber-400 mb-2">
                                Recommended: MSW (Mock Service Worker)
                            </h3>
                            <p className="text-xs text-neutral-400 mb-3">
                                Intercepts requests at network level. No server needed,
                                full control over responses.
                            </p>
                            <code className="text-xs text-neutral-300 bg-neutral-800 px-2 py-1 rounded">
                                npm install msw --save-dev
                            </code>
                        </div>
                        <div className="rounded-lg border border-neutral-700 bg-neutral-900/50 p-4">
                            <h3 className="text-sm font-medium text-emerald-400 mb-2">
                                Alternative: JSON Server
                            </h3>
                            <p className="text-xs text-neutral-400 mb-3">
                                Quick REST API from a JSON file. Supports GET, POST, PUT,
                                DELETE.
                            </p>
                            <code className="text-xs text-neutral-300 bg-neutral-800 px-2 py-1 rounded">
                                npx json-server --watch db.json
                            </code>
                        </div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-4">
                        Start with mocks for isolated practice, then swap to real backend
                        (MERN/Supabase) when ready.
                    </p>
                </section>
            </main>
        </div>
    );
};
