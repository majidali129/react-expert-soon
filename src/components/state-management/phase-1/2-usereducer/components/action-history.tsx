import { History, ArrowRight } from "lucide-react";

export const ActionHistory = () => {
    // TODO: Track dispatched actions for undo/redo
    const mockHistory = [
        { type: "ADD_ITEM", payload: "Wireless Mouse", timestamp: "10:23:45" },
        { type: "ADD_ITEM", payload: "Mechanical Keyboard", timestamp: "10:23:48" },
        { type: "UPDATE_QUANTITY", payload: "Wireless Mouse: 2", timestamp: "10:23:52" },
    ];

    const getActionColor = (type: string) => {
        switch (type) {
            case "ADD_ITEM":
                return "text-emerald-400";
            case "REMOVE_ITEM":
                return "text-red-400";
            case "UPDATE_QUANTITY":
                return "text-blue-400";
            case "CLEAR_CART":
                return "text-amber-400";
            default:
                return "text-neutral-400";
        }
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
                <History className="w-4 h-4 text-neutral-500" />
                <h3 className="font-medium">Action History</h3>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
                {mockHistory.map((action) => (
                    <div
                        key={action.type}
                        className="flex items-center gap-2 p-2 bg-neutral-800/50 rounded text-xs font-mono"
                    >
                        <ArrowRight className="w-3 h-3 text-neutral-600 shrink-0" />
                        <span className={getActionColor(action.type)}>{action.type}</span>
                        <span className="text-neutral-500 truncate flex-1">
                            {action.payload}
                        </span>
                        <span className="text-neutral-600 shrink-0">
                            {action.timestamp}
                        </span>
                    </div>
                ))}
            </div>

            <p className="text-xs text-neutral-600 mt-3">
                Implement action history for undo/redo functionality
            </p>
        </div>
    );
};
