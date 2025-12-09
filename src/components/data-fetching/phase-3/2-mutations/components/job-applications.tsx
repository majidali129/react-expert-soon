import {
    Bookmark,
    BookmarkCheck,
    Loader2,
    CheckCircle2,
    XCircle,
    Building2,
    MapPin,
} from "lucide-react";

// TODO: Setup mutations
// import { useMutation, useQueryClient } from '@tanstack/react-query'

export const JobApplications = () => {
    // TODO: Replace with React Query
    // const queryClient = useQueryClient()
    // const saveJobMutation = useMutation({...})

    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "SF",
            saved: false,
        },
        {
            id: "2",
            title: "React Engineer",
            company: "StartupXYZ",
            location: "Remote",
            saved: true,
        },
        {
            id: "3",
            title: "Full Stack Developer",
            company: "Enterprise",
            location: "NYC",
            saved: false,
        },
        {
            id: "4",
            title: "UI Engineer",
            company: "DesignCo",
            location: "LA",
            saved: true,
        },
    ];

    // Mutation state for debug
    const mutationState = {
        status: "idle" as "idle" | "pending" | "success" | "error",
        variables: null as string | null,
        error: null as string | null,
    };

    const handleSaveJob = (jobId: string) => {
        console.log("TODO: Implement mutation for job:", jobId);
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-medium">Save Jobs (Mutations)</h2>
                    <p className="text-sm text-neutral-400 mt-1">
                        {jobs.filter((j) => j.saved).length} jobs saved
                    </p>
                </div>
                {mutationState.status === "pending" && (
                    <span className="flex items-center gap-2 text-sm text-blue-400">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving...
                    </span>
                )}
                {mutationState.status === "success" && (
                    <span className="flex items-center gap-2 text-sm text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                        Saved!
                    </span>
                )}
                {mutationState.status === "error" && (
                    <span className="flex items-center gap-2 text-sm text-red-400">
                        <XCircle className="h-4 w-4" />
                        Failed
                    </span>
                )}
            </div>

            {/* Job Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className={`rounded-xl border p-5 transition-all ${
                            job.saved
                                ? "border-amber-500/30 bg-amber-500/5"
                                : "border-neutral-800 bg-[#0f0f10]"
                        }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                    <Building2 className="h-5 w-5 text-neutral-500" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm">{job.title}</h3>
                                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-400">
                                        <span>{job.company}</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            {job.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSaveJob(job.id)}
                                disabled={
                                    mutationState.status === "pending" &&
                                    mutationState.variables === job.id
                                }
                                className={`p-2 rounded-lg transition-colors ${
                                    job.saved
                                        ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"
                                        : "hover:bg-neutral-800 text-neutral-400"
                                }`}
                            >
                                {mutationState.status === "pending" &&
                                mutationState.variables === job.id ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : job.saved ? (
                                    <BookmarkCheck className="h-5 w-5" />
                                ) : (
                                    <Bookmark className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        {/* Optimistic indicator */}
                        {job.saved && (
                            <div className="mt-3 pt-3 border-t border-neutral-800">
                                <span className="text-xs text-amber-400">
                                    Saved to your list
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mutation State Debug */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Mutation State Debug
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Status:</span>
                        <span
                            className={`ml-2 ${
                                mutationState.status === "success"
                                    ? "text-emerald-400"
                                    : mutationState.status === "pending"
                                      ? "text-blue-400"
                                      : mutationState.status === "error"
                                        ? "text-red-400"
                                        : "text-neutral-400"
                            }`}
                        >
                            {mutationState.status}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Variables:</span>
                        <span className="ml-2 text-amber-400 font-mono">
                            {mutationState.variables || "null"}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Error:</span>
                        <span className="ml-2 text-red-400">
                            {mutationState.error || "null"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Lifecycle Visualization */}
            <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <h4 className="text-sm font-medium text-blue-400 mb-3">
                    Mutation Lifecycle
                </h4>
                <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-400">
                        onMutate
                    </span>
                    <span className="text-neutral-500">→</span>
                    <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-400">
                        mutationFn
                    </span>
                    <span className="text-neutral-500">→</span>
                    <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">
                        onSuccess
                    </span>
                    <span className="text-neutral-500">/</span>
                    <span className="px-2 py-1 rounded bg-red-500/20 text-red-400">
                        onError
                    </span>
                    <span className="text-neutral-500">→</span>
                    <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-400">
                        onSettled
                    </span>
                </div>
            </div>
        </div>
    );
};
