import { ArrowLeft } from "lucide-react";
import { DIDemo } from "./components/di-demo";
import { WhenToUseContext } from "./components/when-to-use-context";
import { Link } from "react-router";

export const ContextDI = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/state-management/phase-2"
                            className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-lg font-semibold">2.3 Context for DI</h1>
                            <p className="text-xs text-neutral-500">
                                Dependency injection use cases
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Instructions */}
                <div className="mb-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                    <h3 className="font-semibold text-blue-400 mb-2">Your Tasks</h3>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>1. Create APIClientContext for injecting fetch wrapper</li>
                        <li>2. Create FeatureFlagsContext for feature toggles</li>
                        <li>3. Create AnalyticsContext for tracking events</li>
                        <li>4. Understand when NOT to use context</li>
                        <li>5. Profile performance before/after</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <WhenToUseContext />
                    <DIDemo />
                </div>
            </main>
        </div>
    );
};
