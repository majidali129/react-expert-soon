import { ArrowLeft } from "lucide-react";
import { CompanyDashboard } from "./components/company-dashboard";
import { Link } from "react-router";

export const Waterfall = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <Link
                        to="/data-fetching/phase-1"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Phase 1
                    </Link>
                    <h1 className="text-xl font-semibold">1.3 Request Waterfalls</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Identify waterfall anti-patterns and fix with parallelization
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <CompanyDashboard />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Identify the waterfall: Company → Jobs → Stats → Reviews
                                (sequential)
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Measure load time with{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    console.time()
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Refactor using{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    Promise.all
                                </code>{" "}
                                for parallel requests
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>Compare before/after timing in the debug panel</p>
                        </div>
                    </div>
                </section>

                {/* Anti-pattern */}
                <section className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                        <h3 className="text-sm font-medium text-red-400 mb-3">
                            Waterfall (Bad)
                        </h3>
                        <pre className="text-xs text-neutral-400 overflow-x-auto">
                            {`// Sequential - 4 network roundtrips
const company = await fetch('/company/1');
const jobs = await fetch('/company/1/jobs');
const stats = await fetch('/company/1/stats');
const reviews = await fetch('/company/1/reviews');
// Total: ~2000ms (500ms x 4)`}
                        </pre>
                    </div>
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                        <h3 className="text-sm font-medium text-emerald-400 mb-3">
                            Parallel (Good)
                        </h3>
                        <pre className="text-xs text-neutral-400 overflow-x-auto">
                            {`// Concurrent - 1 network roundtrip
const [company, jobs, stats, reviews] = 
  await Promise.all([
    fetch('/company/1'),
    fetch('/company/1/jobs'),
    fetch('/company/1/stats'),
    fetch('/company/1/reviews'),
  ]);
// Total: ~500ms (longest request)`}
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
};
