import { ArrowLeft, ArrowRight, Zap, Layers, Box, Settings } from "lucide-react";
import { Link } from "react-router";

const sections = [
    {
        id: "1-zustand-basics",
        title: "Zustand Basics",
        description: "Create store, selectors, actions",
        icon: Zap,
        route: "/state-management/phase-4/1-zustand-basics",
        concepts: ["create()", "State + actions", "Selectors", "getState()"],
    },
    {
        id: "2-zustand-patterns",
        title: "Zustand Patterns",
        description: "Slices, Immer, TypeScript",
        icon: Layers,
        route: "/state-management/phase-4/2-zustand-patterns",
        concepts: [
            "Store slicing",
            "Immer integration",
            "TypeScript patterns",
            "Computed state",
        ],
    },
    {
        id: "3-zustand-context",
        title: "Zustand + Context",
        description: "Scoped stores for special cases",
        icon: Box,
        route: "/state-management/phase-4/3-zustand-context",
        concepts: [
            "Scoped stores",
            "Instance per Provider",
            "Multi-tenant",
            "When to use",
        ],
    },
    {
        id: "4-zustand-middleware",
        title: "Zustand Middlewares",
        description: "Persist, devtools, custom",
        icon: Settings,
        route: "/state-management/phase-4/4-zustand-middleware",
        concepts: ["persist", "devtools", "Custom middleware", "Hydration"],
    },
];

export const Phase4Home = () => {
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
                                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Phase 4: Zustand
                                    </h1>
                                    <p className="text-xs text-neutral-500">
                                        Modern lightweight state management
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
                        Learn Zustand - a small, fast, and scalable state management
                        solution. Understand when to choose it over Redux and how to use
                        it effectively.
                    </p>
                </div>

                <div className="grid gap-4">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.id}
                            to={section.route}
                            className="group flex items-center gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                <section.icon className="w-6 h-6 text-amber-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-neutral-500">
                                        4.{idx + 1}
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
                            <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                    ))}
                </div>

                {/* Zustand vs Redux Comparison */}
                <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">
                        Zustand vs Redux: Quick Comparison
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                            <h4 className="text-sm font-medium text-amber-400 mb-2">
                                Zustand
                            </h4>
                            <ul className="text-xs text-neutral-400 space-y-1">
                                <li>+ Minimal boilerplate</li>
                                <li>+ No providers needed</li>
                                <li>+ Built-in devtools & persist</li>
                                <li>+ Smaller bundle size (~1KB)</li>
                                <li>- Less ecosystem/tooling</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                            <h4 className="text-sm font-medium text-purple-400 mb-2">
                                Redux (RTK)
                            </h4>
                            <ul className="text-xs text-neutral-400 space-y-1">
                                <li>+ Mature ecosystem</li>
                                <li>+ RTK Query for data fetching</li>
                                <li>+ Time-travel debugging</li>
                                <li>+ Better for large teams</li>
                                <li>- More boilerplate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
