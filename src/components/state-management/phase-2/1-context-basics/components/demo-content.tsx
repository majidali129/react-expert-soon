import { useSidebar } from "@/state/context/basics/sidebar-context";
import { useTheme } from "@/state/context/basics/theme-context";
import { BarChart3, Package, ShoppingCart, Users } from "lucide-react";

export const DemoContent = () => {
    const { theme } = useTheme();
    const { isOpen } = useSidebar();

    return (
        <div className="bg-card border border-input rounded-xl overflow-hidden">
            {/* Mini Dashboard Demo */}
            <div className="flex">
                {/* Sidebar */}
                <div
                    className={`border-r border-input transition-all duration-300 ${isOpen ? "w-42" : "w-16"}`}
                >
                    <div className="p-4">
                        <div
                            className={`flex items-center gap-2 ${!isOpen && "justify-center"}`}
                        >
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                <Package className="w-4 h-4 text-emerald-400" />
                            </div>
                            {isOpen && (
                                <span className="font-semibold text-sm">ShopAdmin</span>
                            )}
                        </div>
                    </div>
                    <nav className="px-2 space-y-1">
                        {[
                            { icon: BarChart3, label: "Dashboard" },
                            { icon: Package, label: "Products" },
                            { icon: ShoppingCart, label: "Orders" },
                            { icon: Users, label: "Customers" },
                        ].map((item) => (
                            <button
                                type="button"
                                key={item.label}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:bg-sidebar-accent transition-colors ${
                                    !isOpen && "justify-center"
                                }`}
                            >
                                <item.icon className="w-4 h-4 shrink-0" />
                                {isOpen && item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Main */}
                <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Dashboard</h3>
                        <span className="text-xs px-2 py-1 rounded bg-accent">
                            Theme: {theme}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: "Revenue", value: "$12,450" },
                            { label: "Orders", value: "156" },
                            { label: "Products", value: "1,284" },
                            { label: "Customers", value: "2,847" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-sidebar-accent rounded-lg p-3"
                            >
                                <p className="text-xs text-neutral-500">{stat.label}</p>
                                <p className="text-lg font-bold">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
