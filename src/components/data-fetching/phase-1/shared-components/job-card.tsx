import type { Job } from "@/lib/api";
import { Bookmark, Building2, Clock, DollarSign, MapPin } from "lucide-react";

export const JobCard = ({ job }: { job: Job }) => {
    return (
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
                        {job.salary && (
                            <span className="flex items-center gap-1.5 text-emerald-400">
                                <DollarSign className="h-4 w-4" />$
                                {(job.salary.min / 1000).toFixed(0)}k - $
                                {(job.salary.max / 1000).toFixed(0)}k
                            </span>
                        )}
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
    );
};
