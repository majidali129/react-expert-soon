import {
    createContext,
    useContext,
    useReducer,
    type Dispatch,
    type ReactNode,
} from "react";

const mockItems = [
    { id: "1", name: "Wireless Mouse", price: 49.99, quantity: 2 },
    { id: "2", name: "Keyboard", price: 129.99, quantity: 1 },
];

export type Item = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: Item[];
};

const initialValue: CartState = {
    items: mockItems,
};
const CartStateContext = createContext<CartState | undefined>(undefined);

const CartDispatchContext = createContext<Dispatch<CartAction> | undefined>(undefined);

type CartAction =
    | { type: "ADD_ITEM"; payload: Item }
    | {
          type: "REMOVE_ITEM";
          payload: { id: string };
      }
    | {
          type: "UPDATE_QUANTITY";
          payload: { id: string; quantity: number };
      };

const addItem = (nItem: Item, items: Item[]) => {
    const existingItem = items.find((i) => i.id === nItem.id);
    if (existingItem) {
        return {
            items: items.map((i) =>
                i.id === nItem.id ? { ...i, quantity: i.quantity + 1 } : i,
            ),
        };
    } else {
        return {
            items: [...items, nItem],
        };
    }
};

const removeItem = (id: string, items: Item[]) => {
    return {
        items: items.filter((i) => i.id !== id),
    };
};

const updateQuantity = (id: string, quantity: number, items: Item[]) => {
    let updatedItems: CartState["items"];
    if (quantity === 0) {
        updatedItems = items.filter((i) => i.id !== id);
    } else {
        updatedItems = items.map((i) => (i.id === id ? { ...i, quantity: quantity } : i));
    }
    return {
        items: updatedItems,
    };
};

const cartReducer = (state: CartState, action: CartAction) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const { items: updatedItems } = addItem(action.payload, state.items);
            return {
                ...state,
                items: updatedItems,
            };
        }
        case "REMOVE_ITEM": {
            const { items: updatedItems } = removeItem(action.payload.id, state.items);
            return { ...state, items: updatedItems };
        }
        case "UPDATE_QUANTITY": {
            const { items: updatedItems } = updateQuantity(
                action.payload.id,
                action.payload.quantity,
                state.items,
            );
            return { ...state, items: updatedItems };
        }
        default: {
            const _exhaustive: never = action;
            throw new Error(
                `Unhandled action ${(action as any)?.type ?? String(action)}`,
            );
        }
    }
};

export const CartContextWithReducerProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialValue);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

export const useCartState = () => {
    const context = useContext(CartStateContext);
    if (!context)
        throw new Error("useCartState must be use within the CartStateContext.Provider");
    return context;
};
export const useCartDispatch = () => {
    const context = useContext(CartDispatchContext);
    if (!context)
        throw new Error(
            "useCartDispatch must be use within the CartDispatchContext.Provider",
        );
    return context;
};
