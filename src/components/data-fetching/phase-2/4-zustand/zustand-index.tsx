import { ArrowLeft } from "lucide-react";
import { JobListZustand } from "./components/job-list-zustand";
import { Link } from "react-router";

export const Zustand = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <Link
                        to="/data-fetching/phase-2"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Phase 2
                    </Link>
                    <h1 className="text-xl font-semibold">2.4 Zustand Async Handling</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Lightweight state management with minimal boilerplate
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListZustand />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Create Zustand store with{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    create()
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Add async actions directly in the store (no middleware
                                needed)
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>Implement selectors for optimized re-renders</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>
                                Add{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    persist
                                </code>{" "}
                                middleware for localStorage
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Compare code verbosity with Redux approach</p>
                        </div>
                    </div>
                </section>

                {/* Zustand Pattern */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Zustand Store Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JobsStore {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  fetchJobs: (filters?: JobFilters) => Promise<void>;
  saveJob: (jobId: string) => void;
}

export const useJobsStore = create<JobsStore>()(
  persist(
    (set, get) => ({
      jobs: [],
      loading: false,
      error: null,

      fetchJobs: async (filters) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch('/api/jobs');
          const jobs = await res.json();
          set({ jobs, loading: false });
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      },

      saveJob: (jobId) => {
        const jobs = get().jobs.map(job =>
          job.id === jobId ? { ...job, saved: true } : job
        );
        set({ jobs });
      },
    }),
    { name: 'jobs-storage' }
  )
);

// Usage with selector (prevents unnecessary re-renders)
const jobs = useJobsStore((state) => state.jobs);
const loading = useJobsStore((state) => state.loading);`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
