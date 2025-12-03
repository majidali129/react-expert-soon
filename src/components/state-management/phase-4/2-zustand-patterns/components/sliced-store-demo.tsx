import { User, ShoppingCart, Package, LogOut, Plus, Minus, Trash2 } from "lucide-react";

const mockUser = {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    avatar: null,
};

const mockCartItems = [
    { id: "c1", productId: "p1", name: "Premium Widget", price: 29.99, quantity: 2 },
    { id: "c2", productId: "p2", name: "Super Gadget", price: 89.99, quantity: 1 },
];

export const SlicedStoreDemo = () => {
    // TODO: Create separate slice files (userSlice, cartSlice, uiSlice)
    // TODO: Type slices with StateCreator
    // TODO: Use immer middleware for mutations
    // TODO: Combine slices in main store
    // TODO: Create derived/computed selectors

    const cartTotal = mockCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                {/* User Slice Demo */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold flex items-center gap-2">
                            <User className="w-4 h-4 text-blue-400" />
                            User Slice
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <span className="text-lg font-medium text-blue-400">
                                    JD
                                </span>
                            </div>
                            <div>
                                <p className="font-medium">{mockUser.name}</p>
                                <p className="text-sm text-neutral-500">
                                    {mockUser.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="flex-1 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
                            >
                                Edit Profile
                            </button>
                            <button
                                type="button"
                                className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm flex items-center gap-1 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="p-4 border-t border-neutral-800 bg-neutral-800/50">
                        <p className="text-xs text-neutral-500 font-mono">
                            userSlice: {"{"} user, setUser, logout {"}"}
                        </p>
                    </div>
                </div>

                {/* Cart Slice Demo */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold flex items-center gap-2">
                            <ShoppingCart className="w-4 h-4 text-green-400" />
                            Cart Slice
                        </h3>
                    </div>
                    <div className="p-4 space-y-3">
                        {mockCartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 p-2 bg-neutral-800 rounded-lg"
                            >
                                <div className="w-10 h-10 bg-neutral-700 rounded flex items-center justify-center">
                                    <Package className="w-5 h-5 text-neutral-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        ${item.price}
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        className="p-1 hover:bg-neutral-700 rounded"
                                    >
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="w-6 text-center text-sm">
                                        {item.quantity}
                                    </span>
                                    <button
                                        type="button"
                                        className="p-1 hover:bg-neutral-700 rounded"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-700">
                            <span className="text-sm text-neutral-400">Total:</span>
                            <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="p-4 border-t border-neutral-800 bg-neutral-800/50">
                        <p className="text-xs text-neutral-500 font-mono">
                            cartSlice: {"{"} items, addItem, removeItem, updateQuantity{" "}
                            {"}"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Immer Pattern */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    Immer Integration
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                        <p className="text-xs text-red-400 mb-2">
                            Without Immer (Manual)
                        </p>
                        <pre className="text-xs text-neutral-400 overflow-x-auto">
                            {`addItem: (item) => set((state) => ({
  items: [...state.items, item]
}))

updateQuantity: (id, qty) => set((state) => ({
  items: state.items.map(item =>
    item.id === id 
      ? { ...item, quantity: qty }
      : item
  )
}))`}
                        </pre>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <p className="text-xs text-green-400 mb-2">
                            With Immer (Mutations)
                        </p>
                        <pre className="text-xs text-neutral-400 overflow-x-auto">
                            {`addItem: (item) => set((state) => {
  state.items.push(item) // Direct mutation!
})

updateQuantity: (id, qty) => set((state) => {
  const item = state.items.find(i => i.id === id)
  if (item) item.quantity = qty // Direct mutation!
})`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Computed State */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    Derived/Computed State
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`// Option 1: Selector functions (recommended)
const selectCartTotal = (state) => 
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

const selectCartCount = (state) => 
  state.items.reduce((count, item) => count + item.quantity, 0)

// Usage
const total = useStore(selectCartTotal)
const count = useStore(selectCartCount)

// Option 2: Getter in store (updates on every state change)
const useStore = create((set, get) => ({
  items: [],
  // Computed as getter
  get cartTotal() {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }
}))`}
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
                            <span>Create userSlice with StateCreator</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create cartSlice with StateCreator</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add immer middleware</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Combine slices in main store</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create computed selectors</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add TypeScript types for all</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
