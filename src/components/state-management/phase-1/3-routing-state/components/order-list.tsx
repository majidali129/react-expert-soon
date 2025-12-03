import { Package, User } from "lucide-react";

const mockOrders = [
    {
        id: "ORD-001",
        customer: "John Doe",
        items: 3,
        total: 259.99,
        status: "processing",
        date: "2024-01-15",
    },
    {
        id: "ORD-002",
        customer: "Jane Smith",
        items: 1,
        total: 129.99,
        status: "shipped",
        date: "2024-01-14",
    },
    {
        id: "ORD-003",
        customer: "Bob Wilson",
        items: 5,
        total: 449.99,
        status: "delivered",
        date: "2024-01-13",
    },
    {
        id: "ORD-004",
        customer: "Alice Brown",
        items: 2,
        total: 89.99,
        status: "pending",
        date: "2024-01-12",
    },
    {
        id: "ORD-005",
        customer: "Charlie Davis",
        items: 4,
        total: 329.99,
        status: "cancelled",
        date: "2024-01-11",
    },
];

export const OrderList = () => {
    // TODO: Filter orders based on URL params
    // const filteredOrders = useMemo(() => {
    //   return mockOrders.filter(order => {
    //     if (status !== 'all' && order.status !== status) return false
    //     // Add date range filtering
    //     return true
    //   })
    // }, [status, dateRange])

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-amber-500/20 text-amber-400";
            case "processing":
                return "bg-blue-500/20 text-blue-400";
            case "shipped":
                return "bg-purple-500/20 text-purple-400";
            case "delivered":
                return "bg-emerald-500/20 text-emerald-400";
            case "cancelled":
                return "bg-red-500/20 text-red-400";
            default:
                return "bg-neutral-500/20 text-neutral-400";
        }
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-neutral-800">
                <h3 className="font-medium">Orders</h3>
                <p className="text-xs text-neutral-500 mt-1">
                    Showing {mockOrders.length} orders (filtered by URL params)
                </p>
            </div>

            <div className="divide-y divide-neutral-800">
                {mockOrders.map((order) => (
                    <div
                        key={order.id}
                        className="p-4 hover:bg-neutral-800/30 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <span className="font-mono text-sm font-medium">
                                    {order.id}
                                </span>
                                <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                                    <User className="w-3 h-3" />
                                    {order.customer}
                                </div>
                            </div>
                            <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                            >
                                {order.status}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4 text-neutral-400">
                                <span className="flex items-center gap-1">
                                    <Package className="w-3 h-3" />
                                    {order.items} items
                                </span>
                                <span>{order.date}</span>
                            </div>
                            <span className="font-semibold text-emerald-400">
                                ${order.total}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
