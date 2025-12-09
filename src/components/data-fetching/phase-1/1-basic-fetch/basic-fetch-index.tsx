import { ArrowLeft } from "lucide-react";
import { JobListBasic } from "./components/job-list-basic";
import { Link } from "react-router";

export const BasicFetch = () => {
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
                    <h1 className="text-xl font-semibold">
                        1.1 Basic useState + useEffect
                    </h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Implement loading, error, and data states with proper cleanup
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListBasic />

                {/* Instructions Panel */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Add{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useState
                                </code>{" "}
                                for jobs, loading, and error states
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Fetch jobs in{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useEffect
                                </code>{" "}
                                on component mount
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>Handle race conditions with a cancelled flag in cleanup</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>Show loading skeleton while fetching</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Display error state with retry button</p>
                        </div>
                    </div>
                </section>

                {/* Code Hint */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Pattern Reference
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`useEffect(() => {
  let cancelled = false;
  
  setLoading(true);
  fetchJobs()
    .then(data => {
      if (!cancelled) {
        setJobs(data);
        setError(null);
      }
    })
    .catch(err => {
      if (!cancelled) setError(err.message);
    })
    .finally(() => {
      if (!cancelled) setLoading(false);
    });

  return () => { cancelled = true; };
}, [dependency]);`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
