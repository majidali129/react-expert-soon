import { create, type ExtractState, type StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

const mockUser = {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    avatar: null,
};

const mockCartItems = [
    { id: "c1", productId: "p1", name: "Premium Widget", price: 29.99, quantity: 2 },
    { id: "c2", productId: "p2", name: "Super Gadget", price: 89.99, quantity: 1 },
];

// ! User Types ========================
export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
}

export interface UserSlice {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}

// ! Cart types ============================
export interface CartItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartSlice {
    items: CartItem[];
    total: number;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

// ! ========================= With Immer =========================

const createCartSlice: StateCreator<
    CartSlice & UserSlice,
    [["zustand/immer", never]],
    [],
    CartSlice
> = (set) => ({
    items: mockCartItems,
    total: 34,
    addItem: (item) =>
        set((state) => {
            state.items.unshift(item);
        }),
    removeItem: (id) =>
        set((state) => {
            state.items = state.items.filter((item) => item.id !== id);
        }),
    updateQuantity: (id, qunatity) =>
        set((state) => {
            state.items = state.items.map((item) =>
                item.id === id ? { ...item, quantity: qunatity } : item,
            );
        }),
    clearCart: () => set({ items: [] }),
});

const createUserSlice: StateCreator<
    UserSlice & CartSlice,
    [["zustand/immer", never]],
    [],
    UserSlice
> = (set) => ({
    user: mockUser,
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }),
});

export const useStore = create<CartSlice & UserSlice>()(
    immer((...args) => ({
        ...createCartSlice(...args),
        ...createUserSlice(...args),
    })),
);

// ! ========================= Without Immer =========================
// const createCartSlice: StateCreator<CartSlice & UserSlice, [], [], CartSlice> = (
//     set,
// ) => ({
//     items: mockCartItems,
//     addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
//     removeItem: (id) =>
//         set((state) => ({
//             items: state.items.filter((i) => i.id !== id),
//         })),
//     updateQuantity: (id, quantity) =>
//         set((state) => ({
//             items: state.items.map((item) =>
//                 item.id === id ? { ...item, quantity } : item,
//             ),
//         })),
//     clearCart: () => set({ items: [] }),
// });

// const createUserSlice: StateCreator<CartSlice & UserSlice, [], [], UserSlice> = (
//     set,
// ) => ({
//     user: mockUser,
//     logout: () => set({ user: null }),
//     setUser: (user) => set({ user }),
// });

// export const useStore = create<CartSlice & UserSlice>()((...a) => ({
//     ...createUserSlice(...a),
//     ...createCartSlice(...a),
// }));

// !=============================================

export type CartStore = ExtractState<typeof useStore>;

export const selectCartTotal = (store: CartStore) =>
    store.items.reduce((sum, next) => sum + (next.price ?? 0) * next.quantity, 0);
export const selectCartCount = (store: CartStore) =>
    store.items.reduce((sum, nItem) => sum + nItem.quantity, 0);
