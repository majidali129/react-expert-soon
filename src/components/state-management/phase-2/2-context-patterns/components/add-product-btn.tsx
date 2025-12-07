import { useCartDispatch } from "@/state/context/patterns/cart-context-with-reducer-pattern";
import { Plus } from "lucide-react";

export const AddProductButton = () => {
    const dispatch = useCartDispatch();
    return (
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
                onClick={() =>
                    dispatch({
                        type: "ADD_ITEM",
                        payload: {
                            id: String(Math.random() * 1000),
                            name: "Random Item",
                            price: 23,
                            quantity: 1,
                        },
                    })
                }
            >
                <Plus className="w-4 h-4 inline mr-2" />
                Add Random Product
            </button>
        </div>
    );
};
