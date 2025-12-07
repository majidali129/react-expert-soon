import { BarChart3, Package, ShoppingCart, Users } from "lucide-react";
import { UserAvatar } from "./user-avatar";
import React from "react";

export const Sidebar = React.memo(
    ({ user }: { user: { name: string; role: string; avatar: string } }) => {
        console.log("Sidebar render!!!!!!!");
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
    },
);

export const SidebarUserProfile = ({
    user,
}: {
    user: { name: string; role: string; avatar: string };
}) => {
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
};
