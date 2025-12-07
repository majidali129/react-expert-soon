import { User } from "lucide-react";
import React from "react";

export const UserAvatar = React.memo(
    ({
        user,
        size,
    }: {
        user: { name: string; role: string; avatar: string };
        size: "sm" | "lg";
    }) => {
        console.log("User avatar render!!!!!!!");
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
    },
);
