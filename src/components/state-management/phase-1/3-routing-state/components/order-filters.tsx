import { Filter, Calendar, SortAsc } from "lucide-react";

export const OrderFilters = () => {
    // TODO: Use useSearchParams to manage URL state
    // const searchParams = useSearchParams()
    // const router = useRouter()
    // const pathname = usePathname()

    // TODO: Read from URL
    // const status = searchParams.get('status') || 'all'
    // const dateRange = searchParams.get('dateRange') || 'all'
    // const sort = searchParams.get('sort') || 'newest'

    // TODO: Update URL params
    // const updateParams = (key: string, value: string) => {
    //   const params = new URLSearchParams(searchParams)
    //   if (value === 'all') {
    //     params.delete(key)
    //   } else {
    //     params.set(key, value)
    //   }
    //   router.push(`${pathname}?${params.toString()}`)
    // }

    const statuses = [
        { value: "all", label: "All Orders" },
        { value: "pending", label: "Pending" },
        { value: "processing", label: "Processing" },
        { value: "shipped", label: "Shipped" },
        { value: "delivered", label: "Delivered" },
        { value: "cancelled", label: "Cancelled" },
    ];

    const dateRanges = [
        { value: "all", label: "All Time" },
        { value: "today", label: "Today" },
        { value: "week", label: "This Week" },
        { value: "month", label: "This Month" },
        { value: "quarter", label: "This Quarter" },
    ];

    const sortOptions = [
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        { value: "highest", label: "Highest Value" },
        { value: "lowest", label: "Lowest Value" },
    ];

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-neutral-500" />
                <h3 className="font-medium">Order Filters</h3>
                <span className="text-xs text-neutral-500 ml-auto">
                    Changes sync to URL
                </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
                {/* Status Filter */}
                <div>
                    <label
                        htmlFor="status"
                        className="block text-xs text-neutral-500 mb-2"
                    >
                        Status
                    </label>
                    <select
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-emerald-500/50"
                        // TODO: value={status} onChange={(e) => updateParams('status', e.target.value)}
                    >
                        {statuses.map((s) => (
                            <option key={s.value} value={s.value}>
                                {s.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date Range */}
                <div>
                    <label
                        htmlFor="date-range"
                        className="block text-xs text-neutral-500 mb-2 flex items-center gap-1"
                    >
                        <Calendar className="w-3 h-3" />
                        Date Range
                    </label>
                    <select
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-emerald-500/50"
                        // TODO: value={dateRange} onChange={(e) => updateParams('dateRange', e.target.value)}
                    >
                        {dateRanges.map((d) => (
                            <option key={d.value} value={d.value}>
                                {d.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort */}
                <div>
                    <label
                        htmlFor="sort"
                        className="text-xs text-neutral-500 mb-2 flex items-center gap-1"
                    >
                        <SortAsc className="w-3 h-3" />
                        Sort By
                    </label>
                    <select
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-emerald-500/50"
                        // TODO: value={sort} onChange={(e) => updateParams('sort', e.target.value)}
                    >
                        {sortOptions.map((s) => (
                            <option key={s.value} value={s.value}>
                                {s.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};
