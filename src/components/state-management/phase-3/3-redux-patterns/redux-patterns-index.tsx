import { ArrowLeft, ArrowRight } from "lucide-react";
import { NormalizedStateDemo } from "./components/normalized-state-demo";
import { Link } from "react-router";

export const ReduxPatterns = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/state-management/phase-3"
                                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-lg font-semibold">
                                    3.3 Redux Patterns
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    Normalized state, Selectors, Best Practices
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-3/4-redux-toolkit"
                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                        >
                            Next: Redux Toolkit <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Learning Objectives */}
                <div className="mb-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <h2 className="font-medium text-purple-400 mb-2">
                        Learning Objectives
                    </h2>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>
                            - Understand normalized state shape (entities + ids pattern)
                        </li>
                        <li>- Create memoized selectors with Reselect</li>
                        <li>- Implement Duck pattern for modular code</li>
                        <li>- Add TypeScript for type-safe Redux</li>
                    </ul>
                </div>

                {/* Normalized vs Nested Comparison */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-red-400 mb-3">
                            Nested State (Avoid)
                        </h3>
                        <pre className="text-xs text-neutral-400 bg-neutral-900 p-3 rounded-lg overflow-x-auto">
                            {`{
  orders: [
    {
      id: "o1",
      customer: {
        id: "c1",
        name: "John",
        address: {...}
      },
      products: [
        { id: "p1", name: "Widget", ... },
        { id: "p2", name: "Gadget", ... }
      ]
    }
  ]
}
// Problems:
// - Deep updates are complex
// - Duplicated data
// - Hard to find specific entity`}
                        </pre>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-green-400 mb-3">
                            Normalized State (Recommended)
                        </h3>
                        <pre className="text-xs text-neutral-400 bg-neutral-900 p-3 rounded-lg overflow-x-auto">
                            {`{
  entities: {
    orders: { "o1": { id: "o1", customerId: "c1", productIds: ["p1", "p2"] } },
    customers: { "c1": { id: "c1", name: "John" } },
    products: { "p1": {...}, "p2": {...} }
  },
  ids: {
    orders: ["o1"],
    customers: ["c1"],
    products: ["p1", "p2"]
  }
}
// Benefits:
// - Flat updates, Single source of truth
// - O(1) lookups, Easy relationships`}
                        </pre>
                    </div>
                </div>

                <NormalizedStateDemo />
            </main>
        </div>
    );
};
