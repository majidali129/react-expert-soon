import { ArrowLeft } from "lucide-react";
import { JobApplications } from "./components/job-applications";
import { Link } from "react-router";

export const Mutations = () => {
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
                    <h1 className="text-xl font-semibold">
                        3.2 Mutations & Optimistic Updates
                    </h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        useMutation, optimistic UI, cache invalidation, and rollback
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobApplications />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Implement{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useMutation
                                </code>{" "}
                                for saving/unsaving jobs
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Add optimistic update in{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    onMutate
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Implement rollback in{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    onError
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>
                                Invalidate queries in{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    onSettled
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Show mutation status (pending, success, error) in UI</p>
                        </div>
                    </div>
                </section>

                {/* Optimistic Update Pattern */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Optimistic Update Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`const saveJobMutation = useMutation({
  mutationFn: (jobId: string) => api.saveJob(jobId),
  
  onMutate: async (jobId) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: ['savedJobs'] });
    
    // Snapshot previous value
    const previousSaved = queryClient.getQueryData(['savedJobs']);
    
    // Optimistically update
    queryClient.setQueryData(['savedJobs'], (old: string[]) => 
      [...old, jobId]
    );
    
    // Return context for rollback
    return { previousSaved };
  },
  
  onError: (err, jobId, context) => {
    // Rollback on error
    queryClient.setQueryData(['savedJobs'], context?.previousSaved);
    toast.error('Failed to save job');
  },
  
  onSettled: () => {
    // Refetch to ensure consistency
    queryClient.invalidateQueries({ queryKey: ['savedJobs'] });
  },
});`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
