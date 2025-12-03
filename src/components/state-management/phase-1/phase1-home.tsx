import {
    ArrowLeft,
    ArrowRight,
    Database,
    Hash,
    GitBranch,
    Link2,
    Search,
} from "lucide-react";
import { Link } from "react-router";

const sections = [
    {
        id: "1-usestate",
        title: "useState Patterns",
        description: "Individual, grouped, array state & batching",
        icon: Hash,
        route: "/state-management/phase-1/1-usestate",
        concepts: [
            "Primitive state",
            "Object state",
            "Array state",
            "Functional updates",
            "Batching",
        ],
    },
    {
        id: "2-usereducer",
        title: "useReducer",
        description: "Reducer pattern for complex state",
        icon: GitBranch,
        route: "/state-management/phase-1/2-usereducer",
        concepts: ["Action types", "Payloads", "Complex transitions", "Undo/Redo"],
    },
    {
        id: "3-routing-state",
        title: "State + Routing",
        description: "URL state synchronization",
        icon: Link2,
        route: "/state-management/phase-1/3-routing-state",
        concepts: ["useSearchParams", "useParams", "URL persistence", "Navigation"],
    },
    {
        id: "4-prop-drilling",
        title: "Prop Drilling & Re-renders",
        description: "Performance analysis & optimization",
        icon: Search,
        route: "/state-management/phase-1/4-prop-drilling",
        concepts: ["React.memo", "useCallback", "useMemo", "Composition pattern"],
    },
];

export default function Phase1Home() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/state-management"
                                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                    <Database className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Phase 1: Local State
                                    </h1>
                                    <p className="text-xs text-neutral-500">
                                        useState, useReducer, Routing, Optimization
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <p className="text-neutral-400">
                        Master local state management in React. Learn when to use useState
                        vs useReducer, how to sync state with URL, and how to optimize
                        re-renders.
                    </p>
                </div>

                <div className="grid gap-4">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.id}
                            to={section.route}
                            className="group flex items-center gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                <section.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-neutral-500">
                                        1.{idx + 1}
                                    </span>
                                    <h3 className="font-semibold">{section.title}</h3>
                                </div>
                                <p className="text-sm text-neutral-400 mb-3">
                                    {section.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {section.concepts.map((concept) => (
                                        <span
                                            key={concept}
                                            className="px-2 py-0.5 rounded text-xs bg-neutral-800 text-neutral-400"
                                        >
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
