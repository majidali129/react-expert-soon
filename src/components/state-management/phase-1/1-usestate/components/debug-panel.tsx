import { Bug } from "lucide-react";
type DebugPanelProps = {
    counter: number;
    batchedCounter: number;
};

export const DebugPanel = ({ counter, batchedCounter }: DebugPanelProps) => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
                <Bug className="w-4 h-4 text-amber-400" />
                <h3 className="font-medium">Debug Panel</h3>
            </div>

            <div className="space-y-3 text-xs font-mono">
                <div className="p-2 bg-neutral-800 rounded">
                    <p className="text-neutral-500 mb-1"> Filters State</p>
                    <pre className="text-emerald-400">
                        {`{
  search: "",
  status: "all",
  category: "all"
}`}
                    </pre>
                </div>

                <div className="p-2 bg-neutral-800 rounded">
                    <p className="text-neutral-500 mb-1"> Selected Products</p>
                    <pre className="text-blue-400">{"[]"}</pre>
                </div>

                <div className="p-2 bg-neutral-800 rounded">
                    <p className="text-neutral-500 mb-1">Counters</p>
                    <pre className="text-purple-400">
                        Counter: {counter} <br />
                        Batched-counter: {batchedCounter}
                    </pre>
                </div>

                <div className="p-2 bg-neutral-800 rounded">
                    <p className="text-neutral-500 mb-1"> Render Count</p>
                    <pre className="text-amber-400">
                        Personal: {0} <br />
                        From-parent: {0}
                    </pre>
                </div>
            </div>

            <p className="text-xs text-neutral-600 mt-3">
                Update this panel to reflect live state changes
            </p>
        </div>
    );
};
