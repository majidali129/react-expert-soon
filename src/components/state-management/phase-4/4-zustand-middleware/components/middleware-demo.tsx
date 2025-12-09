import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    getIsSidebarOpen,
    getTheme,
    getTodos,
    useSidebarThemeStore,
} from "@/state/zustand/middleware/theme-sidebar-store";
import {
    Save,
    Bug,
    Layers,
    RefreshCw,
    HardDrive,
    Trash2,
    CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

export const MiddlewareDemo = () => {
    const [title, setTitle] = useState("");
    const theme = useSidebarThemeStore(getTheme);
    const todos = useSidebarThemeStore(getTodos);
    const isSidebarOpen = useSidebarThemeStore(getIsSidebarOpen);
    const [setTheme, toggleSidebar, addTodo, removeTodo, toggleTodo] =
        useSidebarThemeStore(
            useShallow((state) => [
                state.setTheme,
                state.toggleSidebar,
                state.addTodo,
                state.removeTodo,
                state.toggleTodo,
            ]),
        );

    return (
        <div className="space-y-6">
            {/* Middleware Stack Visualization */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Middleware Stack</h3>
                <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-2">
                            <Bug className="w-8 h-8 text-purple-400" />
                        </div>
                        <p className="text-xs text-neutral-400">devtools</p>
                        <p className="text-xs text-neutral-600">Outer</p>
                    </div>
                    <div className="text-neutral-600">→</div>
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-2">
                            <Save className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-xs text-neutral-400">persist</p>
                        <p className="text-xs text-neutral-600">Middle</p>
                    </div>
                    <div className="text-neutral-600">→</div>
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-2">
                            <Layers className="w-8 h-8 text-green-400" />
                        </div>
                        <p className="text-xs text-neutral-400">immer</p>
                        <p className="text-xs text-neutral-600">Inner</p>
                    </div>
                    <div className="text-neutral-600">→</div>
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-2">
                            <HardDrive className="w-8 h-8 text-amber-400" />
                        </div>
                        <p className="text-xs text-neutral-400">store</p>
                        <p className="text-xs text-neutral-600">Core</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 ">
                {/* Persist Demo */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Save className="w-4 h-4 text-blue-400" />
                            Persist Middleware
                        </h3>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="p-4 bg-neutral-800 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Theme Preference</span>
                                <Badge> {theme}</Badge>
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                                    persisted
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setTheme("light")}
                                    type="button"
                                    className="flex-1 py-2 bg-neutral-700 rounded-lg text-sm"
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    type="button"
                                    className="flex-1 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg text-sm"
                                >
                                    Dark
                                </button>
                            </div>
                        </div>
                        <div className="p-4 bg-neutral-800 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Sidebar State</span>
                                <Badge> {isSidebarOpen ? "OPEN" : "CLOSE"}</Badge>
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                                    persisted
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={isSidebarOpen}
                                    onChange={toggleSidebar}
                                />
                                <span className="text-sm text-neutral-400">Expanded</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="flex-1 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Rehydrate
                            </button>
                            <button
                                type="button"
                                className="py-2 px-4 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm flex items-center gap-2 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                                Clear
                            </button>
                        </div>
                    </div>
                </div>

                {/* DevTools Demo */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="grid grid-cols-2">
                        <div>
                            <div className="p-4 border-b border-neutral-800">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Bug className="w-4 h-4 text-purple-400" />
                                    DevTools Middleware
                                </h3>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="p-3 bg-neutral-800 rounded-lg">
                                    <p className="text-xs text-neutral-500 mb-1">
                                        Action
                                    </p>
                                    <p className="text-sm font-mono text-purple-400">
                                        setTheme
                                    </p>
                                </div>
                                <div className="p-3 bg-neutral-800 rounded-lg">
                                    <p className="text-xs text-neutral-500 mb-1">
                                        Payload
                                    </p>
                                    <pre className="text-xs text-neutral-400">
                                        {"{ theme: 'dark' }"}
                                    </pre>
                                </div>
                                <div className="p-3 bg-neutral-800 rounded-lg">
                                    <p className="text-xs text-neutral-500 mb-1">
                                        State After
                                    </p>
                                    <pre className="text-xs text-neutral-400">
                                        {`{
                          theme: "dark",
                          sidebarOpen: true
                        }`}
                                    </pre>
                                </div>
                                <p className="text-xs text-neutral-500 text-center">
                                    Open Redux DevTools extension to see actions
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="p-4 border-b border-neutral-800">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-purple-400" />
                                    Todos List
                                </h3>
                            </div>
                            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                                {/* Here we'll create a simple input to set title for new todo */}
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        addTodo(title);
                                        setTimeout(() => setTitle(""), 100);
                                    }}
                                >
                                    <Input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="h-auto py-1"
                                        placeholder="add new todo..."
                                    />
                                </form>
                                {/* We'll render list of todos, with styled toto-item card having title, status, actions for toggle status, delete */}

                                <div>
                                    {todos.map((todo) => (
                                        <div
                                            key={todo.id}
                                            className="py-2 px-2.5 bg-neutral-800 rounded-lg mb-2 flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4"
                                                    checked={todo.completed}
                                                    onChange={() => toggleTodo(todo.id)}
                                                />
                                                <span
                                                    className={`text-sm ${
                                                        todo.completed
                                                            ? "line-through text-neutral-500"
                                                            : "text-neutral-300"
                                                    }`}
                                                >
                                                    {todo.title}
                                                </span>
                                            </div>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="size-7"
                                                onClick={() => removeTodo(todo.id)}
                                            >
                                                <Trash2 className="w-2 h-2" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Middleware */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    Custom Middleware Pattern
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`import { StateCreator, StoreMutatorIdentifier } from 'zustand'

// Logger middleware type
type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  f: StateCreator<T, Mps, Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>

// Logger implementation
const logger: Logger = (f, name) => (set, get, store) => {
  const loggedSet: typeof set = (...args) => {
    const prevState = get()
    set(...args)
    const nextState = get()
    
    console.group(\`[Zustand] \${name || 'Store'}\`)
    console.log('Prev:', prevState)
    console.log('Next:', nextState)
    console.groupEnd()
  }
  
  return f(loggedSet, get, store)
}

// Usage
const useStore = create<State>()(
  logger(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 }))
    }),
    'CounterStore'
  )
)`}
                </pre>
            </div>

            {/* Hydration Pattern */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    SSR Hydration Pattern
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      // ... other state
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      }
    }
  )
)

// Hook to wait for hydration
const useHydration = () => {
  const hasHydrated = useStore((s) => s.hasHydrated)
  return hasHydrated
}

// Component usage
function App() {
  const hasHydrated = useHydration()
  
  if (!hasHydrated) {
    return <Skeleton /> // Show loading until hydrated
  }
  
  return <ActualContent />
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
                            <span>Add persist middleware with localStorage</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Configure partialize for selective persist</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add devtools middleware</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create custom logger middleware</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Handle SSR hydration properly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Compose all middlewares together</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
