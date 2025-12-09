import {
    MapPin,
    Building2,
    Clock,
    DollarSign,
    Bookmark,
    Loader2,
    AlertCircle,
    RefreshCw,
} from "lucide-react";

// TODO: Define Job type
// interface Job { id, title, company, location, type, salary, postedAt }

// TODO: Add state management
// const [jobs, setJobs] = useState<Job[]>([])
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState<string | null>(null)

// TODO: Add useEffect for fetching
// Handle race conditions with cancelled flag

export const JobListBasic = () => {
    // Static data - Replace with fetched data
    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: { name: "TechCorp", logo: "/placeholder.svg?height=40&width=40" },
            location: "San Francisco, CA",
            type: "Full-time",
            salary: { min: 150000, max: 200000, currency: "USD" },
            postedAt: "2024-01-15",
        },
        {
            id: "2",
            title: "React Engineer",
            company: { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=40" },
            location: "Remote",
            type: "Contract",
            salary: { min: 120000, max: 160000, currency: "USD" },
            postedAt: "2024-01-14",
        },
        {
            id: "3",
            title: "Full Stack Developer",
            company: {
                name: "Enterprise Inc",
                logo: "/placeholder.svg?height=40&width=40",
            },
            location: "New York, NY",
            type: "Full-time",
            salary: { min: 130000, max: 180000, currency: "USD" },
            postedAt: "2024-01-13",
        },
    ];

    // TODO: Implement these states
    const loading = false;
    const error: string | null = null;

    // Loading State UI
    if (loading) {
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium">Job Listings</h2>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading jobs...
                    </div>
                </div>
                {/* Skeleton Cards */}
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 animate-pulse"
                    >
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-lg bg-neutral-800" />
                            <div className="flex-1 space-y-3">
                                <div className="h-5 w-48 bg-neutral-800 rounded" />
                                <div className="h-4 w-32 bg-neutral-800 rounded" />
                                <div className="flex gap-4">
                                    <div className="h-4 w-24 bg-neutral-800 rounded" />
                                    <div className="h-4 w-24 bg-neutral-800 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Error State UI
    if (error) {
        return (
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8 text-center">
                <AlertCircle className="h-10 w-10 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-red-400 mb-2">
                    Failed to Load Jobs
                </h3>
                <p className="text-sm text-neutral-400 mb-6">{error}</p>
                <button
                    type="button"
                    // TODO: onClick={refetch}
                    className="inline-flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20 transition-colors"
                >
                    <RefreshCw className="h-4 w-4" />
                    Try Again
                </button>
            </div>
        );
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
                    <article
                        key={job.id}
                        className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex gap-4">
                            {/* Company Logo */}
                            <img
                                src={job.company.logo || "/placeholder.svg"}
                                alt={job.company.name}
                                className="h-12 w-12 rounded-lg bg-neutral-800 object-cover"
                            />

                            {/* Job Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-medium text-neutral-100 truncate">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1 text-sm text-neutral-400">
                                            <Building2 className="h-4 w-4" />
                                            <span>{job.company.name}</span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="shrink-0 p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                                        // TODO: Save job functionality
                                    >
                                        <Bookmark className="h-5 w-5 text-neutral-400" />
                                    </button>
                                </div>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                                    <span className="flex items-center gap-1.5 text-neutral-400">
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-neutral-400">
                                        <Clock className="h-4 w-4" />
                                        {job.type}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-emerald-400">
                                        <DollarSign className="h-4 w-4" />$
                                        {(job.salary.min / 1000).toFixed(0)}k - $
                                        {(job.salary.max / 1000).toFixed(0)}k
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3 mt-4">
                                    <button
                                        type="button"
                                        className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
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
