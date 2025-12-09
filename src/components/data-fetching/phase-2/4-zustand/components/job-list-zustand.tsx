import {
    MapPin,
    Building2,
    DollarSign,
    Bookmark,
    BookmarkCheck,
    RefreshCw,
    Loader2,
} from "lucide-react";

// TODO: Create and use Zustand store
// import { useJobsStore } from '@/stores/zustand/jobs-store'

export const JobListZustand = () => {
    // TODO: Replace with Zustand selectors
    // const jobs = useJobsStore((state) => state.jobs)
    // const loading = useJobsStore((state) => state.loading)
    // const fetchJobs = useJobsStore((state) => state.fetchJobs)
    // const saveJob = useJobsStore((state) => state.saveJob)

    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "San Francisco",
            salary: { min: 150000, max: 200000 },
            saved: false,
        },
        {
            id: "2",
            title: "React Engineer",
            company: "StartupXYZ",
            location: "Remote",
            salary: { min: 120000, max: 160000 },
            saved: true,
        },
        {
            id: "3",
            title: "Full Stack Developer",
            company: "Enterprise Inc",
            location: "New York",
            salary: { min: 130000, max: 180000 },
            saved: false,
        },
    ];

    const loading = false;
    const error = null;

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-medium">Jobs (Zustand Store)</h2>
                    <p className="text-sm text-neutral-400 mt-1">
                        {jobs.filter((j) => j.saved).length} saved jobs
                    </p>
                </div>
                <button
                    type="button"
                    // onClick={() => fetchJobs()}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400 disabled:opacity-50 transition-colors"
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <RefreshCw className="h-4 w-4" />
                    )}
                    Fetch Jobs
                </button>
            </div>

            {/* Job List */}
            <div className="space-y-3">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="flex items-center justify-between rounded-xl border border-neutral-800 bg-[#0f0f10] p-5"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-neutral-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">{job.title}</h3>
                                <div className="flex items-center gap-3 mt-1 text-sm text-neutral-400">
                                    <span>{job.company}</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-emerald-400 text-sm">
                                <DollarSign className="h-4 w-4" />
                                {(job.salary.min / 1000).toFixed(0)}k -{" "}
                                {(job.salary.max / 1000).toFixed(0)}k
                            </span>
                            <button
                                type="button"
                                // onClick={() => saveJob(job.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                    job.saved
                                        ? "bg-amber-500/10 text-amber-400"
                                        : "hover:bg-neutral-800 text-neutral-400"
                                }`}
                            >
                                {job.saved ? (
                                    <BookmarkCheck className="h-5 w-5" />
                                ) : (
                                    <Bookmark className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Zustand State Debug */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Zustand Store State
                </h4>
                <pre className="text-xs text-neutral-400 overflow-x-auto">
                    {`{
  jobs: [${jobs.length} items],
  loading: ${loading},
  error: ${error || "null"},
  savedJobIds: [${jobs
      .filter((j) => j.saved)
      .map((j) => `"${j.id}"`)
      .join(", ")}]
}`}
                </pre>
            </div>

            {/* Comparison Note */}
            <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <h4 className="text-sm font-medium text-blue-400 mb-2">
                    Zustand vs Redux
                </h4>
                <ul className="text-xs text-neutral-400 space-y-1">
                    <li>• No action types, reducers, or middleware setup</li>
                    <li>• Async logic lives directly in the store</li>
                    <li>• Built-in persist middleware for localStorage</li>
                    <li>• Selectors prevent unnecessary re-renders</li>
                    <li>• ~10x less boilerplate than classic Redux</li>
                </ul>
            </div>
        </div>
    );
};
