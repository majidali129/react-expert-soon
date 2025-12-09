import {
    ArrowLeft,
    GitBranch,
    Server,
    Shield,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router";

export const Phase2Overview = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-5xl px-6 py-6">
                    <Link
                        to="/data-fetching"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-medium text-emerald-400 border border-emerald-500/20">
                            2
                        </span>
                        <div>
                            <h1 className="text-xl font-semibold">
                                Phase 2: State Library Integration
                            </h1>
                            <p className="text-sm text-neutral-400">
                                Context DI, Redux Thunk, RTK, and Zustand
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-8">
                <div className="space-y-4">
                    {/* 2.1 Context DI */}
                    <Link
                        to="/data-fetching/phase-2/1-context-di"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <GitBranch className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        2.1 Context for Dependency Injection
                                    </h2>
                                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                                        Architecture
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Auth, theme, permissions, and API client injection via
                                    Context.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "AuthContext",
                                        "ThemeContext",
                                        "PermissionsContext",
                                        "API client DI",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 2.2 Redux Thunk */}
                    <Link
                        to="/data-fetching/phase-2/2-redux-thunk"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <Server className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        2.2 Redux Thunk (Classic)
                                    </h2>
                                    <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                                        Legacy
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Traditional Redux with thunk middleware for async
                                    actions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "createStore",
                                        "applyMiddleware",
                                        "Thunk actions",
                                        "dispatch",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 2.3 RTK Async */}
                    <Link
                        to="/data-fetching/phase-2/3-rtk-async"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <Shield className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        2.3 RTK createAsyncThunk
                                    </h2>
                                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                        Modern
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Redux Toolkit's built-in async handling with
                                    extraReducers.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "createAsyncThunk",
                                        "extraReducers",
                                        "rejectWithValue",
                                        "Type safety",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 2.4 Zustand */}
                    <Link
                        to="/data-fetching/phase-2/4-zustand"
                        className="block rounded-xl border border-neutral-800 bg-[#0f0f10] p-6 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <Sparkles className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">
                                        2.4 Zustand Async Handling
                                    </h2>
                                    <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                                        Minimal
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400 mt-1 mb-4">
                                    Lightweight state management with built-in async
                                    patterns.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "create store",
                                        "Async actions",
                                        "Selectors",
                                        "No boilerplate",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Success Criteria */}
                <section className="mt-10 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        Phase 2 Success Criteria
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            "Auth flow managed via Context",
                            "Permissions control route access",
                            "Theme toggles without prop drilling",
                            "Redux thunk pattern understood",
                            "RTK async thunk implemented",
                            "extraReducers handles all states",
                            "Zustand store works with async",
                            "Can compare verbosity across libs",
                        ].map((item, i) => (
                            <label
                                key={item}
                                className="flex items-center gap-3 text-sm text-neutral-300"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-neutral-600 bg-neutral-800"
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};
