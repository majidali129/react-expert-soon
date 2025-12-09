import { useTaskStore } from "@/state/zustand/basics/task-store";

export const TaskCount = () => {
    const tasksCount = useTaskStore((s) => s.tasks.length);
    return (
        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded">
            {tasksCount}
        </span>
    );
};
