import { ArrowLeft, Undo2, Redo2 } from "lucide-react";
import { CartView } from "./components/cart-view";
import { ProductCatalog } from "./components/product-catalog";
import { CartSummary } from "./components/cart-summary";
import { ActionHistory } from "./components/action-history";
import { Link } from "react-router";
import { useReducer } from "react";

/* ============================
   Types
   ============================ */

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export const products: Product[] = [
    {
        id: "p1",
        name: "Wireless Mouse",
        price: 49.99,
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: "p2",
        name: "Mechanical Keyboard",
        price: 129.99,
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: "p3",
        name: "USB-C Hub",
        price: 79.99,
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: "p4",
        name: "Monitor Stand",
        price: 89.99,
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: "p5",
        name: "Webcam HD",
        price: 69.99,
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: "p6",
        name: "Desk Lamp",
        price: 39.99,
        image: "/placeholder.svg?height=80&width=80",
    },
];

export type CartAction =
    | { type: "ADD_ITEM"; payload: Product }
    | { type: "REMOVE_ITEM"; payload: { id: string } }
    | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
    | { type: "CLEAR_CART" };

export type CartItem = {
    item: Product;
    quantity: number;
};

export type CartShape = {
    items: CartItem[];
    total: number;
    itemCount: number;
};

/* ============================
   Initial state (factory)
   ============================ */

const createInitialState = (): CartShape => ({
    items: [],
    total: 0,
    itemCount: 0,
});

/* ============================
   Helpers (pure, exported for testing)
   ============================ */

export const findItem = (items: CartItem[], productId: string) =>
    items.find((ci) => ci.item.id === productId);

/**
 * Safely clone initial state when clearing
 */

const clonedInitialState = (): CartShape => ({ ...createInitialState() });

/**
 * Recalculate totals from scratch (fallback / verification)
 */
export const calculateTotals = (items: CartItem[]) => {
    const itemCount = items.reduce((sum, it) => sum + it.quantity, 0);
    const total = items.reduce((sum, it) => sum + (it.item.price ?? 0) * it.quantity, 0);
    return { itemCount, total };
};

/**
 * Add product to items array immutably and return items + deltas
 */
export const addItemToItems = (
    items: CartItem[],
    product: Product,
): { items: CartItem[]; deltaCount: number; deltaTotal: number } => {
    const existing = items.find((it) => it.item.id === product.id);

    if (existing) {
        const updatedItems = items.map((it) =>
            it.item.id === product.id ? { ...it, quantity: it.quantity + 1 } : it,
        );
        return { items: updatedItems, deltaCount: 1, deltaTotal: product.price };
    }

    const newItem: CartItem = { item: product, quantity: 1 };
    return { items: [...items, newItem], deltaCount: 1, deltaTotal: product.price };
};

/**
 * Remove product by id
 */
export const removeItemFromItems = (
    items: CartItem[],
    productId: string,
): { items: CartItem[]; deltaCount: number; deltaTotal: number } => {
    const found = items.find((it) => it.item.id === productId);
    if (!found) return { items, deltaCount: 0, deltaTotal: 0 };

    const updatedItems = items.filter((it) => it.item.id !== productId);
    const deltaCount = -found.quantity;
    const deltaTotal = -found.quantity * found.item.price;
    return { items: updatedItems, deltaCount, deltaTotal };
};

/**
 * Update an item's quantity. If quantity == 0 -> removes it.
 * Returns new items array and deltas (newCount - oldCount, newTotal - oldTotal)
 */
export const updateItemQuantity = (
    items: CartItem[],
    productId: string,
    quantity: number,
): { items: CartItem[]; deltaCount: number; deltaTotal: number } => {
    const found = items.find((it) => it.item.id === productId);
    if (!found) {
        return { items, deltaCount: 0, deltaTotal: 0 };
    }

    if (quantity === 0) {
        // remove
        const updated = items.filter((it) => it.item.id !== productId);
        const deltaCount = -found.quantity;
        const deltaTotal = -found.quantity * found.item.price;
        return { items: updated, deltaCount, deltaTotal };
    }

    // normal update
    const updatedItems = items.map((it) =>
        it.item.id === productId ? { ...it, quantity } : it,
    );

    const deltaCount = quantity - found.quantity;
    const deltaTotal = (quantity - found.quantity) * found.item.price;
    return { items: updatedItems, deltaCount, deltaTotal };
};

/* ============================
   Action creators
   ============================ */

export const addItem = (product: Product): CartAction => ({
    type: "ADD_ITEM",
    payload: product,
});
export const removeItem = (id: string): CartAction => ({
    type: "REMOVE_ITEM",
    payload: { id },
});
export const updateQuantity = (id: string, quantity: number): CartAction => ({
    type: "UPDATE_QUANTITY",
    payload: { id, quantity },
});
export const clearCart = (): CartAction => ({ type: "CLEAR_CART" });
/* ============================
   Reducer
   - Uses incremental updates to total/itemCount for performance
   - Falls back to full calculation if something unexpected happens
   ============================ */

const reducer = (state: CartShape, action: CartAction): CartShape => {
    switch (action.type) {
        case "ADD_ITEM": {
            const {
                items: newItems,
                deltaCount,
                deltaTotal,
            } = addItemToItems(state.items, action.payload);

            return {
                ...state,
                items: newItems,
                itemCount: state.itemCount + deltaCount,
                total: +(state.total + deltaTotal).toFixed(2),
            };
        }

        case "REMOVE_ITEM": {
            const {
                items: newItems,
                deltaCount,
                deltaTotal,
            } = removeItemFromItems(state.items, action.payload.id);

            return {
                ...state,
                items: newItems,
                itemCount: state.itemCount + deltaCount,
                total: +(state.total + deltaTotal).toFixed(2),
            };
        }

        case "UPDATE_QUANTITY": {
            const { id, quantity } = action.payload;
            const {
                items: newItems,
                deltaCount,
                deltaTotal,
            } = updateItemQuantity(state.items, id, quantity);

            return {
                ...state,
                items: newItems,
                itemCount: state.itemCount + deltaCount,
                total: +(state.total + deltaTotal).toFixed(2),
            };
        }

        case "CLEAR_CART": {
            // return a fresh new object to avoid accidental external mutation
            return clonedInitialState();
        }

        default: {
            // Exhaustive check
            // @ts-expect-error - Should never happen
            const _exhaustive: never = action;
            throw new Error(
                `Unhandled action ${(action as any)?.type ?? String(action)}`,
            );
        }
    }
};

/* ============================
   Selectors
   ============================ */

export const selectCartItems = (s: CartShape) => s.items;
export const selectCartTotal = (s: CartShape) => s.total;
export const selectCartItemCount = (s: CartShape) => s.itemCount;

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, createInitialState());

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
                        <ProductCatalog products={products} dispatch={dispatch} />
                        <CartView
                            dispatch={dispatch}
                            cartItems={selectCartItems(state)}
                            itemCount={selectCartItemCount(state)}
                        />
                    </div>
                    <div className="space-y-6">
                        <CartSummary cartInfo={state} />
                        <ActionHistory />
                    </div>
                </div>
            </main>
        </div>
    );
};
