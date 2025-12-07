// ! THIS CAUSES THE UN_NECESSARY RE_RENDERS

import { createContext, useContext, useState, type ReactNode } from "react";

const mockItems = [
    { id: "1", name: "Wireless Mouse", price: 49.99, quantity: 2 },
    { id: "2", name: "Keyboard", price: 129.99, quantity: 1 },
];

type Item = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

// type CartContextType = {
//     items: Item[];
//     addItem: (item: Item) => void;
//     removeItem: (id: string) => void;
//     updateQuantity: (quantity: number, id: string) => void;
// };

type CartContextState = {
    items: Item[];
};

type CartContextActions = {
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
    updateQuantity: (quantity: number, id: string) => void;
};

type CartContextType = CartContextState & CartContextActions;

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartContextState["items"]>(mockItems);

    const addItem = (nItem: Item) => {
        const existingItem = items.find((item) => item.id === nItem.id);
        if (existingItem) {
            console.log("Inside if block");
            existingItem.quantity++;
            setItems(
                items.map((item) => (item.id === existingItem.id ? existingItem : item)),
            );
        } else {
            setItems((prev) => [...prev, nItem]);
        }
    };

    const removeItem = (id: string) => setItems(items.filter((i) => i.id !== id));

    const updateQuantity = (quantity: number, id: string) => {
        const item = items.find((i) => i.id === id);
        if (!item) return;

        if (quantity === 0) setItems(items.filter((item) => item.id !== id));
        else
            setItems(
                items.map((item) => (item.id === id ? { ...item, quantity } : item)),
            );
    };

    const cartValue = {
        addItem,
        items,
        removeItem,
        updateQuantity,
    };
    return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within the CartContext.Provider");
    return context;
};
