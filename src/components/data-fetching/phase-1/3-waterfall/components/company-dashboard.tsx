import { Building2, Users, Briefcase, Star, TrendingUp, Clock } from "lucide-react";

// TODO: Implement waterfall pattern first, then fix with Promise.all
// Simulate API calls with delays to see the waterfall effect

export const CompanyDashboard = () => {
    // Static data - will be fetched
    const company = {
        id: "1",
        name: "TechCorp Industries",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Technology",
        size: "1000-5000 employees",
        founded: "2010",
        description:
            "Leading technology company specializing in cloud solutions and enterprise software.",
    };

    const jobs = [
        { id: "1", title: "Senior Frontend Developer", applicants: 45, status: "active" },
        { id: "2", title: "Backend Engineer", applicants: 32, status: "active" },
        { id: "3", title: "Product Designer", applicants: 28, status: "active" },
    ];

    const stats = {
        totalJobs: 12,
        totalApplications: 340,
        avgTimeToHire: "21 days",
        acceptanceRate: "8%",
    };

    const reviews = [
        { id: "1", rating: 4.5, title: "Great culture", author: "Anonymous" },
        { id: "2", rating: 4.0, title: "Good benefits", author: "Former Employee" },
    ];

    // TODO: Track loading times
    const loadTimes = {
        company: 0,
        jobs: 0,
        stats: 0,
        reviews: 0,
        total: 0,
    };

    return (
        <div className="space-y-6">
            {/* Company Header */}
            <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                <div className="flex gap-6">
                    <img
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        className="h-20 w-20 rounded-xl bg-neutral-800 object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold">{company.name}</h2>
                        <div className="flex items-center gap-4 mt-2 text-sm text-neutral-400">
                            <span className="flex items-center gap-1.5">
                                <Building2 className="h-4 w-4" />
                                {company.industry}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Users className="h-4 w-4" />
                                {company.size}
                            </span>
                        </div>
                        <p className="text-sm text-neutral-400 mt-3 max-w-xl">
                            {company.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Grid - fetched separately */}
            <div className="grid gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">Open Jobs</span>
                        <Briefcase className="h-5 w-5 text-blue-400" />
                    </div>
                    <p className="text-2xl font-semibold mt-2">{stats.totalJobs}</p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">Applications</span>
                        <Users className="h-5 w-5 text-emerald-400" />
                    </div>
                    <p className="text-2xl font-semibold mt-2">
                        {stats.totalApplications}
                    </p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">
                            Avg. Time to Hire
                        </span>
                        <Clock className="h-5 w-5 text-amber-400" />
                    </div>
                    <p className="text-2xl font-semibold mt-2">{stats.avgTimeToHire}</p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">Acceptance Rate</span>
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-2xl font-semibold mt-2">{stats.acceptanceRate}</p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Active Jobs - fetched separately */}
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h3 className="font-medium mb-4">Active Job Postings</h3>
                    <div className="space-y-3">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/50"
                            >
                                <div>
                                    <p className="text-sm font-medium">{job.title}</p>
                                    <p className="text-xs text-neutral-400">
                                        {job.applicants} applicants
                                    </p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
                                    {job.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews - fetched separately */}
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h3 className="font-medium mb-4">Employee Reviews</h3>
                    <div className="space-y-3">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="p-3 rounded-lg bg-neutral-900/50"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium">{review.title}</p>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span className="text-sm">{review.rating}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-neutral-400">
                                    by {review.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Performance Debug Panel */}
            <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">
                    Request Timing Debug
                </h4>
                <div className="grid gap-4 sm:grid-cols-5">
                    <div className="text-center p-3 rounded-lg bg-neutral-800/50">
                        <p className="text-xs text-neutral-500 mb-1">Company</p>
                        <p className="text-lg font-mono text-blue-400">
                            {loadTimes.company}ms
                        </p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-neutral-800/50">
                        <p className="text-xs text-neutral-500 mb-1">Jobs</p>
                        <p className="text-lg font-mono text-blue-400">
                            {loadTimes.jobs}ms
                        </p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-neutral-800/50">
                        <p className="text-xs text-neutral-500 mb-1">Stats</p>
                        <p className="text-lg font-mono text-blue-400">
                            {loadTimes.stats}ms
                        </p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-neutral-800/50">
                        <p className="text-xs text-neutral-500 mb-1">Reviews</p>
                        <p className="text-lg font-mono text-blue-400">
                            {loadTimes.reviews}ms
                        </p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <p className="text-xs text-amber-400 mb-1">Total</p>
                        <p className="text-lg font-mono text-amber-400">
                            {loadTimes.total}ms
                        </p>
                    </div>
                </div>
                <p className="text-xs text-neutral-500 mt-4 text-center">
                    Waterfall: ~2000ms | Parallel: ~500ms (4x faster)
                </p>
            </div>
        </div>
    );
};
