import { ArrowLeft } from "lucide-react";
import { JobListWithHook } from "./components/job-list-with-hook";
import { Link } from "react-router";

export const CustomHooks = () => {
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
                    <h1 className="text-xl font-semibold">1.2 Custom useFetch Hook</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Create a reusable, type-safe data fetching hook with generics
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListWithHook />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Create{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useFetch&lt;T&gt;
                                </code>{" "}
                                generic hook in{" "}
                                <code className="text-neutral-400">/hooks</code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Return{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">{`{ data, loading, error, refetch }`}</code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>Add retry logic with configurable max retries</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>Support custom fetch options (method, headers, body)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Make it work for both jobs list and single job detail</p>
                        </div>
                    </div>
                </section>

                {/* Target API */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Target Hook API
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// Basic usage
const { data: jobs, loading, error, refetch } = useFetch<Job[]>('/api/jobs');

// With options
const { data: job } = useFetch<Job>(\`/api/jobs/\${id}\`, {
  enabled: !!id,
  retry: 3,
  retryDelay: 1000,
});

// POST request
const { data } = useFetch<Job>('/api/jobs', {
  method: 'POST',
  body: JSON.stringify(newJob),
  headers: { 'Content-Type': 'application/json' },
});`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
