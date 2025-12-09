import { Button } from "@/components/ui/button";
import {
    selectCartCount,
    selectCartTotal,
    useStore,
    type CartItem,
} from "@/state/zustand/patterns/cart-slice";
import { useShallow } from "zustand/react/shallow";
import { Minus, Package, Plus, ShoppingCart, Trash2 } from "lucide-react";

export const CartList = () => {
    const cartItems = useStore((s) => s.items);
    const [total, count] = useStore(
        useShallow((state) => [selectCartTotal(state), selectCartCount(state)]),
    );
    const [addItem, removeItem, updateQuantity] = useStore(
        useShallow((state) => [state.addItem, state.removeItem, state.updateQuantity]),
    );

    const handleAddItem = () => {
        const newItem: CartItem = {
            id: crypto.randomUUID(),
            name: `item-${Math.round(Math.random() * 100)}-😉`,
            price: Math.round(Math.random() * 500),
            productId: `product-${crypto.randomUUID()}`,
            quantity: 1,
        };

        addItem(newItem);
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
            <div className="p-4 border-b border-neutral-800 flex items-center  justify-between">
                <h3 className="font-semibold flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-green-400" />
                    Cart Slice
                </h3>
                <Button onClick={handleAddItem}>Add product</Button>
                <span className="p-1.5 w-8 bg-neutral-950  h-8 rounded flex items-center justify-center">
                    {" "}
                    {count}
                </span>
            </div>
            <div className="p-4 space-y-3">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 p-2 bg-neutral-800 rounded-lg"
                    >
                        <div className="w-10 h-10 bg-neutral-700 rounded flex items-center justify-center">
                            <Package className="w-5 h-5 text-neutral-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.name}</p>
                            <p className="text-xs text-neutral-500">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                type="button"
                                className="p-1 hover:bg-neutral-700 rounded"
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm">
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                type="button"
                                className="p-1 hover:bg-neutral-700 rounded"
                            >
                                <Plus className="w-3 h-3" />
                            </button>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            type="button"
                            className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-700">
                    <span className="text-sm text-neutral-400">Total:</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
            </div>
            <div className="p-4 border-t border-neutral-800 bg-neutral-800/50">
                <p className="text-xs text-neutral-500 font-mono">
                    cartSlice: {"{"} items, addItem, removeItem, updateQuantity {"}"}
                </p>
            </div>
        </div>
    );
};
