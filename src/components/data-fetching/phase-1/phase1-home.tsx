import { ArrowLeft, Zap, Layers, Clock, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export default function Phase1Overview() {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            {/* Header */}
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
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-lg font-medium text-blue-400 border border-blue-500/20">
                            1
                        </span>
                        <div>
                            <h1 className="text-xl font-semibold">
                                Phase 1: Native Patterns
                            </h1>
                            <p className="text-sm text-neutral-400">
                                Core React data fetching without external libraries
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-8">
                {/* Learning Path */}
                <div className="space-y-4">
                    {/* 1.1 Basic Fetch */}
                    <Link
                        to="/data-fetching/phase-1/1-basic-fetch"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <Zap className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        1.1 Basic useState + useEffect
                                    </h2>
                                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                                        Fundamentals
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Loading, error, and data states. Cleanup and race
                                    condition handling.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Loading states",
                                        "Error handling",
                                        "Race conditions",
                                        "useEffect cleanup",
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

                    {/* 1.2 Custom Hooks */}
                    <Link
                        to="/data-fetching/phase-1/2-custom-hooks"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <Layers className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        1.2 Custom useFetch Hook
                                    </h2>
                                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                                        Abstraction
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Create reusable, type-safe data fetching hooks with
                                    generics.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Generic types",
                                        "Refetch",
                                        "Retry logic",
                                        "Custom options",
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

                    {/* 1.3 Waterfalls */}
                    <Link
                        to="/data-fetching/phase-1/3-waterfall"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <Clock className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        1.3 Request Waterfalls
                                    </h2>
                                    <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                                        Performance
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Identify waterfall anti-patterns and fix with
                                    Promise.all parallelization.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Waterfall detection",
                                        "Promise.all",
                                        "Parallel requests",
                                        "Performance timing",
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

                    {/* 1.4 Cancellation */}
                    <Link
                        to="/data-fetching/phase-1/4-cancellation"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <RefreshCw className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        1.4 Request Cancellation
                                    </h2>
                                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                                        Cleanup
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    AbortController usage for proper request cancellation
                                    on unmount and new requests.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "AbortController",
                                        "Unmount cleanup",
                                        "Search debounce",
                                        "AbortError handling",
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
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        Phase 1 Success Criteria
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            "Basic fetch with loading/error/success states",
                            "Race conditions properly handled",
                            "Custom useFetch<T> hook is type-safe",
                            "Hook supports refetch and retry",
                            "Waterfalls identified and parallelized",
                            "AbortController cancels on unmount",
                            "Search cancels previous requests",
                            "No memory leaks in useEffect",
                        ].map((item) => (
                            <label
                                key={item}
                                className="flex items-center gap-3 text-sm text-neutral-300"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-neutral-600 bg-neutral-800 text-blue-500"
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
