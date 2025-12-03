"use client";

import {
    User,
    Bell,
    Settings,
    BarChart3,
    Package,
    ShoppingCart,
    Users,
} from "lucide-react";
import { useState, useEffect } from "react";

// Default export to match the requirement
export const DashboardLayout = () => {
    const [user, setUser] = useState({ name: "John Doe", role: "Admin", avatar: "..." });
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount((prev) => prev + 1);
    }, []);

    return (
        <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <div className="bg-red-500/10 px-3 py-1 text-xs text-red-400 flex items-center justify-between">
                <span>DashboardLayout</span>
                <span>Renders: {renderCount}</span>
            </div>

            <div className="flex">
                <Sidebar user={user} />
                <div className="flex-1">
                    <Header user={user} />
                    <MainContent user={user} />
                </div>
            </div>
        </div>
    );
};

function Sidebar({ user }: { user: { name: string; role: string; avatar: string } }) {
    return (
        <div className="w-64 bg-neutral-900 border-r border-neutral-800">
            <div className="bg-blue-500/10 px-3 py-1 text-xs text-blue-400 flex items-center justify-between">
                <span>Sidebar (Level 1)</span>
                <span>Renders: 1</span>
            </div>
            <div className="p-4">
                <SidebarUserProfile user={user} />
                <nav className="mt-6 space-y-1">
                    {[
                        { icon: BarChart3, label: "Dashboard" },
                        { icon: Package, label: "Products" },
                        { icon: ShoppingCart, label: "Orders" },
                        { icon: Users, label: "Customers" },
                    ].map((item) => (
                        <button
                            type="button"
                            key={item.label}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

function SidebarUserProfile({
    user,
}: {
    user: { name: string; role: string; avatar: string };
}) {
    return (
        <div>
            <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 flex items-center justify-between mb-2 rounded">
                <span>SidebarUserProfile (L2)</span>
                <span>Renders: 1</span>
            </div>
            <UserAvatar user={user} size="lg" />
            <div className="mt-2">
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-neutral-500">{user.role}</p>
            </div>
        </div>
    );
}

function Header({ user }: { user: { name: string; role: string; avatar: string } }) {
    return (
        <header className="border-b border-neutral-800">
            <div className="bg-blue-500/10 px-3 py-1 text-xs text-blue-400 flex items-center justify-between">
                <span>Header (Level 1)</span>
                <span>Renders: 1</span>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Dashboard Overview</h2>
                <HeaderActions user={user} />
            </div>
        </header>
    );
}

function HeaderActions({
    user,
}: {
    user: { name: string; role: string; avatar: string };
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 rounded">
                HeaderActions (L2) - Renders: 1
            </div>
            <button
                type="button"
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            >
                <Bell className="w-5 h-5 text-neutral-400" />
            </button>
            <button
                type="button"
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            >
                <Settings className="w-5 h-5 text-neutral-400" />
            </button>
            <UserMenu user={user} />
        </div>
    );
}

function UserMenu({ user }: { user: { name: string; role: string; avatar: string } }) {
    return (
        <div className="flex items-center gap-2">
            <div className="bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400 rounded">
                UserMenu (L3) - Renders: 1
            </div>
            <UserAvatar user={user} size="sm" />
            <span className="text-sm">{user.name}</span>
        </div>
    );
}

function UserAvatar({
    user,
    size,
}: {
    user: { name: string; role: string; avatar: string };
    size: "sm" | "lg";
}) {
    const sizeClass = size === "lg" ? "w-12 h-12" : "w-8 h-8";
    return (
        <div className="relative">
            <div className="bg-emerald-500/10 px-1 py-0.5 text-[10px] text-emerald-400 rounded absolute -top-4 left-0 whitespace-nowrap">
                Avatar (L{size === "lg" ? "3" : "4"})
            </div>
            <div
                className={`${sizeClass} rounded-full bg-neutral-700 flex items-center justify-center`}
            >
                <User className={size === "lg" ? "w-6 h-6" : "w-4 h-4"} />
            </div>
        </div>
    );
}

function MainContent({ user }: { user: { name: string; role: string; avatar: string } }) {
    return (
        <main className="p-6">
            <div className="bg-blue-500/10 px-3 py-1 text-xs text-blue-400 flex items-center justify-between mb-4 rounded">
                <span>MainContent (Level 1)</span>
                <span>Renders: 1</span>
            </div>
            <WelcomeCard user={user} />
            <StatsGrid />
        </main>
    );
}

function WelcomeCard({ user }: { user: { name: string; role: string; avatar: string } }) {
    return (
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-6 mb-6">
            <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 rounded inline-block mb-2">
                WelcomeCard (L2) - Renders: 1
            </div>
            <UserGreeting user={user} />
        </div>
    );
}

function UserGreeting({
    user,
}: {
    user: { name: string; role: string; avatar: string };
}) {
    return (
        <div>
            <div className="bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400 rounded inline-block mb-2">
                UserGreeting (L3) - Renders: 1
            </div>
            <h3 className="text-xl font-semibold">Welcome back, {user.name}!</h3>
            <p className="text-neutral-400 mt-1">
                Here is what is happening with your store today.
            </p>
        </div>
    );
}

function StatsGrid() {
    const stats = [
        { label: "Revenue", value: "$12,450", change: "+12%" },
        { label: "Orders", value: "156", change: "+8%" },
        { label: "Customers", value: "2,847", change: "+23%" },
        { label: "Products", value: "1,284", change: "+4%" },
    ];

    return (
        <div>
            <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 rounded inline-block mb-4">
                StatsGrid (L2) - Renders: 1 (should NOT re-render on user change!)
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-neutral-900 border border-neutral-800 rounded-xl p-4"
                    >
                        <p className="text-neutral-500 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <span className="text-xs text-emerald-400">{stat.change}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
