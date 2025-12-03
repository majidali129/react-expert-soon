import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

export const CartDemo = () => {
    // TODO: Create CartProvider and wrap this component
    // TODO: Use useCartState() and useCartDispatch()

    const mockItems = [
        { id: "1", name: "Wireless Mouse", price: 49.99, quantity: 2 },
        { id: "2", name: "Keyboard", price: 129.99, quantity: 1 },
    ];

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            {/* Header - Only needs state (count) */}
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-neutral-500" />
                    <h4 className="font-medium">Cart Demo</h4>
                </div>
                <div className="bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400 rounded">
                    CartHeader - Renders: 1
                </div>
            </div>

            {/* Items List - Needs both state and dispatch */}
            <div className="p-4 space-y-3">
                {mockItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg"
                    >
                        <div className="flex-1">
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-neutral-500">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="p-1 bg-neutral-700 rounded hover:bg-neutral-600"
                                // TODO: dispatch({ type: 'DECREMENT', id: item.id })
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm">
                                {item.quantity}
                            </span>
                            <button
                                type="button"
                                className="p-1 bg-neutral-700 rounded hover:bg-neutral-600"
                                // TODO: dispatch({ type: 'INCREMENT', id: item.id })
                            >
                                <Plus className="w-3 h-3" />
                            </button>
                            <button
                                type="button"
                                className="p-1 text-red-400 hover:bg-red-500/10 rounded"
                                // TODO: dispatch({ type: 'REMOVE', id: item.id })
                            >
                                <Trash2 className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Button - Only needs dispatch */}
            <div className="p-4 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-neutral-400">Add Product Button</span>
                    <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 rounded">
                        Only uses dispatch - Renders: 1
                    </div>
                </div>
                <button
                    type="button"
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors text-sm font-medium"
                    // TODO: dispatch({ type: 'ADD', item: newProduct })
                >
                    <Plus className="w-4 h-4 inline mr-2" />
                    Add Random Product
                </button>
            </div>

            {/* Total - Only needs state */}
            <div className="p-4 border-t border-neutral-800 bg-neutral-800/50">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-400">Cart Total</span>
                    <div className="bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 rounded">
                        Only uses state - Renders: 1
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-medium">Total</span>
                    <span className="text-xl font-bold text-emerald-400">$229.97</span>
                </div>
            </div>
        </div>
    );
};
