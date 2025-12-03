import { Plus, Minus, RotateCcw } from "lucide-react";

export const QuickActions = () => {
    // TODO: Add counter state for demonstrating batching
    // const [counter, setCounter] = useState(0)
    // const [batchedCounter, setBatchedCounter] = useState(0)

    // TODO: Non-batched increment (multiple setState calls)
    // const incrementNonBatched = () => {
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    //   // Result: Only increments by 1 (stale closure)
    // }

    // TODO: Batched with functional update
    // const incrementBatched = () => {
    //   setBatchedCounter(prev => prev + 1)
    //   setBatchedCounter(prev => prev + 1)
    //   setBatchedCounter(prev => prev + 1)
    //   // Result: Increments by 3 (functional updates)
    // }

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <h3 className="font-medium mb-4">Quick Actions</h3>

            {/* Non-batched Counter */}
            <div className="mb-6 p-4 bg-neutral-800/50 rounded-lg">
                <p className="text-xs text-neutral-500 mb-2">
                    Non-batched (stale closure)
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">0</span>
                    {/* TODO: Display actual counter value */}
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="p-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
                            // TODO: onClick for non-batched decrement
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            className="p-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
                            // TODO: onClick={incrementNonBatched}
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                    Clicking + calls setState 3 times but increments by 1
                </p>
            </div>

            {/* Batched Counter */}
            <div className="mb-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                <p className="text-xs text-emerald-400 mb-2">
                    Batched (functional updates)
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">0</span>
                    {/* TODO: Display actual batchedCounter value */}
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="p-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
                            // TODO: onClick for batched decrement
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            className="p-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
                            // TODO: onClick={incrementBatched}
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                    Clicking + calls setState 3 times and increments by 3
                </p>
            </div>

            {/* Reset */}
            <button
                type="reset"
                className="w-full flex items-center justify-center gap-2 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors text-sm"
            >
                <RotateCcw className="w-4 h-4" />
                Reset All Counters
            </button>
        </div>
    );
};
