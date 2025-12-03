import { ArrowLeft, ArrowRight } from "lucide-react";
import { SlicedStoreDemo } from "./components/sliced-store-demo";
import { Link } from "react-router";

export const ZustandPatterns = () => {
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
                                    4.2 Zustand Patterns
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    Store slicing, Immer, TypeScript
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-4/3-zustand-context"
                            className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
                        >
                            Next: Context Integration <ArrowRight className="w-4 h-4" />
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
                        <li>- Split large stores into slices</li>
                        <li>- Use Immer for immutable updates</li>
                        <li>- Implement TypeScript patterns</li>
                        <li>- Create computed/derived state</li>
                    </ul>
                </div>

                {/* Slice Pattern */}
                <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="text-sm font-medium text-neutral-300 mb-3">
                        Store Slicing Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`import { create, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Slice types
interface UserSlice {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

interface CartSlice {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

// Create slices
const createUserSlice: StateCreator<
  UserSlice & CartSlice,
  [['zustand/immer', never]],
  [],
  UserSlice
> = (set) => ({
  user: null,
  setUser: (user) => set((state) => { state.user = user }),
  logout: () => set((state) => { state.user = null })
})

const createCartSlice: StateCreator<
  UserSlice & CartSlice,
  [['zustand/immer', never]],
  [],
  CartSlice
> = (set) => ({
  items: [],
  addItem: (item) => set((state) => { state.items.push(item) }),
  removeItem: (id) => set((state) => {
    state.items = state.items.filter(i => i.id !== id)
  }),
  clearCart: () => set((state) => { state.items = [] })
})

// Combine slices
const useStore = create<UserSlice & CartSlice>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a)
  }))
)`}
                    </pre>
                </div>

                <SlicedStoreDemo />
            </main>
        </div>
    );
};
