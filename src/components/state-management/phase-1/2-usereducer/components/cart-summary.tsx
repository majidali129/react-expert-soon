import { Receipt, CreditCard } from "lucide-react";
import type { CartShape } from "../usereducer-index";

type CartSummaryProps = {
    cartInfo: CartShape;
};
export const CartSummary = ({ cartInfo }: CartSummaryProps) => {
    // TODO: Calculate from state
    const subtotal = cartInfo.total;
    const tax = 0;
    const total = cartInfo.total + tax;
    const itemCount = cartInfo.itemCount;

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
                <Receipt className="w-4 h-4 text-neutral-500" />
                <h3 className="font-medium">Order Summary</h3>
            </div>

            <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Items ({itemCount})</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-neutral-800 pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-emerald-400">${total.toFixed(2)}</span>
                </div>
            </div>

            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors font-medium"
            >
                <CreditCard className="w-4 h-4" />
                Checkout
            </button>
        </div>
    );
};
