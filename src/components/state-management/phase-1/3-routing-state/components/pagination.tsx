import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { mockOrders, PER_PAGE } from "./order-list";

export const Pagination = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const currentPage = Number(searchParams.get("page")) || 1;
    const totalPages = Math.round(mockOrders.length / PER_PAGE);

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        navigate(`${pathname}?${params.toString()}`);
    };

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
                    onClick={() => goToPage(currentPage - 1)}
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3, "...", totalPages].map((page) => (
                    <button
                        type="button"
                        key={`btn-${page}-page`}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                            page === currentPage
                                ? "bg-emerald-600"
                                : page === "..."
                                  ? "bg-transparent cursor-default"
                                  : "bg-neutral-800 hover:bg-neutral-700"
                        }`}
                        disabled={page === "..."}
                        onClick={() => typeof page === "number" && goToPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    type="button"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
