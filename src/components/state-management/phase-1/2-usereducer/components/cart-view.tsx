import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import type { ActionDispatch } from "react";
import {
    clearCart,
    removeItem,
    updateQuantity,
    type CartAction,
    type CartItem,
} from "../usereducer-index";

type CartViewProps = {
    dispatch: ActionDispatch<[action: CartAction]>;
    cartItems: CartItem[];
    itemCount: number;
};

export const CartView = ({ dispatch, cartItems, itemCount }: CartViewProps) => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-neutral-500" />
                    <h3 className="font-medium">Cart</h3>
                    <span className="text-xs text-neutral-500">({0} items)</span>
                </div>
                {itemCount > 0 && (
                    <button
                        type="button"
                        className="text-xs text-red-400 hover:text-red-300 transition-colors"
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            {itemCount === 0 ? (
                <div className="text-center py-8 text-neutral-500">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {cartItems.map((item) => (
                        <div
                            key={item.item.id}
                            className="flex items-center gap-4 p-3 bg-neutral-800 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center shrink-0">
                                <ShoppingCart className="w-5 h-5 text-neutral-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">
                                    {item.item.name}
                                </h4>
                                <p className="text-xs text-neutral-500">
                                    ${item.item.price} each
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    // disabled={item.quantity === 1}
                                    type="button"
                                    className="p-1 bg-neutral-700 rounded hover:bg-neutral-600 transition-colors"
                                    onClick={() =>
                                        dispatch(
                                            updateQuantity(
                                                item.item.id,
                                                item.quantity - 1,
                                            ),
                                        )
                                    }
                                >
                                    <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium">
                                    {item?.quantity}
                                </span>
                                <button
                                    type="button"
                                    className="p-1 bg-neutral-700 rounded hover:bg-neutral-600 transition-colors"
                                    onClick={() =>
                                        dispatch(
                                            updateQuantity(
                                                item.item.id,
                                                item.quantity + 1,
                                            ),
                                        )
                                    }
                                >
                                    <Plus className="w-3 h-3" />
                                </button>
                            </div>
                            <button
                                type="button"
                                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                onClick={() => dispatch(removeItem(item.item.id))}
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
