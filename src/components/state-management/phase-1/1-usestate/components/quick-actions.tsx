import { Plus, Minus, RotateCcw } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";

type QuickActionsProps = {
    counter: number;
    batchedCounter: number;
    setCounter: Dispatch<SetStateAction<number>>;
    setBatchedCounter: Dispatch<SetStateAction<number>>;
};
export const QuickActions = ({
    counter,
    batchedCounter,
    setCounter,
    setBatchedCounter,
}: QuickActionsProps) => {
    const incrementNonBatched = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
    };

    const decrementNonBatched = () => {
        setCounter(counter - 1);
        setCounter(counter - 1);
        setCounter(counter - 1);
    };

    const incrementBatched = () => {
        setBatchedCounter((prev) => prev + 1);
        setBatchedCounter((prev) => prev + 1);
        setBatchedCounter((prev) => prev + 1);
    };

    const decrementBatched = () => {
        setBatchedCounter((prev) => prev - 1);
        setBatchedCounter((prev) => prev - 1);
        setBatchedCounter((prev) => prev - 1);
    };

    const resetCounters = () => {
        setCounter(0);
        setBatchedCounter(0);
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <h3 className="font-medium mb-4">Quick Actions</h3>
            <div className="mb-6 p-4 bg-neutral-800/50 rounded-lg">
                <p className="text-xs text-neutral-500 mb-2">
                    Non-batched (stale closure)
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{counter}</span>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="p-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
                            // TODO: onClick for non-batched decrement
                            onClick={decrementNonBatched}
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            className="p-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
                            onClick={incrementNonBatched}
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
                    <span className="text-2xl font-bold"> {batchedCounter}</span>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="p-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
                            onClick={decrementBatched}
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            className="p-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
                            onClick={incrementBatched}
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
                onClick={resetCounters}
                type="reset"
                className="w-full flex items-center justify-center gap-2 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors text-sm"
            >
                <RotateCcw className="w-4 h-4" />
                Reset All Counters
            </button>
        </div>
    );
};
