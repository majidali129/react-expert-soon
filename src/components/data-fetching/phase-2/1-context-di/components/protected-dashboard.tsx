import { User, Shield, Settings, LogOut, Bell, Eye, Lock } from "lucide-react";

// TODO: Create and use these contexts
// import { useAuth } from '@/contexts/auth-context'
// import { usePermissions } from '@/contexts/permissions-context'
// import { useAPI } from '@/contexts/api-context'

export const ProtectedDashboard = () => {
    // TODO: Replace with context values
    const user = {
        id: "1",
        name: "John Developer",
        email: "john@example.com",
        role: "admin" as const,
        avatar: "/placeholder.svg?height=40&width=40",
    };

    const isAuthenticated = true;
    const permissions = ["jobs:read", "jobs:write", "users:read", "analytics:read"];

    const hasPermission = (permission: string) => permissions.includes(permission);

    // Login form state (for unauthenticated view)
    if (!isAuthenticated) {
        return (
            <div className="max-w-md mx-auto">
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-8">
                    <div className="text-center mb-8">
                        <div className="h-12 w-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                            <Lock className="h-6 w-6 text-amber-400" />
                        </div>
                        <h2 className="text-xl font-semibold">Sign In</h2>
                        <p className="text-sm text-neutral-400 mt-1">
                            Access your dashboard
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-neutral-400 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm text-neutral-400 mb-2"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 pr-12 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    <Eye className="h-5 w-5 text-neutral-500" />
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            // onClick={login}
                            className="w-full rounded-lg bg-amber-500 py-3 text-sm font-medium text-neutral-900 hover:bg-amber-400 transition-colors"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* User Header */}
            <div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                <div className="flex items-center gap-4">
                    <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        className="h-12 w-12 rounded-full bg-neutral-800 object-cover"
                    />
                    <div>
                        <h2 className="font-medium">{user.name}</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-neutral-400">{user.email}</span>
                            <span
                                className={`text-xs px-2 py-0.5 rounded ${
                                    user.role === "admin"
                                        ? "bg-amber-500/10 text-amber-400"
                                        : "bg-blue-500/10 text-blue-400"
                                }`}
                            >
                                {user.role}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="p-2 rounded-lg hover:bg-neutral-800 transition-colors relative"
                    >
                        <Bell className="h-5 w-5 text-neutral-400" />
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-500" />
                    </button>
                    <button
                        type="button"
                        // onClick={logout}
                        className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                    >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Permissions Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { key: "jobs:read", label: "View Jobs", icon: Eye },
                    { key: "jobs:write", label: "Manage Jobs", icon: Settings },
                    { key: "users:read", label: "View Users", icon: User },
                    { key: "analytics:read", label: "Analytics", icon: Shield },
                ].map((perm) => {
                    const allowed = hasPermission(perm.key);
                    return (
                        <div
                            key={perm.key}
                            className={`rounded-xl border p-5 ${
                                allowed
                                    ? "border-emerald-500/20 bg-emerald-500/5"
                                    : "border-neutral-800 bg-neutral-900/50 opacity-50"
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <perm.icon
                                    className={`h-5 w-5 ${allowed ? "text-emerald-400" : "text-neutral-500"}`}
                                />
                                {allowed ? (
                                    <span className="text-xs text-emerald-400">
                                        Allowed
                                    </span>
                                ) : (
                                    <Lock className="h-4 w-4 text-neutral-500" />
                                )}
                            </div>
                            <p className="text-sm font-medium mt-3">{perm.label}</p>
                            <p className="text-xs text-neutral-500 mt-1">{perm.key}</p>
                        </div>
                    );
                })}
            </div>

            {/* Protected Content Areas */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Admin Only Section */}
                <div
                    className={`rounded-xl border p-6 ${
                        user.role === "admin"
                            ? "border-amber-500/20 bg-[#0f0f10]"
                            : "border-neutral-800 bg-neutral-900/30"
                    }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium flex items-center gap-2">
                            <Shield className="h-5 w-5 text-amber-400" />
                            Admin Panel
                        </h3>
                        {user.role !== "admin" && (
                            <span className="text-xs text-red-400 flex items-center gap-1">
                                <Lock className="h-3 w-3" />
                                Admin only
                            </span>
                        )}
                    </div>

                    {user.role === "admin" ? (
                        <div className="space-y-3">
                            <button
                                type="button"
                                className="w-full text-left p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                            >
                                <p className="text-sm font-medium">User Management</p>
                                <p className="text-xs text-neutral-400 mt-1">
                                    Manage all users
                                </p>
                            </button>
                            <button
                                type="button"
                                className="w-full text-left p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                            >
                                <p className="text-sm font-medium">System Settings</p>
                                <p className="text-xs text-neutral-400 mt-1">
                                    Configure platform
                                </p>
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-8 text-neutral-500">
                            <Lock className="h-8 w-8 mx-auto mb-3 opacity-50" />
                            <p className="text-sm">
                                You don't have access to this section
                            </p>
                        </div>
                    )}
                </div>

                {/* User Section */}
                <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-400" />
                        My Dashboard
                    </h3>
                    <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-neutral-800/50">
                            <p className="text-sm font-medium">My Applications</p>
                            <p className="text-xs text-neutral-400 mt-1">
                                Track your job applications
                            </p>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-800/50">
                            <p className="text-sm font-medium">Saved Jobs</p>
                            <p className="text-xs text-neutral-400 mt-1">
                                Jobs you've bookmarked
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Debug Panel */}
            <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Context Debug
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Authenticated:</span>
                        <span className="ml-2 text-emerald-400">
                            {String(isAuthenticated)}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Role:</span>
                        <span className="ml-2 text-amber-400">{user.role}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Permissions:</span>
                        <span className="ml-2 text-blue-400">{permissions.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
