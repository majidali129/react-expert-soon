import { ArrowLeft, ArrowRight } from "lucide-react";
import { TaskBoard } from "./components/task-board";
import { Link } from "react-router";

export const ZustandBasics = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/state-management/phase-4"
                                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-lg font-semibold">
                                    4.1 Zustand Basics
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    create(), selectors, actions, getState()
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-4/2-zustand-patterns"
                            className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
                        >
                            Next: Patterns <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Learning Objectives */}
                <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <h2 className="font-medium text-amber-400 mb-2">
                        Learning Objectives
                    </h2>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>- Create stores with create() function</li>
                        <li>- Define state and actions together</li>
                        <li>- Use selectors for optimal re-renders</li>
                        <li>- Access state outside React with getState()</li>
                    </ul>
                </div>

                {/* Basic Pattern */}
                <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="text-sm font-medium text-neutral-300 mb-3">
                        Zustand Store Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`import { create } from 'zustand'

interface Task {
  id: string
  title: string
  status: 'todo' | 'in-progress' | 'done'
}

interface TaskStore {
  tasks: Task[]
  addTask: (title: string) => void
  updateStatus: (id: string, status: Task['status']) => void
  deleteTask: (id: string) => void
}

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  
  addTask: (title) => set((state) => ({
    tasks: [...state.tasks, { id: crypto.randomUUID(), title, status: 'todo' }]
  })),
  
  updateStatus: (id, status) => set((state) => ({
    tasks: state.tasks.map(task => 
      task.id === id ? { ...task, status } : task
    )
  })),
  
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  }))
}))

// Usage with selectors (prevents unnecessary re-renders)
const tasks = useTaskStore((state) => state.tasks)
const addTask = useTaskStore((state) => state.addTask)

// Access outside React
const currentTasks = useTaskStore.getState().tasks`}
                    </pre>
                </div>

                <TaskBoard />
            </main>
        </div>
    );
};
