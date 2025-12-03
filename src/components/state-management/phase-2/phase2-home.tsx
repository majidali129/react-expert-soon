import { ArrowLeft, ArrowRight, Layers, Split, Syringe } from "lucide-react";
import { Link } from "react-router";

const sections = [
    {
        id: "1-context-basics",
        title: "useContext Basics",
        description: "createContext, Provider, and useContext consumption",
        icon: Layers,
        route: "/state-management/phase-2/1-context-basics",
        concepts: ["createContext", "Provider pattern", "Default values", "Custom hooks"],
    },
    {
        id: "2-context-patterns",
        title: "Context Patterns",
        description: "State & Actions separation for performance",
        icon: Split,
        route: "/state-management/phase-2/2-context-patterns",
        concepts: [
            "Separate contexts",
            "Dispatch context",
            "Typed actions",
            "Performance",
        ],
    },
    {
        id: "3-context-di",
        title: "Context for DI",
        description: "Dependency injection use cases",
        icon: Syringe,
        route: "/state-management/phase-2/3-context-di",
        concepts: [
            "API client injection",
            "Feature flags",
            "Analytics",
            "When NOT to use",
        ],
    },
];

export default function Phase2Home() {
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
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                    <Layers className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Phase 2: Context API
                                    </h1>
                                    <p className="text-xs text-neutral-500">
                                        Basics, Patterns, Dependency Injection
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
                        Learn the Context API from basics to advanced patterns. Understand
                        when to use context, how to optimize performance, and when to
                        reach for other solutions.
                    </p>
                </div>

                <div className="grid gap-4">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.id}
                            to={section.route}
                            className="group flex items-center gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-500/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                <section.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-neutral-500">
                                        2.{idx + 1}
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
                            <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
