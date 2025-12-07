import { useCartState } from "@/state/context/patterns/cart-context-with-reducer-pattern";
import { CartItemActions } from "./cart-item-actions";

export const CartItemsList = () => {
    const { items } = useCartState();
    return (
        <>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-neutral-500">${item.price}</p>
                    </div>
                    <CartItemActions item={item} />
                </div>
            ))}
        </>
    );
};
