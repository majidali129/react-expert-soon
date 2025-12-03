import { Split, Activity } from "lucide-react";

export const PatternExplanation = () => {
    return (
        <div className="space-y-4">
            {/* Problem */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                <h4 className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    The Problem: Single Context
                </h4>
                <pre className="text-xs font-mono text-neutral-400 overflow-x-auto">
                    {`// Single context = ALL consumers re-render on ANY change
const CartContext = createContext({ 
  items: [], 
  addItem: () => {}, 
  removeItem: () => {} 
})

// CartIcon only needs items.length
// But re-renders when addItem/removeItem functions change!
function CartIcon() {
  const { items } = useContext(CartContext)
  return <span>{items.length}</span>
}`}
                </pre>
            </div>

            {/* Solution */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                <h4 className="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2">
                    <Split className="w-4 h-4" />
                    The Solution: Split Contexts
                </h4>
                <pre className="text-xs font-mono text-neutral-400 overflow-x-auto">
                    {`// Separate contexts
const CartStateContext = createContext<CartState | null>(null)
const CartDispatchContext = createContext<CartDispatch | null>(null)

// Provider wraps both
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

// Custom hooks
function useCartState() {
  const context = useContext(CartStateContext)
  if (!context) throw new Error('...')
  return context
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext)
  if (!context) throw new Error('...')
  return context
}`}
                </pre>
            </div>

            {/* Benefits */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h4 className="text-sm font-medium mb-3">Benefits</h4>
                <ul className="text-sm text-neutral-400 space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">1.</span>
                        <span>
                            Components reading state don&apos;t re-render when dispatch
                            changes
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">2.</span>
                        <span>
                            Components only dispatching don&apos;t re-render when state
                            changes
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">3.</span>
                        <span>Better separation of concerns</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
