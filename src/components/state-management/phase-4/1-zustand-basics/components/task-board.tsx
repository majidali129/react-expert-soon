import { Plus, GripVertical, Trash2, MoreHorizontal } from "lucide-react";

const columns = [
    { id: "todo", title: "To Do", color: "neutral" },
    { id: "in-progress", title: "In Progress", color: "amber" },
    { id: "done", title: "Done", color: "green" },
];

const mockTasks = [
    { id: "t1", title: "Setup Zustand store", status: "done" },
    { id: "t2", title: "Create task actions", status: "in-progress" },
    { id: "t3", title: "Add drag and drop", status: "todo" },
    { id: "t4", title: "Implement selectors", status: "todo" },
    { id: "t5", title: "Test re-render optimization", status: "in-progress" },
];

export const TaskBoard = () => {
    // TODO: Create useTaskStore with create()
    // TODO: Define tasks state array
    // TODO: Add actions: addTask, updateStatus, deleteTask, moveTask
    // TODO: Use selectors to prevent re-renders
    // TODO: Access state with getState() outside React

    return (
        <div className="space-y-6">
            {/* Add Task Form */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                    <button
                        type="button"
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add Task
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-3 gap-4">
                {columns.map((column) => {
                    const columnTasks = mockTasks.filter((t) => t.status === column.id);
                    const colorClasses = {
                        neutral: "border-neutral-700 bg-neutral-800/50",
                        amber: "border-amber-500/30 bg-amber-500/5",
                        green: "border-green-500/30 bg-green-500/5",
                    };

                    return (
                        <div
                            key={column.id}
                            className="bg-neutral-900 border border-neutral-800 rounded-xl"
                        >
                            <div
                                className={`p-4 border-b ${colorClasses[column.color as keyof typeof colorClasses]}`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">{column.title}</h3>
                                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded">
                                        {columnTasks.length}
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 space-y-2 min-h-64">
                                {columnTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="p-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-amber-500/30 transition-colors group cursor-grab"
                                    >
                                        <div className="flex items-start gap-2">
                                            <GripVertical className="w-4 h-4 text-neutral-600 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <p className="flex-1 text-sm">{task.title}</p>
                                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    type="button"
                                                    className="p-1 hover:bg-neutral-700 rounded"
                                                >
                                                    <MoreHorizontal className="w-3 h-3 text-neutral-500" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {columnTasks.length === 0 && (
                                    <div className="h-32 flex items-center justify-center border-2 border-dashed border-neutral-800 rounded-lg">
                                        <p className="text-xs text-neutral-600">
                                            Drop tasks here
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Render Counter Demo */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="font-semibold mb-4">Render Optimization Demo</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-neutral-800 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">TaskList Component</span>
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                                renders: 0
                            </span>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Subscribes to: state.tasks
                        </p>
                    </div>
                    <div className="p-4 bg-neutral-800 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">TaskCount Component</span>
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                                renders: 0
                            </span>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Subscribes to: state.tasks.length
                        </p>
                    </div>
                    <div className="p-4 bg-neutral-800 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">AddTask Component</span>
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                                renders: 0
                            </span>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Subscribes to: state.addTask
                        </p>
                    </div>
                </div>
            </div>

            {/* State Debug */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    Current Store State
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`{
  tasks: [
    { id: "t1", title: "Setup Zustand store", status: "done" },
    { id: "t2", title: "Create task actions", status: "in-progress" },
    { id: "t3", title: "Add drag and drop", status: "todo" },
    // ...
  ]
}`}
                </pre>
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
                            <span>Create useTaskStore with create()</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Define tasks state and types</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Implement addTask action</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add updateStatus and deleteTask</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Use selectors to optimize renders</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Test getState() outside React</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
