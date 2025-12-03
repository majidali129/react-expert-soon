import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { ProductFilters } from "./components/product-filters";
import { ProductTable } from "./components/product-table";
import { QuickActions } from "./components/quick-actions";
import { DebugPanel } from "./components/debug-panel";
export const UseState = () => {
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
                                1.1 useState Patterns
                            </h1>
                            <p className="text-xs text-neutral-500">
                                Individual, grouped, array state & batching
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
                            1. Add individual useState for each filter (search, status,
                            category)
                        </li>
                        <li>2. Use object state for grouping related filters together</li>
                        <li>
                            3. Implement array state for selectedProducts (bulk selection)
                        </li>
                        <li>
                            4. Demonstrate state batching with the Quick Actions counters
                        </li>
                        <li>
                            5. Use functional updates for increment/decrement operations
                        </li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 space-y-6">
                        {/* Filters - TODO: Add individual state for each filter */}
                        <ProductFilters />

                        {/* Products Table - TODO: Add array state for selection */}
                        <ProductTable />
                    </div>

                    <div className="space-y-6">
                        {/* Quick Actions - TODO: Demonstrate batching */}
                        <QuickActions />

                        {/* Debug Panel - Shows current state */}
                        <DebugPanel />
                    </div>
                </div>
            </main>
        </div>
    );
};
