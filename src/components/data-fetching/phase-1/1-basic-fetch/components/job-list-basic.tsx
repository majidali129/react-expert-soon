import { getJobs, type Job } from "@/lib/api";
import { useEffect, useState } from "react";
import { LoadingSkeleton } from "../../shared-components/loading-skeleton";
import { ErrorFallback } from "../../shared-components/error-fallback";
import { JobCard } from "../../shared-components/job-card";

export const JobListBasic = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState<Job[]>([]);

    console.log(jobs);

    // ! ============ With race condition handling ============
    useEffect(() => {
        let cancelled = false;

        const fetchJobs = async () => {
            setLoading(true);
            setError(null);
            try {
                const jobsData = await getJobs();
                // Simulate network delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (!cancelled) {
                    setJobs(jobsData);
                }
            } catch (error) {
                if (!cancelled) {
                    setError((error as Error).message);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };
        fetchJobs();

        return () => {
            cancelled = true;
        };
    }, []);

    // ! Without race-conditions handling
    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         setLoading(true);
    //         setError(null);
    //         try {
    //             const jobsData = await getJobs();
    //             await new Promise((resolve) => setTimeout(resolve, 1000));
    //             setJobs(jobsData);
    //         } catch (error) {
    //             setError((error as Error).message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchJobs();
    // }, []);

    // Static data - Replace with fetched data

    // Loading State UI
    if (loading) {
        return <LoadingSkeleton />;
    }

    // Error State UI
    if (error) {
        return <ErrorFallback error={error} />;
    }

    // Success State UI
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Job Listings</h2>
                <span className="text-sm text-neutral-400">{jobs.length} jobs found</span>
            </div>

            <div className="space-y-4">
                {jobs.map((job) => (
                    <JobCard job={job} key={job.id} />
                ))}
            </div>

            {/* Debug Panel */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Debug Panel
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Loading:</span>
                        <span className="ml-2 text-blue-400">{String(loading)}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Error:</span>
                        <span className="ml-2 text-red-400">{error || "null"}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Jobs Count:</span>
                        <span className="ml-2 text-emerald-400">{jobs.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
