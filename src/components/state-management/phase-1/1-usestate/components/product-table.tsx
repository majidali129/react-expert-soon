import { Package, MoreVertical } from "lucide-react";

const mockProducts = [
    {
        id: "1",
        name: "Wireless Headphones",
        sku: "WH-001",
        price: 149.99,
        stock: 45,
        status: "active",
        category: "electronics",
    },
    {
        id: "2",
        name: "Cotton T-Shirt",
        sku: "CT-002",
        price: 29.99,
        stock: 120,
        status: "active",
        category: "clothing",
    },
    {
        id: "3",
        name: "Office Chair",
        sku: "OC-003",
        price: 299.99,
        stock: 8,
        status: "draft",
        category: "furniture",
    },
    {
        id: "4",
        name: "Leather Wallet",
        sku: "LW-004",
        price: 59.99,
        stock: 0,
        status: "archived",
        category: "accessories",
    },
    {
        id: "5",
        name: "Bluetooth Speaker",
        sku: "BS-005",
        price: 79.99,
        stock: 32,
        status: "active",
        category: "electronics",
    },
    {
        id: "6",
        name: "Denim Jeans",
        sku: "DJ-006",
        price: 89.99,
        stock: 67,
        status: "active",
        category: "clothing",
    },
];

export const ProductTable = () => {
    // TODO: Add array state for selected products
    // const [selectedProducts, setSelectedProducts] = useState<string[]>([])

    // TODO: Toggle single product selection
    // const toggleProduct = (id: string) => {
    //   setSelectedProducts(prev =>
    //     prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    //   )
    // }

    // TODO: Select all / Deselect all
    // const toggleAll = () => {
    //   setSelectedProducts(prev =>
    //     prev.length === mockProducts.length ? [] : mockProducts.map(p => p.id)
    //   )
    // }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-emerald-500/20 text-emerald-400";
            case "draft":
                return "bg-amber-500/20 text-amber-400";
            case "archived":
                return "bg-neutral-500/20 text-neutral-400";
            default:
                return "bg-neutral-500/20 text-neutral-400";
        }
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-neutral-500" />
                    <h3 className="font-medium">Products</h3>
                    <span className="text-xs text-neutral-500">
                        ({mockProducts.length} items)
                    </span>
                </div>
                {/* TODO: Show selected count when items selected */}
                {/* {selectedProducts.length > 0 && (
          <span className="text-sm text-emerald-400">{selectedProducts.length} selected</span>
        )} */}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-neutral-800/50">
                            <th className="p-4 text-left w-12">
                                {/* TODO: Select all checkbox */}
                                <button
                                    type="button"
                                    className="w-5 h-5 rounded border border-neutral-600 flex items-center justify-center hover:border-emerald-500/50 transition-colors"
                                    // TODO: onClick={toggleAll}
                                >
                                    {/* TODO: Show check when all selected */}
                                </button>
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                                Product
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                                SKU
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                                Stock
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="p-4 text-left w-12"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockProducts.map((product) => (
                            <tr
                                key={product.id}
                                className="border-t border-neutral-800 hover:bg-neutral-800/30 transition-colors"
                            >
                                <td className="p-4">
                                    {/* TODO: Individual checkbox */}
                                    <button
                                        type="button"
                                        className="w-5 h-5 rounded border border-neutral-600 flex items-center justify-center hover:border-emerald-500/50 transition-colors"
                                        // TODO: onClick={() => toggleProduct(product.id)}
                                    >
                                        {/* TODO: Show check when selected */}
                                        {/* {selectedProducts.includes(product.id) && <Check className="w-3 h-3 text-emerald-400" />} */}
                                    </button>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                            <Package className="w-5 h-5 text-neutral-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-xs text-neutral-500">
                                                {product.category}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-neutral-400">
                                    {product.sku}
                                </td>
                                <td className="p-4 text-sm">
                                    ${product.price.toFixed(2)}
                                </td>
                                <td className="p-4">
                                    <span
                                        className={`text-sm ${product.stock === 0 ? "text-red-400" : product.stock < 10 ? "text-amber-400" : "text-neutral-300"}`}
                                    >
                                        {product.stock}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button
                                        type="button"
                                        className="p-1 rounded hover:bg-neutral-700 transition-colors"
                                    >
                                        <MoreVertical className="w-4 h-4 text-neutral-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
