import { GripVertical, MoreHorizontal, Trash2 } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTaskStore, type Task } from "@/state/zustand/basics/task-store";
import React from "react";

type TaskItemProps = {
    task: Task;
};
export const TaskItem = React.memo(({ task }: TaskItemProps) => {
    const removeTask = useTaskStore((state) => state.removeTask);
    const updateStatus = useTaskStore((state) => state.updateStatus);

    return (
        <div
            key={task.id}
            className="p-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-amber-500/30 transition-colors group cursor-grab"
        >
            <div className="flex items-start gap-2">
                <GripVertical className="w-4 h-4 text-neutral-600 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="flex-1 text-sm">{task.title}</p>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            defaultChecked={task.status === "done"}
                            asChild
                        >
                            <button
                                type="button"
                                className="p-1 hover:bg-neutral-700 rounded"
                            >
                                <MoreHorizontal className="w-3 h-3 text-neutral-500" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="space-y-2 px-2.5 py-4">
                            <DropdownMenuItem asChild>
                                <Button
                                    size="sm"
                                    className="bg-green-500/50 w-full hover:bg-green-500/60! text-white"
                                    onClick={() => updateStatus(task.id, "done")}
                                >
                                    Done
                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button
                                    size="sm"
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => updateStatus(task.id, "in-progress")}
                                >
                                    In Progress
                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => updateStatus(task.id, "todo")}
                                >
                                    Todo
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <button
                        type="button"
                        className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded"
                        onClick={() => removeTask(task.id)}
                    >
                        <Trash2 className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
});
