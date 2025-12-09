import { UserList } from "./user-list";
import { CartList } from "./cart-list";

export const SlicedStoreDemo = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                {/* User Slice Demo */}
                <UserList />
                {/* Cart Slice Demo */}
                <CartList />
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
