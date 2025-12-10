import { AlertCircle, RefreshCw } from "lucide-react";

export const ErrorFallback = ({ error }: { error: string }) => {
    return (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8 text-center">
            <AlertCircle className="h-10 w-10 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-red-400 mb-2">Failed to Load Jobs</h3>
            <p className="text-sm text-neutral-400 mb-6">{error}</p>
            <button
                onClick={() => window.location.reload()}
                type="button"
                // TODO: onClick={refetch}
                className="inline-flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20 transition-colors"
            >
                <RefreshCw className="h-4 w-4" />
                Try Again
            </button>
        </div>
    );
};
