import { Link2, Copy } from "lucide-react";

export const UrlDebugger = () => {
    // TODO: Show actual URL params
    // const searchParams = useSearchParams()
    // const pathname = usePathname()

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sticky top-24">
            <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-4 h-4 text-emerald-400" />
                <h3 className="font-medium">URL State Debugger</h3>
            </div>

            {/* Current URL */}
            <div className="mb-4">
                <p className="text-xs text-neutral-500 mb-2">Current URL</p>
                <div className="p-2 bg-neutral-800 rounded-lg flex items-center gap-2">
                    <code className="text-xs font-mono text-emerald-400 flex-1 truncate">
                        /phase-1/3-routing-state
                    </code>
                    <button type="button" className="p-1 hover:bg-neutral-700 rounded">
                        <Copy className="w-3 h-3 text-neutral-500" />
                    </button>
                </div>
            </div>

            {/* Parsed Params */}
            <div className="mb-4">
                <p className="text-xs text-neutral-500 mb-2">Parsed Params</p>
                <div className="p-3 bg-neutral-800 rounded-lg font-mono text-xs">
                    <pre className="text-neutral-300">
                        {`{
  "status": "all",
  "dateRange": "all",
  "sort": "newest",
  "page": 1
}`}
                    </pre>
                </div>
            </div>

            {/* Quick Actions */}
            <div>
                <p className="text-xs text-neutral-500 mb-2">Quick Test Links</p>
                <div className="space-y-2">
                    {[
                        {
                            label: "Processing + This Week",
                            params: "?status=processing&dateRange=week",
                        },
                        {
                            label: "Delivered + Page 2",
                            params: "?status=delivered&page=2",
                        },
                        { label: "Highest Value", params: "?sort=highest" },
                    ].map((link) => (
                        <button
                            type="button"
                            key={link.label}
                            className="w-full text-left px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs transition-colors"
                        >
                            <span className="text-neutral-300">{link.label}</span>
                            <code className="block text-neutral-500 truncate mt-0.5">
                                {link.params}
                            </code>
                        </button>
                    ))}
                </div>
            </div>

            <p className="text-xs text-neutral-600 mt-4">
                Try using browser back/forward after changing filters
            </p>
        </div>
    );
};
