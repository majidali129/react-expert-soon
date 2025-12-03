import { ArrowLeft, ArrowRight } from "lucide-react";
import { RTKDemo } from "./components/rtk-demo";
import { Link } from "react-router";

export const ReduxToolkit = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/state-management/phase-3"
                                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-lg font-semibold">
                                    3.4 Redux Toolkit
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    configureStore, createSlice, createAsyncThunk, RTK
                                    Query
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-4"
                            className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
                        >
                            Next: Zustand <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Learning Objectives */}
                <div className="mb-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <h2 className="font-medium text-purple-400 mb-2">
                        Learning Objectives
                    </h2>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>- Use configureStore for automatic setup</li>
                        <li>- Create slices with createSlice (reducers + actions)</li>
                        <li>- Handle async operations with createAsyncThunk</li>
                        <li>- Implement RTK Query for data fetching</li>
                    </ul>
                </div>

                {/* RTK vs Classic Redux */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-red-400 mb-3">
                            Classic Redux (Verbose)
                        </h3>
                        <pre className="text-xs text-neutral-400 bg-neutral-900 p-3 rounded-lg overflow-x-auto">
                            {`// Action types
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// Action creators
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: nanoid(), text, completed: false }
})

// Reducer
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}`}
                        </pre>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-green-400 mb-3">
                            Redux Toolkit (Concise)
                        </h3>
                        <pre className="text-xs text-neutral-400 bg-neutral-900 p-3 rounded-lg overflow-x-auto">
                            {`import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload) // Immer!
      },
      prepare: (text) => ({
        payload: { id: nanoid(), text, completed: false }
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer`}
                        </pre>
                    </div>
                </div>

                <RTKDemo />
            </main>
        </div>
    );
};
