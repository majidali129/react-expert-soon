import { ArrowLeft, Activity } from "lucide-react";
import { Link } from "react-router";
import { DashboardLayout } from "./components/dashboard-layout";

export const PropsDrilling = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/state-management/phase-1"
                            className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-lg font-semibold">
                                1.4 Prop Drilling & Re-renders
                            </h1>
                            <p className="text-xs text-neutral-500">
                                Performance analysis with React DevTools Profiler
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Instructions */}
                <div className="mb-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <h3 className="font-semibold text-emerald-400 mb-2">Your Tasks</h3>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>
                            1. Identify prop drilling (user data passed 5+ levels deep)
                        </li>
                        <li>
                            2. Use React DevTools Profiler to measure unnecessary
                            re-renders
                        </li>
                        <li>3. Apply React.memo to pure components</li>
                        <li>4. Optimize callbacks with useCallback</li>
                        <li>5. Memoize expensive calculations with useMemo</li>
                        <li>6. Refactor with composition pattern to avoid drilling</li>
                    </ul>
                </div>

                {/* Render Counter Info */}
                <div className="mb-6 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-amber-400" />
                        <h4 className="text-sm font-medium text-amber-400">
                            Render Analysis Mode
                        </h4>
                    </div>
                    <p className="text-xs text-neutral-400">
                        Each component shows a render counter. Watch how changing user
                        name causes ALL components to re-render. Your goal is to minimize
                        unnecessary re-renders using React.memo, useCallback, and useMemo.
                    </p>
                </div>

                {/* Dashboard with Prop Drilling Problem */}
                <DashboardLayout />
            </main>
        </div>
    );
};
