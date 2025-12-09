import { ArrowLeft } from "lucide-react";
import { JobSearch } from "./components/job-search";
import { Link } from "react-router";

export const Cancellation = () => {
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
                    <h1 className="text-xl font-semibold">1.4 Request Cancellation</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        AbortController for proper cleanup on unmount and new requests
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobSearch />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Create{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    AbortController
                                </code>{" "}
                                for each search request
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>Cancel previous request when user types new query</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>Cancel on component unmount in cleanup function</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>
                                Handle{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    AbortError
                                </code>{" "}
                                gracefully (don't show as error)
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Add debounce (300ms) to reduce unnecessary requests</p>
                        </div>
                    </div>
                </section>

                {/* Pattern Reference */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        AbortController Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`useEffect(() => {
  const controller = new AbortController();
  
  const searchJobs = async () => {
    try {
      const res = await fetch(\`/api/jobs?q=\${query}\`, {
        signal: controller.signal
      });
      const data = await res.json();
      setResults(data);
    } catch (err) {
      if (err.name === 'AbortError') {
        // Silently ignore - request was cancelled
        return;
      }
      setError(err.message);
    }
  };

  if (query) searchJobs();

  return () => controller.abort();
}, [query]);`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
