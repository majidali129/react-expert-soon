import {
    Package,
    Plus,
    Minus,
    Edit2,
    Trash2,
    RotateCcw,
    AlertTriangle,
} from "lucide-react";

const mockProducts = [
    {
        id: "p1",
        sku: "WGT-001",
        name: "Premium Widget",
        category: "Electronics",
        stock: 145,
        minStock: 50,
        price: 29.99,
    },
    {
        id: "p2",
        sku: "GDG-002",
        name: "Super Gadget",
        category: "Electronics",
        stock: 23,
        minStock: 30,
        price: 89.99,
    },
    {
        id: "p3",
        sku: "ACC-003",
        name: "Basic Accessory",
        category: "Accessories",
        stock: 0,
        minStock: 20,
        price: 14.99,
    },
    {
        id: "p4",
        sku: "TOL-004",
        name: "Power Tool",
        category: "Tools",
        stock: 67,
        minStock: 25,
        price: 149.99,
    },
    {
        id: "p5",
        sku: "SUP-005",
        name: "Office Supplies Pack",
        category: "Supplies",
        stock: 12,
        minStock: 40,
        price: 34.99,
    },
];

const actionHistory = [
    { id: 1, type: "ADD_ITEM", payload: "Premium Widget", time: "2 min ago" },
    { id: 2, type: "UPDATE_STOCK", payload: "Super Gadget: 30 → 23", time: "5 min ago" },
    {
        id: 3,
        type: "UPDATE_STOCK",
        payload: "Basic Accessory: 5 → 0",
        time: "10 min ago",
    },
];

export const InventoryDashboard = () => {
    // TODO: Create Redux store with createStore()
    // TODO: Define action types (ADD_ITEM, REMOVE_ITEM, UPDATE_STOCK, SET_FILTER)
    // TODO: Create action creators
    // TODO: Implement reducer with switch statement
    // TODO: Use combineReducers for inventory + filters + ui slices
    // TODO: Connect components using connect HOC (practice legacy pattern)
    // TODO: Refactor to useSelector and useDispatch hooks

    return (
        <div className="space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500 mb-1">Total Products</p>
                    <p className="text-2xl font-bold">247</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500 mb-1">In Stock</p>
                    <p className="text-2xl font-bold text-green-400">198</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500 mb-1">Low Stock</p>
                    <p className="text-2xl font-bold text-amber-400">37</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500 mb-1">Out of Stock</p>
                    <p className="text-2xl font-bold text-red-400">12</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* Product List */}
                <div className="col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Package className="w-4 h-4 text-purple-400" />
                            Inventory Items
                        </h3>
                        <button
                            type="button"
                            className="px-3 py-1.5 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm flex items-center gap-2 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Product
                        </button>
                    </div>

                    {/* Filter Bar */}
                    <div className="p-4 border-b border-neutral-800 flex gap-3">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                        />
                        <select className="px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none">
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="accessories">Accessories</option>
                            <option value="tools">Tools</option>
                            <option value="supplies">Supplies</option>
                        </select>
                        <select className="px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none">
                            <option value="">All Status</option>
                            <option value="in-stock">In Stock</option>
                            <option value="low-stock">Low Stock</option>
                            <option value="out-of-stock">Out of Stock</option>
                        </select>
                    </div>

                    {/* Product Table */}
                    <div className="divide-y divide-neutral-800">
                        {mockProducts.map((product) => {
                            const stockStatus =
                                product.stock === 0
                                    ? "out"
                                    : product.stock < product.minStock
                                      ? "low"
                                      : "ok";

                            return (
                                <div
                                    key={product.id}
                                    className="p-4 flex items-center gap-4 hover:bg-neutral-800/50 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                        <Package className="w-5 h-5 text-neutral-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium truncate">
                                                {product.name}
                                            </p>
                                            {stockStatus === "out" && (
                                                <span className="px-1.5 py-0.5 bg-red-500/20 text-red-400 text-xs rounded">
                                                    Out
                                                </span>
                                            )}
                                            {stockStatus === "low" && (
                                                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded flex items-center gap-1">
                                                    <AlertTriangle className="w-3 h-3" />{" "}
                                                    Low
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-neutral-500">
                                            {product.sku} · {product.category}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">
                                            {product.stock} units
                                        </p>
                                        <p className="text-xs text-neutral-500">
                                            Min: {product.minStock}
                                        </p>
                                    </div>
                                    <div className="text-right w-20">
                                        <p className="font-medium">${product.price}</p>
                                    </div>
                                    {/* Stock Adjustment */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-neutral-700 rounded transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-neutral-700 rounded transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    {/* Actions */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-neutral-700 rounded transition-colors"
                                        >
                                            <Edit2 className="w-4 h-4 text-neutral-400" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Action History / Redux DevTools Preview */}
                <div className="space-y-4">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                            <h3 className="font-semibold text-sm">Action History</h3>
                            <button
                                type="button"
                                className="p-1 hover:bg-neutral-700 rounded transition-colors"
                            >
                                <RotateCcw className="w-4 h-4 text-neutral-400" />
                            </button>
                        </div>
                        <div className="divide-y divide-neutral-800 max-h-64 overflow-y-auto">
                            {actionHistory.map((action) => (
                                <div
                                    key={action.id}
                                    className="p-3 hover:bg-neutral-800/50 cursor-pointer transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-mono text-purple-400">
                                            {action.type}
                                        </span>
                                        <span className="text-xs text-neutral-500">
                                            {action.time}
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-400">
                                        {action.payload}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* State Preview */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                        <h3 className="font-semibold text-sm mb-3">Current State</h3>
                        <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                            {`{
  inventory: {
    items: [...], // 5 items
    filter: {
      search: "",
      category: null,
      status: null
    }
  },
  ui: {
    selectedId: null,
    isAddModalOpen: false
  }
}`}
                        </pre>
                    </div>

                    {/* TODO Checklist */}
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                        <h3 className="font-semibold text-sm text-purple-400 mb-3">
                            Implementation Tasks
                        </h3>
                        <ul className="text-xs text-neutral-400 space-y-2">
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Create store with createStore()</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Define action types as constants</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Create action creators</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Implement inventoryReducer</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Use combineReducers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Try connect HOC pattern</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>Refactor to hooks</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
