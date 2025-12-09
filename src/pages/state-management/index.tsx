import {
    Database,
    Layers,
    Box,
    Zap,
    ArrowRight,
    CheckCircle2,
    Clock,
    BarChart3,
    Package,
    ShoppingCart,
    Users,
} from "lucide-react";
import { Link } from "react-router";

const phases = [
    {
        id: 1,
        title: "Local State",
        description: "useState, useReducer, routing hooks, prop drilling analysis",
        icon: Database,
        route: "/state-management/phase-1",
        color: "from-emerald-500/20 to-emerald-600/20",
        borderColor: "border-emerald-500/30",
        topics: [
            "useState patterns",
            "useReducer",
            "URL state",
            "Re-render optimization",
        ],
    },
    {
        id: 2,
        title: "Context API",
        description: "createContext, useContext, patterns, dependency injection",
        icon: Layers,
        route: "/state-management/phase-2",
        color: "from-blue-500/20 to-blue-600/20",
        borderColor: "border-blue-500/30",
        topics: ["Context basics", "State/Dispatch split", "DI patterns", "Performance"],
    },
    {
        id: 3,
        title: "Redux Ecosystem",
        description: "Store, middleware, patterns, Redux Toolkit",
        icon: Box,
        route: "/state-management/phase-3",
        color: "from-purple-500/20 to-purple-600/20",
        borderColor: "border-purple-500/30",
        topics: ["Redux core", "Middleware", "Normalized state", "RTK + RTK Query"],
    },
    {
        id: 4,
        title: "Zustand",
        description: "Modern lightweight state management",
        icon: Zap,
        route: "/state-management/phase-4",
        color: "from-amber-500/20 to-amber-600/20",
        borderColor: "border-amber-500/30",
        topics: ["Store creation", "Slices & Immer", "Context scoping", "Middlewares"],
    },
];

const stats = [
    { label: "Total Revenue", value: "$124,500", icon: BarChart3, change: "+12.5%" },
    { label: "Products", value: "1,284", icon: Package, change: "+8.2%" },
    { label: "Orders", value: "356", icon: ShoppingCart, change: "+23.1%" },
    { label: "Customers", value: "2,847", icon: Users, change: "+4.7%" },
];

export default function StateManagementHomePage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* Header */}
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                                <Package className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">ShopAdmin</h1>
                                <p className="text-xs text-neutral-500">
                                    E-commerce Dashboard
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/"
                            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                        >
                            Back to Hub
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Hero Section */}
                <div className="mb-10">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
                        Project 3: State Management
                    </span>
                    <h2 className="text-3xl font-bold mb-3">
                        E-commerce Admin Dashboard
                    </h2>
                    <p className="text-neutral-400 max-w-2xl">
                        Master state management from local useState to global stores.
                        Build a complete admin dashboard managing products, orders,
                        customers, and inventory.
                    </p>
                </div>

                {/* Dashboard Preview - Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-neutral-900 border border-neutral-800 rounded-xl p-4"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <stat.icon className="w-5 h-5 text-neutral-500" />
                                <span className="text-xs text-emerald-400 font-medium">
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-sm text-neutral-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Phases Grid */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-neutral-500" />
                        Learning Phases
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {phases.map((phase) => (
                            <Link
                                key={phase.id}
                                to={phase.route}
                                className={`group relative bg-linear-to-br ${phase.color} border ${phase.borderColor} rounded-xl p-6 hover:border-neutral-600 transition-all duration-300`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                            <phase.icon className="w-5 h-5 text-neutral-300" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-neutral-500">
                                                Phase {phase.id}
                                            </span>
                                            <h4 className="font-semibold">
                                                {phase.title}
                                            </h4>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-1 transition-all" />
                                </div>
                                <p className="text-sm text-neutral-400 mb-4">
                                    {phase.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {phase.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-2 py-1 rounded-md text-xs bg-neutral-800/50 text-neutral-400"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Progress Tracker */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Progress Tracker</h3>
                    <div className="space-y-3">
                        {[
                            {
                                phase: "Phase 1",
                                task: "useState with object state",
                                done: false,
                            },
                            {
                                phase: "Phase 1",
                                task: "useReducer cart implementation",
                                done: false,
                            },
                            {
                                phase: "Phase 2",
                                task: "Context state/dispatch split",
                                done: false,
                            },
                            {
                                phase: "Phase 3",
                                task: "Redux normalized state",
                                done: false,
                            },
                            {
                                phase: "Phase 4",
                                task: "Zustand persist middleware",
                                done: false,
                            },
                        ].map((item) => (
                            <div
                                key={item.phase}
                                className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/30"
                            >
                                <CheckCircle2
                                    className={`w-5 h-5 ${item.done ? "text-emerald-500" : "text-neutral-600"}`}
                                />
                                <span className="text-xs text-neutral-500 w-16">
                                    {item.phase}
                                </span>
                                <span
                                    className={`text-sm ${item.done ? "text-neutral-400 line-through" : ""}`}
                                >
                                    {item.task}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-neutral-600 mt-4">
                        Track your progress manually as you complete each concept
                    </p>
                </div>
            </main>
        </div>
    );
}

// <Outlet />
