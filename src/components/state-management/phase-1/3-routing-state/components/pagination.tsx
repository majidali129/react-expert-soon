import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = () => {
    // TODO: Use useSearchParams for page state
    // const searchParams = useSearchParams()
    // const currentPage = Number(searchParams.get('page')) || 1
    // const totalPages = 10

    // TODO: Update page in URL
    // const goToPage = (page: number) => {
    //   const params = new URLSearchParams(searchParams)
    //   params.set('page', page.toString())
    //   router.push(`${pathname}?${params.toString()}`)
    // }

    const currentPage = 1;
    const totalPages = 10;

    return (
        <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">
                Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50"
                    disabled={currentPage === 1}
                    // TODO: onClick={() => goToPage(currentPage - 1)}
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3, "...", totalPages].map((page, idx) => (
                    <button
                        type="button"
                        key={idx}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                            page === currentPage
                                ? "bg-emerald-600"
                                : page === "..."
                                  ? "bg-transparent cursor-default"
                                  : "bg-neutral-800 hover:bg-neutral-700"
                        }`}
                        disabled={page === "..."}
                        // TODO: onClick={() => typeof page === 'number' && goToPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    type="button"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    // TODO: onClick={() => goToPage(currentPage + 1)}
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
