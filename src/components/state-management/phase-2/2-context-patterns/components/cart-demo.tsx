import { ShoppingCart } from "lucide-react";
import { CartItemsList } from "./cart-items-list";
import { useCart } from "@/state/context/patterns/cart-context";
import { AddProductButton } from "./add-product-btn";

export const CartDemo = () => {
    const { items } = useCart();

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-neutral-500" />
                    <h4 className="font-medium">Cart Demo</h4>
                </div>
                <div className="bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400 rounded">
                    CartHeader - Renders: 1
                </div>
            </div>

            <div className="p-4 space-y-3">
                <CartItemsList />
            </div>
            <AddProductButton />

            <div className="p-4 border-t border-neutral-800 bg-neutral-800/50">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-400">Cart Total</span>
                    <div className="bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 rounded">
                        Only uses state - Renders: 1
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-medium">Total</span>
                    <span className="text-xl font-bold text-emerald-400">
                        ${" "}
                        {Math.round(
                            items.reduce(
                                (sum, next) => sum + (next.price || 0) * next.quantity,
                                0,
                            ),
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};
