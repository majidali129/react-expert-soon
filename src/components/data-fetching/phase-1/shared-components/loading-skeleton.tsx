import { Loader2 } from "lucide-react";

export const LoadingSkeleton = () => {
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
};
