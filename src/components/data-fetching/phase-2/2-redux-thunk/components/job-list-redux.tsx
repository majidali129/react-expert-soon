import { MapPin, Building2, DollarSign, RefreshCw, Loader2 } from "lucide-react";

// TODO: Setup Redux store and connect
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchJobs } from '@/stores/redux/jobsSlice'

export const JobListRedux = () => {
    // TODO: Replace with Redux state
    // const dispatch = useDispatch()
    // const { jobs, loading, error } = useSelector(state => state.jobs)

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

    const loading = false;
    const error = null;

    // Redux state shape for debug
    const reduxState = {
        jobs: {
            items: jobs,
            loading: false,
            error: null,
            lastFetched: null,
        },
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Jobs (Redux State)</h2>
                <button
                    type="button"
                    // onClick={() => dispatch(fetchJobs())}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400 disabled:opacity-50 transition-colors"
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <RefreshCw className="h-4 w-4" />
                    )}
                    Dispatch fetchJobs()
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
                        <span className="flex items-center gap-1 text-emerald-400 text-sm">
                            <DollarSign className="h-4 w-4" />
                            {(job.salary.min / 1000).toFixed(0)}k -{" "}
                            {(job.salary.max / 1000).toFixed(0)}k
                        </span>
                    </div>
                ))}
            </div>

            {/* Redux State Debug */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Redux Store State
                </h4>
                <pre className="text-xs text-neutral-400 overflow-x-auto">
                    {JSON.stringify(reduxState, null, 2)}
                </pre>
            </div>

            {/* Action Log */}
            <div className="mt-4 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Dispatched Actions (TODO)
                </h4>
                <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-blue-400">
                        <span className="text-neutral-500">→</span>
                        jobs/fetchRequest
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                        <span className="text-neutral-500">→</span>
                        jobs/fetchSuccess (payload: 2 jobs)
                    </div>
                </div>
            </div>
        </div>
    );
};
