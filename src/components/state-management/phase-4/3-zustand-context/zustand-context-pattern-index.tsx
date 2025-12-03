import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScopedStoreDemo } from "./components/scoped-store-demo";
import { Link } from "react-router";

export const ZustandContext = () => {
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
                                    4.3 Zustand + Context
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    Scoped stores for special cases
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-4/4-zustand-middleware"
                            className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
                        >
                            Next: Middlewares <ArrowRight className="w-4 h-4" />
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
                        <li>- Understand when to scope stores with Context</li>
                        <li>- Create store instances per Provider</li>
                        <li>- Handle multi-tenant scenarios</li>
                        <li>- Avoid global store leakage in special cases</li>
                    </ul>
                </div>

                {/* When to Use */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-green-400 mb-3">
                            Use Global Zustand Store When:
                        </h3>
                        <ul className="text-xs text-neutral-400 space-y-2">
                            <li>- App-wide state (auth, theme, cart)</li>
                            <li>- Single instance needed across app</li>
                            <li>- State persists across routes</li>
                            <li>- Need access outside React</li>
                        </ul>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-amber-400 mb-3">
                            Use Context + Zustand When:
                        </h3>
                        <ul className="text-xs text-neutral-400 space-y-2">
                            <li>- Multiple instances of same store type</li>
                            <li>- Store should reset on unmount</li>
                            <li>- Multi-tenant / workspace isolation</li>
                            <li>- Testing with different initial states</li>
                        </ul>
                    </div>
                </div>

                {/* Pattern */}
                <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="text-sm font-medium text-neutral-300 mb-3">
                        Context + Zustand Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`import { createContext, useContext, useRef } from 'react'
import { createStore, useStore } from 'zustand'

// Store factory (not a hook!)
const createWorkspaceStore = (workspaceId: string) => 
  createStore((set) => ({
    workspaceId,
    documents: [],
    addDocument: (doc) => set((s) => ({ documents: [...s.documents, doc] }))
  }))

type WorkspaceStore = ReturnType<typeof createWorkspaceStore>

// Context
const WorkspaceContext = createContext<WorkspaceStore | null>(null)

// Provider - creates new store instance
export function WorkspaceProvider({ workspaceId, children }) {
  const storeRef = useRef<WorkspaceStore>()
  
  if (!storeRef.current) {
    storeRef.current = createWorkspaceStore(workspaceId)
  }
  
  return (
    <WorkspaceContext.Provider value={storeRef.current}>
      {children}
    </WorkspaceContext.Provider>
  )
}

// Custom hook to use scoped store
export function useWorkspaceStore<T>(selector: (state) => T): T {
  const store = useContext(WorkspaceContext)
  if (!store) throw new Error('Missing WorkspaceProvider')
  return useStore(store, selector)
}

// Usage - each workspace has isolated state
<WorkspaceProvider workspaceId="ws-1">
  <WorkspaceContent /> {/* Uses ws-1 store */}
</WorkspaceProvider>

<WorkspaceProvider workspaceId="ws-2">
  <WorkspaceContent /> {/* Uses ws-2 store */}
</WorkspaceProvider>`}
                    </pre>
                </div>

                <ScopedStoreDemo />
            </main>
        </div>
    );
};
