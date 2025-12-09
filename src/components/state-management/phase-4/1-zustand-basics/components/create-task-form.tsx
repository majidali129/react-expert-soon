import { useTaskStore } from "@/state/zustand/basics/task-store";
import { Plus } from "lucide-react";
import { useState } from "react";

export const CreateTaskForm = () => {
    const [title, setTitle] = useState("");
    const addTask = useTaskStore((state) => state.addTask);

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex gap-3">
                <input
                    type="text"
                    value={title}
                    placeholder="Add a new task..."
                    className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-amber-500"
                    onChange={(e) => e.target.value && setTitle(e.target.value)}
                />
                <button
                    type="button"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg flex items-center gap-2 transition-colors"
                    onClick={() => {
                        addTask(title);
                        setTitle("");
                    }}
                >
                    <Plus className="w-4 h-4" />
                    Add Task
                </button>
            </div>
        </div>
    );
};
