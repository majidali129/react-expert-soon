import { ArrowLeft } from "lucide-react";
import { MiddlewareDemo } from "./components/middleware-demo";
import { Link } from "react-router";

export const ZustandMiddleware = () => {
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
                                    4.4 Zustand Middlewares
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    persist, devtools, custom middleware
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management"
                            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm transition-colors"
                        >
                            Complete State Management
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
                        <li>- Use persist middleware for localStorage/sessionStorage</li>
                        <li>- Integrate devtools for debugging</li>
                        <li>- Create custom middleware for logging/analytics</li>
                        <li>- Handle hydration properly with SSR</li>
                    </ul>
                </div>

                {/* Middleware Composition */}
                <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="text-sm font-medium text-neutral-300 mb-3">
                        Middleware Composition
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// Compose multiple middlewares (order matters: outer to inner)
const useStore = create<State>()(
  devtools(
    persist(
      immer((set, get) => ({
        // state and actions
        count: 0,
        increment: () => set((state) => { state.count += 1 }),
        
        // Computed
        get doubled() { return get().count * 2 }
      })),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ count: state.count }), // Only persist count
        onRehydrateStorage: () => (state) => {
          console.log('Hydration finished:', state)
        }
      }
    ),
    { name: 'AppStore' } // DevTools name
  )
)`}
                    </pre>
                </div>

                <MiddlewareDemo />
            </main>
        </div>
    );
};
