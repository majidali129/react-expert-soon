import {
    useCartDispatch,
    type Item,
} from "@/state/context/patterns/cart-context-with-reducer-pattern";
import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";

type CartItemActionsProps = {
    item: Item;
};
export const CartItemActions = React.memo(({ item }: CartItemActionsProps) => {
    const dispatch = useCartDispatch();
    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                className="p-1 bg-neutral-700 rounded hover:bg-neutral-600"
                // onClick={() => updateQuantity(item.quantity - 1, item.id)}
                onClick={() =>
                    dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                }
            >
                <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-sm">{item.quantity}</span>
            <button
                type="button"
                className="p-1 bg-neutral-700 rounded hover:bg-neutral-600"
                // onClick={() => updateQuantity(item.quantity + 1, item.id)}
                onClick={() =>
                    dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                }
            >
                <Plus className="w-3 h-3" />
            </button>
            <button
                type="button"
                className="p-1 text-red-400 hover:bg-red-500/10 rounded"
                // onClick={() => removeItem(item.id)}
                onClick={() =>
                    dispatch({
                        type: "REMOVE_ITEM",
                        payload: { id: item.id },
                    })
                }
            >
                <Trash2 className="w-3 h-3" />
            </button>
        </div>
    );
});
