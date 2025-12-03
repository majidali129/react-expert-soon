import { FileText, FolderOpen, Plus, Users } from "lucide-react";

const workspaces = [
    {
        id: "ws-1",
        name: "Personal",
        color: "blue",
        documents: [
            { id: "d1", title: "Notes", type: "text" },
            { id: "d2", title: "Ideas", type: "text" },
        ],
    },
    {
        id: "ws-2",
        name: "Work",
        color: "green",
        documents: [
            { id: "d3", title: "Project Plan", type: "document" },
            { id: "d4", title: "Meeting Notes", type: "text" },
            { id: "d5", title: "Budget", type: "spreadsheet" },
        ],
    },
    {
        id: "ws-3",
        name: "Shared Team",
        color: "purple",
        documents: [{ id: "d6", title: "Team Guidelines", type: "document" }],
    },
];

export const ScopedStoreDemo = () => {
    // TODO: Create store factory function (not a hook)
    // TODO: Create WorkspaceContext
    // TODO: Build WorkspaceProvider with useRef for store instance
    // TODO: Create useWorkspaceStore hook with selector pattern
    // TODO: Ensure each workspace has isolated state

    return (
        <div className="space-y-6">
            {/* Multi-Workspace View */}
            <div className="grid grid-cols-3 gap-4">
                {workspaces.map((workspace) => {
                    const colorClasses = {
                        blue: "border-blue-500/30 bg-blue-500/5",
                        green: "border-green-500/30 bg-green-500/5",
                        purple: "border-purple-500/30 bg-purple-500/5",
                    };
                    const iconColors = {
                        blue: "text-blue-400",
                        green: "text-green-400",
                        purple: "text-purple-400",
                    };

                    return (
                        <div
                            key={workspace.id}
                            className={`bg-neutral-900 border rounded-xl overflow-hidden ${colorClasses[workspace.color as keyof typeof colorClasses]}`}
                        >
                            <div className="p-4 border-b border-neutral-800">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <FolderOpen
                                            className={`w-5 h-5 ${iconColors[workspace.color as keyof typeof iconColors]}`}
                                        />
                                        <h3 className="font-semibold">
                                            {workspace.name}
                                        </h3>
                                    </div>
                                    {workspace.id === "ws-3" && (
                                        <Users className="w-4 h-4 text-neutral-500" />
                                    )}
                                </div>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Workspace ID: {workspace.id}
                                </p>
                            </div>
                            <div className="p-4 space-y-2">
                                {workspace.documents.map((doc) => (
                                    <div
                                        key={doc.id}
                                        className="flex items-center gap-2 p-2 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors"
                                    >
                                        <FileText className="w-4 h-4 text-neutral-500" />
                                        <span className="text-sm">{doc.title}</span>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="w-full p-2 border border-dashed border-neutral-700 hover:border-neutral-600 rounded-lg text-sm text-neutral-500 hover:text-neutral-400 flex items-center justify-center gap-1 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Document
                                </button>
                            </div>
                            <div className="p-3 bg-neutral-800/30 border-t border-neutral-800">
                                <p className="text-xs text-neutral-600 font-mono">
                                    Store instance: {workspace.id}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Isolation Visualization */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Store Isolation</h3>
                <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-2">
                            <div className="text-center">
                                <p className="text-xs text-blue-400">Store</p>
                                <p className="text-lg font-mono">ws-1</p>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">2 docs</p>
                    </div>
                    <div className="text-2xl text-neutral-700">≠</div>
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-2">
                            <div className="text-center">
                                <p className="text-xs text-green-400">Store</p>
                                <p className="text-lg font-mono">ws-2</p>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">3 docs</p>
                    </div>
                    <div className="text-2xl text-neutral-700">≠</div>
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-2">
                            <div className="text-center">
                                <p className="text-xs text-purple-400">Store</p>
                                <p className="text-lg font-mono">ws-3</p>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">1 doc</p>
                    </div>
                </div>
                <p className="text-center text-xs text-neutral-500 mt-4">
                    Each workspace has its own isolated Zustand store instance via Context
                </p>
            </div>

            {/* TODO Checklist */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <h3 className="font-semibold text-sm text-amber-400 mb-3">
                    Implementation Tasks
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create createWorkspaceStore factory</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Setup WorkspaceContext</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Build WorkspaceProvider with useRef</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create useWorkspaceStore hook</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Verify store isolation between workspaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Test store cleanup on unmount</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
