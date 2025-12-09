import { create, type ExtractState } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Theme = "dark" | "light";

type Todo = {
    id: string;
    title: string;
    completed: boolean;
};
type TodoList = {
    todos: Todo[];
    user: { name: string; age: number };
    addTodo: (title: string) => void;
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
};

type SidebarState = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
};

type ThemeSidebarState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
} & SidebarState &
    TodoList;

export const useSidebarThemeStore = create<ThemeSidebarState>()(
    devtools(
        persist(
            immer((set) => ({
                todos: [],
                user: { name: "Alice", age: 30 },
                addTodo: (title) =>
                    set(
                        (state) => {
                            state.todos.unshift({
                                id: crypto.randomUUID(),
                                title,
                                completed: false,
                            });
                        },
                        undefined,
                        "addTodo",
                    ),
                removeTodo: (id) =>
                    set(
                        (state) => state.todos.filter((todo) => todo.id !== id),
                        undefined,
                        "removeTodo",
                    ),
                toggleTodo: (id) =>
                    set(
                        (state) => {
                            state.todos = state.todos.map((todo) =>
                                todo.id === id
                                    ? { ...todo, completed: !todo.completed }
                                    : todo,
                            );
                        },
                        undefined,
                        "toggleTodo",
                    ),
                isSidebarOpen: false,
                theme: "dark",
                setTheme: (theme) => set(() => ({ theme }), undefined, "setTheme"),
                toggleSidebar: () =>
                    set(
                        (state) => ({ isSidebarOpen: !state.isSidebarOpen }),
                        undefined,
                        "toggleSidebar",
                    ),
            })),
            {
                name: "theme-sidebar-storage",
                partialize: (state) => ({
                    theme: state.theme,
                    isSidebarOpen: state.isSidebarOpen,
                    todos: state.todos,
                }),
            },
        ),
        {
            name: "ThemeSidebarStore",
        },
    ),
);

useSidebarThemeStore.devtools.cleanup();
export type ThemeSidebarStore = ExtractState<typeof useSidebarThemeStore>;

// ! Selectors =====================

export const getTheme = (state: ThemeSidebarStore) => state.theme;
export const getIsSidebarOpen = (state: ThemeSidebarStore) => state.isSidebarOpen;
export const getTodos = (state: ThemeSidebarStore) => state.todos;
