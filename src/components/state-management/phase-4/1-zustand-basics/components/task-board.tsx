import { CreateTaskForm } from "./create-task-form";
import { TaskCount } from "./task-count";
import { TaskList } from "./task-list";

export const TaskBoard = () => {
    console.log("Board renders");
    return (
        <div className="space-y-6">
            {/* Add Task Form */}
            <CreateTaskForm />
            {/* Kanban Board */}
            <TaskList>
                <TaskCount />
            </TaskList>

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
