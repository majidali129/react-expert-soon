import { ArrowLeft, Undo2, Redo2 } from "lucide-react";
import { CartView } from "./components/cart-view";
import { ProductCatalog } from "./components/product-catalog";
import { CartSummary } from "./components/cart-summary";
import { ActionHistory } from "./components/action-history";
import { Link } from "react-router";

export const UseReducer = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/state-management/phase-1"
                                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-lg font-semibold">1.2 useReducer</h1>
                                <p className="text-xs text-neutral-500">
                                    Reducer pattern for complex state transitions
                                </p>
                            </div>
                        </div>
                        {/* TODO: Implement undo/redo */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-50"
                                disabled
                                // TODO: onClick={undo} disabled={!canUndo}
                            >
                                <Undo2 className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-50"
                                disabled
                                // TODO: onClick={redo} disabled={!canRedo}
                            >
                                <Redo2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Instructions */}
                <div className="mb-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <h3 className="font-semibold text-emerald-400 mb-2">Your Tasks</h3>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>
                            1. Define action types: ADD_ITEM, REMOVE_ITEM,
                            UPDATE_QUANTITY, CLEAR_CART
                        </li>
                        <li>2. Create reducer with complex state transitions</li>
                        <li>3. Handle payload validation in reducer</li>
                        <li>4. Implement undo/redo with action history (bonus)</li>
                    </ul>
                </div>

                {/* Reducer Template */}
                <div className="mb-6 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h4 className="text-sm font-medium mb-3 text-amber-400">
                        Reducer Template
                    </h4>
                    <pre className="text-xs font-mono text-neutral-400 overflow-x-auto">
                        {`// Action Types
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

// State Shape
interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

// Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      // TODO: Handle adding item (check if exists, increment quantity)
    case 'REMOVE_ITEM':
      // TODO: Filter out the item
    case 'UPDATE_QUANTITY':
      // TODO: Update specific item quantity, validate > 0
    case 'CLEAR_CART':
      // TODO: Reset to initial state
    default:
      return state
  }
}`}
                    </pre>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <ProductCatalog />
                        <CartView />
                    </div>
                    <div className="space-y-6">
                        <CartSummary />
                        <ActionHistory />
                    </div>
                </div>
            </main>
        </div>
    );
};
