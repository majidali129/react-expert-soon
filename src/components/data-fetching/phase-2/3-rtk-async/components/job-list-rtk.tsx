import { MapPin, Building2, DollarSign, Loader2, Filter, X } from "lucide-react";

// TODO: Setup RTK slice with createAsyncThunk
// import { useAppSelector, useAppDispatch } from '@/stores/rtk/hooks'
// import { fetchJobs, setFilters } from '@/stores/rtk/jobsSlice'

export const JobListRTK = () => {
    // TODO: Replace with RTK state
    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "San Francisco",
            type: "full-time",
            salary: { min: 150000, max: 200000 },
        },
        {
            id: "2",
            title: "React Engineer",
            company: "StartupXYZ",
            location: "Remote",
            type: "contract",
            salary: { min: 120000, max: 160000 },
        },
    ];

    const loading = false;
    const error = null;
    const filters = {
        type: "",
        location: "",
        minSalary: 0,
    };

    // Request status tracking
    const requestStatus = {
        status: "idle" as "idle" | "pending" | "fulfilled" | "rejected",
        requestId: null as string | null,
    };

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
                <select
                    // value={filters.type}
                    // onChange={(e) => dispatch(setFilters({ type: e.target.value }))}
                    className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 focus:border-amber-500/50 focus:outline-none"
                >
                    <option value="">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                </select>

                <select className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 focus:border-amber-500/50 focus:outline-none">
                    <option value="">All Locations</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="new-york">New York</option>
                    <option value="remote">Remote</option>
                </select>

                <button
                    type="button"
                    // onClick={() => dispatch(fetchJobs(filters))}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400 disabled:opacity-50 transition-colors"
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Filter className="h-4 w-4" />
                    )}
                    Apply Filters
                </button>

                {(filters.type || filters.location) && (
                    <button
                        type="button"
                        // onClick={() => dispatch(setFilters({ type: '', location: '' }))}
                        className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200"
                    >
                        <X className="h-4 w-4" />
                        Clear
                    </button>
                )}
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
                                    <span className="px-2 py-0.5 rounded bg-neutral-800 text-xs">
                                        {job.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="flex items-center gap-1 text-emerald-400 text-sm">
                            <DollarSign className="h-4 w-4" />
                            {(job.salary.min / 1000).toFixed(0)}k -{" "}
                            {(job.salary.max / 1000).toFixed(0)}k
                        </span>
                    </div>
                ))}
            </div>

            {/* Request Status Debug */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Async Thunk Status
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Status:</span>
                        <span
                            className={`ml-2 ${
                                requestStatus.status === "fulfilled"
                                    ? "text-emerald-400"
                                    : requestStatus.status === "pending"
                                      ? "text-blue-400"
                                      : requestStatus.status === "rejected"
                                        ? "text-red-400"
                                        : "text-neutral-400"
                            }`}
                        >
                            {requestStatus.status}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Request ID:</span>
                        <span className="ml-2 text-amber-400 font-mono">
                            {requestStatus.requestId || "none"}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Error:</span>
                        <span className="ml-2 text-red-400">{error || "null"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
