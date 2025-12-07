import { Package, User } from "lucide-react";
import { useSearchParams } from "react-router";

export const PER_PAGE = 8;
export const mockOrders = [
    {
        id: "ORD-001",
        customer: "John Doe",
        items: 3,
        total: 259.99,
        status: "processing",
        date: "2025-10-15",
    },
    {
        id: "ORD-002",
        customer: "Jane Smith",
        items: 1,
        total: 129.99,
        status: "shipped",
        date: "2025-11-14",
    },
    {
        id: "ORD-003",
        customer: "Bob Wilson",
        items: 5,
        total: 449.99,
        status: "delivered",
        date: "2025-09-14",
    },
    {
        id: "ORD-004",
        customer: "Alice Brown",
        items: 2,
        total: 89.99,
        status: "pending",
        date: "2025-12-04",
    },
    {
        id: "ORD-005",
        customer: "Charlie Davis",
        items: 4,
        total: 329.99,
        status: "cancelled",
        date: "2025-11-11",
    },

    // ---- NEW ORDERS BELOW ----

    {
        id: "ORD-006",
        customer: "Samuel Green",
        items: 2,
        total: 199.5,
        status: "processing",
        date: "2025-10-20",
    },
    {
        id: "ORD-007",
        customer: "Liam Johnson",
        items: 3,
        total: 289.0,
        status: "shipped",
        date: "2025-11-18",
    },
    {
        id: "ORD-008",
        customer: "Noah Williams",
        items: 1,
        total: 79.99,
        status: "pending",
        date: "2025-12-02",
    },
    {
        id: "ORD-009",
        customer: "Olivia Martinez",
        items: 6,
        total: 559.49,
        status: "delivered",
        date: "2025-09-30",
    },
    {
        id: "ORD-010",
        customer: "Emma Thompson",
        items: 4,
        total: 349.5,
        status: "cancelled",
        date: "2025-11-02",
    },

    {
        id: "ORD-011",
        customer: "Ava Rodriguez",
        items: 2,
        total: 189.99,
        status: "processing",
        date: "2025-10-10",
    },
    {
        id: "ORD-012",
        customer: "Sophia Lee",
        items: 7,
        total: 699.99,
        status: "delivered",
        date: "2025-09-01",
    },
    {
        id: "ORD-013",
        customer: "Isabella Moore",
        items: 1,
        total: 59.49,
        status: "pending",
        date: "2025-12-03",
    },
    {
        id: "ORD-014",
        customer: "Mia Taylor",
        items: 5,
        total: 399.99,
        status: "processing",
        date: "2025-10-22",
    },
    {
        id: "ORD-015",
        customer: "Ethan Anderson",
        items: 3,
        total: 249.0,
        status: "shipped",
        date: "2025-11-20",
    },

    {
        id: "ORD-016",
        customer: "James White",
        items: 4,
        total: 379.99,
        status: "cancelled",
        date: "2025-11-08",
    },
    {
        id: "ORD-017",
        customer: "Alexander Harris",
        items: 6,
        total: 489.99,
        status: "delivered",
        date: "2025-09-22",
    },
    {
        id: "ORD-018",
        customer: "Benjamin Clark",
        items: 2,
        total: 159.0,
        status: "pending",
        date: "2025-12-01",
    },
    {
        id: "ORD-019",
        customer: "Lucas Lewis",
        items: 8,
        total: 829.99,
        status: "processing",
        date: "2025-10-05",
    },
    {
        id: "ORD-020",
        customer: "Henry Walker",
        items: 1,
        total: 99.99,
        status: "shipped",
        date: "2025-11-25",
    },

    {
        id: "ORD-021",
        customer: "Michael Hall",
        items: 7,
        total: 649.5,
        status: "delivered",
        date: "2025-09-12",
    },
    {
        id: "ORD-022",
        customer: "Daniel Young",
        items: 3,
        total: 289.99,
        status: "pending",
        date: "2025-12-04",
    },
    {
        id: "ORD-023",
        customer: "Matthew King",
        items: 4,
        total: 379.0,
        status: "processing",
        date: "2025-10-17",
    },
    {
        id: "ORD-024",
        customer: "Joseph Wright",
        items: 5,
        total: 429.99,
        status: "cancelled",
        date: "2025-11-06",
    },
    {
        id: "ORD-025",
        customer: "David Lopez",
        items: 2,
        total: 149.99,
        status: "shipped",
        date: "2025-11-28",
    },
    {
        id: "ORD-026",
        customer: "Grace Coleman",
        items: 3,
        total: 219.99,
        status: "processing",
        date: "2025-10-08",
    },
    {
        id: "ORD-027",
        customer: "Victoria Perez",
        items: 6,
        total: 569.49,
        status: "delivered",
        date: "2025-09-28",
    },
];

const isWithinRange = (date: string, range: string) => {
    const orderDate = new Date(date);
    const now = new Date();

    if (range === "today") {
        return orderDate.toDateString() === now.toDateString();
    }

    if (range === "week") {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        return orderDate >= oneWeekAgo;
    }

    if (range === "month") {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(now.getMonth() - 1);
        return orderDate >= oneMonthAgo;
    }

    if (range === "quarter") {
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(now.getMonth() - 3);
        return orderDate >= threeMonthsAgo;
    }

    return true;
};

export const OrderList = () => {
    const [searchParams] = useSearchParams();

    const status = searchParams.get("status") || "all";
    const dateRange = searchParams.get("dateRange") || "all";
    const sort = searchParams.get("sort") || "newest";
    const page = Number(searchParams.get("page")) || 1;

    let filtered = mockOrders.filter((order) => {
        // Status filter
        if (status !== "all" && order.status !== status) return false;

        // Date range filter
        if (!isWithinRange(order.date, dateRange)) return false;

        return true;
    });

    // Sorting
    if (sort === "newest") {
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    if (sort === "oldest") {
        filtered = filtered.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
    }
    if (sort === "highest") {
        filtered = filtered.sort((a, b) => b.total - a.total);
    }
    if (sort === "lowest") {
        filtered = filtered.sort((a, b) => a.total - b.total);
    }

    const skip = (page - 1) * PER_PAGE; // (1-1) * 5=0, (2-1) * 5=5, (3-1) * 5=10
    const paginatedOrders = filtered.slice(skip, skip + PER_PAGE);

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

    console.log("paginatedOrders", paginatedOrders);
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-neutral-800">
                <h3 className="font-medium">Orders</h3>
                <p className="text-xs text-neutral-500 mt-1">
                    Showing {mockOrders.length} orders (filtered by URL params)
                </p>
            </div>

            <div className="divide-y divide-neutral-800">
                {paginatedOrders.map((order) => (
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
