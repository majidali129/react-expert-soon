import { Search, Filter, X } from "lucide-react";

export const ProductFilters = () => {
    // TODO: Add individual useState for each filter
    // const [search, setSearch] = useState('')
    // const [status, setStatus] = useState('all')
    // const [category, setCategory] = useState('all')

    // OR: Grouped state approach
    // const [filters, setFilters] = useState({ search: '', status: 'all', category: 'all' })

    const statuses = ["all", "active", "draft", "archived"];
    const categories = ["all", "electronics", "clothing", "furniture", "accessories"];

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-neutral-500" />
                <h3 className="font-medium">Filters</h3>
                {/* TODO: Show clear button when filters are active */}
                <button
                    type="button"
                    className="ml-auto text-xs text-neutral-500 hover:text-neutral-300 flex items-center gap-1"
                >
                    <X className="w-3 h-3" />
                    Clear all
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {/* Search Input - TODO: Add onChange handler */}
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500/50"
                        // TODO: value={search} onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Status Filter - TODO: Add onChange handler */}
                <select
                    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-emerald-500/50"
                    // TODO: value={status} onChange={(e) => setStatus(e.target.value)}
                >
                    {statuses.map((s) => (
                        <option key={s} value={s}>
                            {s === "all"
                                ? "All Status"
                                : s.charAt(0).toUpperCase() + s.slice(1)}
                        </option>
                    ))}
                </select>

                {/* Category Filter - TODO: Add onChange handler */}
                <select
                    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-emerald-500/50"
                    // TODO: value={category} onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((c) => (
                        <option key={c} value={c}>
                            {c === "all"
                                ? "All Categories"
                                : c.charAt(0).toUpperCase() + c.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
