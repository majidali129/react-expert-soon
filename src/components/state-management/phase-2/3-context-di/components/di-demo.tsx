import { Server, Flag, BarChart3 } from "lucide-react";

export const DIDemo = () => {
    // TODO: Create and use these contexts:
    // const api = useAPIClient()
    // const flags = useFeatureFlags()
    // const analytics = useAnalytics()

    return (
        <div className="space-y-4">
            {/* API Client */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Server className="w-4 h-4 text-blue-400" />
                    <h4 className="font-medium">API Client Context</h4>
                </div>
                <p className="text-xs text-neutral-500 mb-3">
                    Inject different API clients for dev/prod/test environments
                </p>
                <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-neutral-800 rounded">
                        <span className="text-sm">Base URL</span>
                        <code className="text-xs text-emerald-400">
                            https://api.example.com
                        </code>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-800 rounded">
                        <span className="text-sm">Environment</span>
                        <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">
                            development
                        </span>
                    </div>
                    <button
                        type="button"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm transition-colors"
                    >
                        Test API Call
                    </button>
                </div>
            </div>

            {/* Feature Flags */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Flag className="w-4 h-4 text-purple-400" />
                    <h4 className="font-medium">Feature Flags Context</h4>
                </div>
                <p className="text-xs text-neutral-500 mb-3">
                    Toggle features without redeploying
                </p>
                <div className="space-y-2">
                    {[
                        { name: "newCheckout", enabled: true },
                        { name: "darkMode", enabled: true },
                        { name: "betaFeatures", enabled: false },
                        { name: "analyticsV2", enabled: true },
                    ].map((flag) => (
                        <div
                            key={flag.name}
                            className="flex items-center justify-between p-2 bg-neutral-800 rounded"
                        >
                            <span className="text-sm font-mono">{flag.name}</span>
                            <span
                                className={`text-xs px-2 py-0.5 rounded ${
                                    flag.enabled
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "bg-neutral-600/20 text-neutral-400"
                                }`}
                            >
                                {flag.enabled ? "ON" : "OFF"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Analytics */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    <h4 className="font-medium">Analytics Context</h4>
                </div>
                <p className="text-xs text-neutral-500 mb-3">
                    Track events without prop drilling
                </p>
                <div className="space-y-2">
                    <button
                        type="button"
                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
                        // TODO: analytics.track('button_click', { button: 'cta' })
                    >
                        Track Button Click
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
                        // TODO: analytics.track('page_view', { page: 'demo' })
                    >
                        Track Page View
                    </button>
                </div>
                <div className="mt-3 p-2 bg-neutral-800 rounded">
                    <p className="text-xs text-neutral-500">Last Event:</p>
                    <code className="text-xs text-amber-400">None tracked yet</code>
                </div>
            </div>
        </div>
    );
};
