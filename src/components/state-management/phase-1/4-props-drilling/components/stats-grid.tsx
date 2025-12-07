import React from "react";

export const StatsGrid = React.memo(() => {
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
});
