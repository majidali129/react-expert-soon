import { ArrowLeft, Link2 } from "lucide-react";
import { OrderFilters } from "./components/order-filters";
import { OrderList } from "./components/order-list";
import { Pagination } from "./components/pagination";
import { UrlDebugger } from "./components/url-debugger";
import { Link } from "react-router";

export const RoutingState = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/state-management/phase-1"
                            className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-lg font-semibold">
                                1.3 State + Routing Hooks
                            </h1>
                            <p className="text-xs text-neutral-500">
                                URL state synchronization with useSearchParams
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Instructions */}
                <div className="mb-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <h3 className="font-semibold text-emerald-400 mb-2">Your Tasks</h3>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>1. Use useSearchParams to read/write filter state to URL</li>
                        <li>2. Sync status, date range, and page with URL params</li>
                        <li>3. Handle browser back/forward navigation</li>
                        <li>4. Persist filters across page reload</li>
                        <li>5. Update URL without full page reload</li>
                    </ul>
                </div>

                {/* URL Pattern Reference */}
                <div className="mb-6 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <Link2 className="w-4 h-4 text-amber-400" />
                        <h4 className="text-sm font-medium text-amber-400">
                            Expected URL Pattern
                        </h4>
                    </div>
                    <code className="text-xs font-mono text-neutral-400 block">
                        /state-management/phase-1/3-routing-state?status=processing&dateRange=week&page=2&sort=newest
                    </code>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <OrderFilters />
                        <OrderList />
                        <Pagination />
                    </div>
                    <div>
                        <UrlDebugger />
                    </div>
                </div>
            </main>
        </div>
    );
};
