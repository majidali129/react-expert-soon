import { useTaskStore } from "@/state/zustand/basics/task-store";

import { TaskItem } from "./task-item";
import type { ReactNode } from "react";

const columns = [
    { id: "todo", title: "To Do", color: "neutral" },
    { id: "in-progress", title: "In Progress", color: "amber" },
    { id: "done", title: "Done", color: "green" },
];

export const TaskList = ({ children }: { children: ReactNode }) => {
    const tasks = useTaskStore((state) => state.tasks);

    return (
        <div className="grid grid-cols-3 gap-4">
            {columns.map((column) => {
                const columnTasks = tasks.filter((t) => t.status === column.id);
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
                                <div>
                                    {columnTasks.length}/{children}
                                </div>
                            </div>
                        </div>
                        <div className="p-3 space-y-2 min-h-64">
                            {columnTasks.map((task) => (
                                <TaskItem task={task} key={task.id} />
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
    );
};
