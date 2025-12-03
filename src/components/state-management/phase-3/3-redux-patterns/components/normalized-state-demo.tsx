import { Users, ShoppingBag, Package, LinkIcon, ArrowRight } from "lucide-react";

const normalizedState = {
    entities: {
        customers: {
            c1: { id: "c1", name: "Alice Johnson", email: "alice@example.com" },
            c2: { id: "c2", name: "Bob Smith", email: "bob@example.com" },
            c3: { id: "c3", name: "Carol White", email: "carol@example.com" },
        },
        products: {
            p1: { id: "p1", name: "Premium Widget", price: 29.99, stock: 145 },
            p2: { id: "p2", name: "Super Gadget", price: 89.99, stock: 23 },
            p3: { id: "p3", name: "Basic Tool", price: 14.99, stock: 67 },
        },
        orders: {
            o1: {
                id: "o1",
                customerId: "c1",
                productIds: ["p1", "p2"],
                total: 119.98,
                status: "shipped",
            },
            o2: {
                id: "o2",
                customerId: "c2",
                productIds: ["p3"],
                total: 14.99,
                status: "pending",
            },
            o3: {
                id: "o3",
                customerId: "c1",
                productIds: ["p1", "p3"],
                total: 44.98,
                status: "delivered",
            },
        },
    },
    ids: {
        customers: ["c1", "c2", "c3"],
        products: ["p1", "p2", "p3"],
        orders: ["o1", "o2", "o3"],
    },
};

export const NormalizedStateDemo = () => {
    // TODO: Create normalized state structure
    // TODO: Implement selector functions (selectAllOrders, selectOrderById, selectOrderWithDetails)
    // TODO: Use createSelector from reselect for memoization
    // TODO: Add TypeScript interfaces for entities
    // TODO: Implement Duck pattern (actions, reducer, selectors in one file)

    return (
        <div className="space-y-6">
            {/* Entity Relationship Diagram */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Entity Relationships</h3>
                <div className="flex items-center justify-center gap-8">
                    <div className="w-32 p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl text-center">
                        <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-sm font-medium">Customers</p>
                        <p className="text-xs text-neutral-500">3 entities</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <ArrowRight className="w-5 h-5 text-neutral-600" />
                        <span className="text-xs text-neutral-500">1:N</span>
                    </div>
                    <div className="w-32 p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl text-center">
                        <ShoppingBag className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-medium">Orders</p>
                        <p className="text-xs text-neutral-500">3 entities</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <ArrowRight className="w-5 h-5 text-neutral-600" />
                        <span className="text-xs text-neutral-500">N:M</span>
                    </div>
                    <div className="w-32 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                        <Package className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <p className="text-sm font-medium">Products</p>
                        <p className="text-xs text-neutral-500">3 entities</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {/* Customers Entity */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold text-sm flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            customers
                        </h3>
                    </div>
                    <div className="p-4 space-y-2">
                        {Object.values(normalizedState.entities.customers).map(
                            (customer) => (
                                <div
                                    key={customer.id}
                                    className="p-2 bg-neutral-800 rounded-lg"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-mono text-blue-400">
                                            {customer.id}
                                        </span>
                                        <LinkIcon className="w-3 h-3 text-neutral-600" />
                                    </div>
                                    <p className="text-sm">{customer.name}</p>
                                    <p className="text-xs text-neutral-500">
                                        {customer.email}
                                    </p>
                                </div>
                            ),
                        )}
                    </div>
                </div>

                {/* Orders Entity */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold text-sm flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4 text-purple-400" />
                            orders
                        </h3>
                    </div>
                    <div className="p-4 space-y-2">
                        {Object.values(normalizedState.entities.orders).map((order) => (
                            <div key={order.id} className="p-2 bg-neutral-800 rounded-lg">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-mono text-purple-400">
                                        {order.id}
                                    </span>
                                    <span
                                        className={`text-xs px-1.5 py-0.5 rounded ${
                                            order.status === "delivered"
                                                ? "bg-green-500/20 text-green-400"
                                                : order.status === "shipped"
                                                  ? "bg-blue-500/20 text-blue-400"
                                                  : "bg-amber-500/20 text-amber-400"
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-xs text-neutral-400">
                                    <span className="text-blue-400">
                                        {order.customerId}
                                    </span>
                                    {" → "}
                                    <span className="text-green-400">
                                        [{order.productIds.join(", ")}]
                                    </span>
                                </p>
                                <p className="text-sm font-medium mt-1">${order.total}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products Entity */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold text-sm flex items-center gap-2">
                            <Package className="w-4 h-4 text-green-400" />
                            products
                        </h3>
                    </div>
                    <div className="p-4 space-y-2">
                        {Object.values(normalizedState.entities.products).map(
                            (product) => (
                                <div
                                    key={product.id}
                                    className="p-2 bg-neutral-800 rounded-lg"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-mono text-green-400">
                                            {product.id}
                                        </span>
                                        <span className="text-xs text-neutral-500">
                                            {product.stock} in stock
                                        </span>
                                    </div>
                                    <p className="text-sm">{product.name}</p>
                                    <p className="text-sm font-medium">
                                        ${product.price}
                                    </p>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>

            {/* Selector Patterns */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    Selector Patterns with Reselect
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`import { createSelector } from 'reselect'

// Base selectors
const selectOrdersEntities = (state) => state.entities.orders
const selectOrderIds = (state) => state.ids.orders
const selectCustomers = (state) => state.entities.customers
const selectProducts = (state) => state.entities.products

// Memoized selector - all orders
const selectAllOrders = createSelector(
  [selectOrdersEntities, selectOrderIds],
  (entities, ids) => ids.map(id => entities[id])
)

// Parameterized selector - order by id
const selectOrderById = (orderId) => createSelector(
  [selectOrdersEntities],
  (entities) => entities[orderId]
)

// Denormalized selector - order with full details
const selectOrderWithDetails = (orderId) => createSelector(
  [selectOrdersEntities, selectCustomers, selectProducts],
  (orders, customers, products) => {
    const order = orders[orderId]
    return {
      ...order,
      customer: customers[order.customerId],
      products: order.productIds.map(id => products[id])
    }
  }
)`}
                </pre>
            </div>

            {/* TypeScript Pattern */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    TypeScript Integration
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`// Types
interface Customer { id: string; name: string; email: string }
interface Product { id: string; name: string; price: number; stock: number }
interface Order { id: string; customerId: string; productIds: string[]; total: number; status: string }

interface NormalizedState<T> {
  entities: Record<string, T>
  ids: string[]
}

interface RootState {
  customers: NormalizedState<Customer>
  products: NormalizedState<Product>
  orders: NormalizedState<Order>
}

// Typed hooks
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch = () => useDispatch<AppDispatch>()`}
                </pre>
            </div>

            {/* TODO Checklist */}
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                <h3 className="font-semibold text-sm text-purple-400 mb-3">
                    Implementation Tasks
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create normalized state structure</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Implement base selectors</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add memoized selectors with createSelector</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create parameterized selectors</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add TypeScript interfaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Implement Duck pattern module</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
