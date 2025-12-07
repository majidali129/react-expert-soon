import { useTheme } from "@/state/context/basics/theme-context";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleToDark, toggleToLight } = useTheme();

    return (
        <div className=" border border-neutral-800 rounded-xl p-4">
            <h4 className="text-sm font-medium mb-3">Theme</h4>
            <div className="flex gap-2">
                <button
                    type="button"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
                        theme === "light"
                            ? "bg-amber-800/10 text-amber-600 border border-amber-500/50"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                    }`}
                    onClick={toggleToLight}
                >
                    <Sun className="w-4 h-4" />
                    Light
                </button>
                <button
                    type="button"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
                        theme === "dark"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                    }`}
                    onClick={toggleToDark}
                >
                    <Moon className="w-4 h-4" />
                    Dark
                </button>
            </div>
        </div>
    );
}
