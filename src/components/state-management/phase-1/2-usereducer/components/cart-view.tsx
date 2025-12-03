import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";

export const CartView = () => {
    // TODO: Get cart state from useReducer
    // const { items } = state

    // Mock cart items for UI
    const mockItems = [
        { id: "p1", name: "Wireless Mouse", price: 49.99, quantity: 2 },
        { id: "p2", name: "Mechanical Keyboard", price: 129.99, quantity: 1 },
    ];

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-neutral-500" />
                    <h3 className="font-medium">Cart</h3>
                    <span className="text-xs text-neutral-500">(3 items)</span>
                </div>
                <button
                    type="button"
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                    // TODO: dispatch({ type: 'CLEAR_CART' })
                >
                    Clear Cart
                </button>
            </div>

            {mockItems.length === 0 ? (
                <div className="text-center py-8 text-neutral-500">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {mockItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-3 bg-neutral-800 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center shrink-0">
                                <ShoppingCart className="w-5 h-5 text-neutral-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">
                                    {item.name}
                                </h4>
                                <p className="text-xs text-neutral-500">
                                    ${item.price} each
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className="p-1 bg-neutral-700 rounded hover:bg-neutral-600 transition-colors"
                                    // TODO: dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })
                                >
                                    <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium">
                                    {item.quantity}
                                </span>
                                <button
                                    type="button"
                                    className="p-1 bg-neutral-700 rounded hover:bg-neutral-600 transition-colors"
                                    // TODO: dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })
                                >
                                    <Plus className="w-3 h-3" />
                                </button>
                            </div>
                            <button
                                type="button"
                                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                // TODO: dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
