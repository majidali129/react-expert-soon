import { create } from "zustand";
type TaskStatus = "todo" | "in-progress" | "done";

const mockTasks: Task[] = [
    { id: "t1", title: "Setup Zustand store", status: "done" },
    { id: "t2", title: "Create task actions", status: "in-progress" },
    { id: "t3", title: "Add drag and drop", status: "todo" },
    { id: "t4", title: "Implement selectors", status: "todo" },
    { id: "t5", title: "Test re-render optimization", status: "in-progress" },
];

export type Task = {
    id: string;
    title: string;
    status: TaskStatus;
};

type TaskStore = {
    tasks: Task[];
    addTask: (title: string) => void;
    removeTask: (id: string) => void;
    updateStatus: (id: string, status: Task["status"]) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => {
    return {
        tasks: mockTasks,
        addTask: (title) => {
            if (!title.trim()) return;
            return set((state) => ({
                tasks: [
                    ...state.tasks,
                    { id: crypto.randomUUID(), status: "todo", title },
                ],
            }));
        },

        removeTask: (id) =>
            set((state) => ({
                tasks: state.tasks.filter((t) => t.id !== id),
            })),

        updateStatus: (id, status) =>
            set(({ tasks }) => ({
                tasks: tasks.map((task) => (task.id === id ? { ...task, status } : task)),
            })),
    };
});
