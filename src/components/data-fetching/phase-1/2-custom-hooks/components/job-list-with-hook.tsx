"use client";

import {
    MapPin,
    Building2,
    Clock,
    DollarSign,
    Bookmark,
    RefreshCw,
    Filter,
} from "lucide-react";

// TODO: Create and import useFetch hook
// import { useFetch } from '@/hooks/use-fetch'

// TODO: Use the hook
// const { data: jobs, loading, error, refetch } = useFetch<Job[]>('/api/jobs')

export const JobListWithHook = () => {
    // Static placeholder - replace with useFetch hook
    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            company: { name: "TechCorp", logo: "/placeholder.svg?height=40&width=40" },
            location: "San Francisco, CA",
            type: "Full-time",
            salary: { min: 150000, max: 200000 },
            postedAt: "2 days ago",
        },
        {
            id: "2",
            title: "React Engineer",
            company: { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=40" },
            location: "Remote",
            type: "Contract",
            salary: { min: 120000, max: 160000 },
            postedAt: "1 week ago",
        },
    ];

    const loading = false;
    const error = null;
    const refetch = () => console.log("TODO: Implement refetch");

    return (
        <div>
            {/* Header with Refetch */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-medium">Job Listings</h2>
                    <button
                        type="button"
                        onClick={refetch}
                        className="flex items-center gap-2 rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-neutral-400 hover:bg-neutral-800 transition-colors"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Refresh
                    </button>
                </div>
                <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-neutral-700 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                >
                    <Filter className="h-4 w-4" />
                    Filters
                </button>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
                {jobs.map((job) => (
                    <article
                        key={job.id}
                        className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex gap-4">
                            <img
                                src={job.company.logo || "/placeholder.svg"}
                                alt={job.company.name}
                                className="h-12 w-12 rounded-lg bg-neutral-800 object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-medium">{job.title}</h3>
                                        <div className="flex items-center gap-2 mt-1 text-sm text-neutral-400">
                                            <Building2 className="h-4 w-4" />
                                            {job.company.name}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="p-2 rounded-lg hover:bg-neutral-800"
                                    >
                                        <Bookmark className="h-5 w-5 text-neutral-400" />
                                    </button>
                                </div>

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

                                <div className="flex gap-3 mt-4">
                                    <button
                                        type="button"
                                        className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                                    >
                                        Details
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
                    Hook State Debug
                </h4>
                <div className="grid grid-cols-4 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Loading:</span>
                        <span className="ml-2 text-blue-400">{String(loading)}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Error:</span>
                        <span className="ml-2 text-red-400">{error || "null"}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Data:</span>
                        <span className="ml-2 text-emerald-400">{jobs.length} items</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Refetch:</span>
                        <span className="ml-2 text-amber-400">function</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
