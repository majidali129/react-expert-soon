import { Plus, Package } from "lucide-react";
import { addItem, type CartAction, type Product } from "../usereducer-index";
import type { ActionDispatch } from "react";

type ProductCatalogProps = {
    products: Product[];
    dispatch: ActionDispatch<[action: CartAction]>;
};
export const ProductCatalog = ({ products, dispatch }: ProductCatalogProps) => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-neutral-500" />
                <h3 className="font-medium">Product Catalog</h3>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-neutral-800 rounded-lg p-4 flex flex-col"
                    >
                        <div className="w-full h-20 bg-neutral-700 rounded-lg mb-3 flex items-center justify-center">
                            <Package className="w-8 h-8 text-neutral-500" />
                        </div>
                        <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                        <p className="text-emerald-400 font-semibold mb-3">
                            ${product.price}
                        </p>
                        <button
                            type="button"
                            className="mt-auto flex items-center justify-center gap-2 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors text-sm"
                            onClick={() => dispatch(addItem(product))}
                        >
                            <Plus className="w-4 h-4" />
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
