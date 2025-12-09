import { MapPin, Building2, DollarSign, RefreshCw, Loader2, Clock } from "lucide-react";

// TODO: Setup React Query
// import { useQuery } from '@tanstack/react-query'

export const JobListQuery = () => {
    // TODO: Replace with useQuery
    // const { data: jobs, isLoading, isFetching, error, refetch } = useQuery({
    //   queryKey: ['jobs', 'list', filters],
    //   queryFn: () => fetchJobs(filters),
    //   staleTime: 5 * 60 * 1000,
    // })

    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "San Francisco",
            salary: { min: 150000, max: 200000 },
        },
        {
            id: "2",
            title: "React Engineer",
            company: "StartupXYZ",
            location: "Remote",
            salary: { min: 120000, max: 160000 },
        },
    ];

    const isLoading = false;
    const isFetching = false;
    const isStale = false;
    const selectedJobId: string | null = null;

    // Query state for debug
    const queryState = {
        status: "success" as "pending" | "error" | "success",
        fetchStatus: "idle" as "fetching" | "paused" | "idle",
        isStale: false,
        dataUpdatedAt: Date.now(),
    };

    return (
        <div>
            {/* Header with Status */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-medium">Jobs (React Query)</h2>
                    {isFetching && !isLoading && (
                        <span className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            Updating...
                        </span>
                    )}
                    {isStale && (
                        <span className="flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                            <Clock className="h-3 w-3" />
                            Stale
                        </span>
                    )}
                </div>
                <button
                    type="button"
                    // onClick={() => refetch()}
                    disabled={isFetching}
                    className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 disabled:opacity-50 transition-colors"
                >
                    <RefreshCw
                        className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`}
                    />
                    Refetch
                </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Job List */}
                <div className="lg:col-span-2 space-y-3">
                    {jobs.map((job) => (
                        <button
                            type="button"
                            key={job.id}
                            // onClick={() => setSelectedJobId(job.id)}
                            className={`w-full text-left rounded-xl border p-5 transition-colors ${
                                selectedJobId === job.id
                                    ? "border-amber-500/50 bg-amber-500/5"
                                    : "border-neutral-800 bg-[#0f0f10] hover:border-neutral-700"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                    <Building2 className="h-5 w-5 text-neutral-500" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">{job.title}</h3>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-neutral-400">
                                        <span>{job.company}</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            {job.location}
                                        </span>
                                    </div>
                                </div>
                                <span className="flex items-center gap-1 text-emerald-400 text-sm">
                                    <DollarSign className="h-4 w-4" />
                                    {(job.salary.min / 1000).toFixed(0)}k
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Job Detail Panel (Dependent Query) */}
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h3 className="font-medium mb-4">Job Details</h3>
                    {selectedJobId ? (
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                                    Title
                                </p>
                                <p className="text-sm mt-1">Senior Frontend Developer</p>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                                    Description
                                </p>
                                <p className="text-sm text-neutral-400 mt-1">
                                    We're looking for an experienced frontend developer to
                                    join our team...
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                                    Requirements
                                </p>
                                <ul className="text-sm text-neutral-400 mt-1 space-y-1">
                                    <li>• 5+ years React experience</li>
                                    <li>• TypeScript proficiency</li>
                                    <li>• State management expertise</li>
                                </ul>
                            </div>
                            <button
                                type="button"
                                className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-medium text-neutral-900 hover:bg-amber-400 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-8 text-neutral-500">
                            <Building2 className="h-8 w-8 mx-auto mb-3 opacity-50" />
                            <p className="text-sm">Select a job to view details</p>
                            <p className="text-xs mt-1">(Dependent query with enabled)</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Query State Debug */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Query State Debug
                </h4>
                <div className="grid grid-cols-4 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Status:</span>
                        <span
                            className={`ml-2 ${
                                queryState.status === "success"
                                    ? "text-emerald-400"
                                    : queryState.status === "pending"
                                      ? "text-blue-400"
                                      : "text-red-400"
                            }`}
                        >
                            {queryState.status}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Fetch Status:</span>
                        <span className="ml-2 text-blue-400">
                            {queryState.fetchStatus}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Is Stale:</span>
                        <span className="ml-2 text-amber-400">
                            {String(queryState.isStale)}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Updated:</span>
                        <span className="ml-2 text-neutral-400">
                            {new Date(queryState.dataUpdatedAt).toLocaleTimeString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
