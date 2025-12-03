"use client";

import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
    // TODO: Use useTheme() from context
    const [theme] = useState<"dark" | "light">("dark");
    // const { theme, toggleTheme } = useTheme()

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <h4 className="text-sm font-medium mb-3">Theme</h4>
            <div className="flex gap-2">
                <button
                    type="button"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
                        theme === "light"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                    }`}
                    // TODO: onClick={toggleTheme}
                >
                    <Sun className="w-4 h-4" />
                    Light
                </button>
                <button
                    type="button"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
                        theme === "dark"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                    }`}
                    // TODO: onClick={toggleTheme}
                >
                    <Moon className="w-4 h-4" />
                    Dark
                </button>
            </div>
        </div>
    );
}
