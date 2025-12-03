import { ArrowLeft, ArrowRight, Box, Layers, GitBranch, Zap } from "lucide-react";
import { Link } from "react-router";

const sections = [
    {
        id: "1-redux-core",
        title: "Redux Core",
        description: "Store, actions, reducers, connect HOC",
        icon: Box,
        route: "/state-management/phase-3/1-redux-core",
        concepts: [
            "createStore",
            "combineReducers",
            "connect",
            "useSelector/useDispatch",
        ],
    },
    {
        id: "2-redux-middleware",
        title: "Redux Middlewares",
        description: "Custom middleware creation",
        icon: Layers,
        route: "/state-management/phase-3/2-redux-middleware",
        concepts: ["Middleware signature", "Logger", "Analytics", "Error boundary"],
    },
    {
        id: "3-redux-patterns",
        title: "Redux Patterns",
        description: "Normalized state & best practices",
        icon: GitBranch,
        route: "/state-management/phase-3/3-redux-patterns",
        concepts: ["Normalized state", "Selectors", "Duck pattern", "TypeScript"],
    },
    {
        id: "4-redux-toolkit",
        title: "Redux Toolkit",
        description: "Modern Redux with RTK",
        icon: Zap,
        route: "/state-management/phase-3/4-redux-toolkit",
        concepts: ["configureStore", "createSlice", "createAsyncThunk", "RTK Query"],
    },
];

export const Phase3Home = () => {
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
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                    <Box className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Phase 3: Redux Ecosystem
                                    </h1>
                                    <p className="text-xs text-neutral-500">
                                        Core, Middleware, Patterns, RTK
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
                        Master Redux from the ground up. Learn core concepts, middleware
                        patterns, best practices, and modern Redux Toolkit.
                    </p>
                </div>

                <div className="grid gap-4">
                    {sections.map((section, idx) => (
                        <Link
                            key={section.id}
                            to={section.route}
                            className="group flex items-center gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-purple-500/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                                <section.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-neutral-500">
                                        3.{idx + 1}
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
                            <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};
