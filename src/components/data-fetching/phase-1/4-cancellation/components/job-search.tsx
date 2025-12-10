import { getJobs, type Job } from "@/lib/api";
import { Search, MapPin, Building2, X, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type RefObject } from "react";
import { set } from "zod";

// TODO: Implement AbortController
// TODO: Add debounce for search input
// TODO: Cancel previous request on new search
// TODO: Handle AbortError gracefully

let cancelledCount = 0;
const time = 200;
export const JobSearch = () => {
    // TODO: Add state
    const [query, setQuery] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const controllerRef = useRef<AbortController | null>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [jobs, setJobs] = useState<Job[]>([]);

    console.log(results);

    // Track cancelled requests for debug
    const activeRequest = false;

    const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        // Abort previous request
        if (controllerRef.current) {
            controllerRef.current.abort();
        }
        // cancel previous debounce
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
            cancelledCount += 1;
        }

        debounceRef.current = setTimeout(async () => {
            if (!value.trim()) {
                setResults([]);
                setLoading(false);
                return;
            }

            controllerRef.current = new AbortController();

            try {
                // const result = await getJobs({ q: value });
                const response = await fetch(`http://localhost:4000/jobs?q=${value}`, {
                    signal: controllerRef.current.signal,
                });
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                const result: Job[] = await response.json();
                setResults(result);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                    setError(error.message);
                }

                console.log("ERROR: ", error);
            } finally {
                setLoading(false);
            }
        }, 700);
    };

    // Time based cancellation Pattern;
    useEffect(() => {
        const jobsController = new AbortController();

        const timeoutId = setTimeout(() => {
            jobsController.abort();
        }, time);

        const fetchJobs = async () => {
            setLoading(true);
            try {
                const jobs = await await fetch(`http://localhost:4000/jobs`, {
                    signal: jobsController.signal,
                });
                clearTimeout(timeoutId);
                const data: Job[] = await jobs.json();
                setJobs(data);
                setLoading(false);
            } catch (error) {
                console.log("Error in jobs fetch", error);
                if (error instanceof Error && error.name === "AbortError") {
                    console.log("Jobs fetch aborted", error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
        return () => {
            jobsController.abort();
            clearTimeout(timeoutId);
        };
    }, []);

    console.log(cancelledCount);
    console.log(jobs);

    return (
        <div>
            {/* Search Input */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                    value={query}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search jobs by title, company, or keyword..."
                    // value={query}
                    // onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 pl-12 pr-12 py-4 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                />
                {query && (
                    <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-neutral-800"
                    >
                        <X className="h-4 w-4 text-neutral-400" />
                    </button>
                )}
            </div>

            {/* Search Status */}
            <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center gap-4">
                    {loading ? (
                        <span className="flex items-center gap-2 text-blue-400">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Searching...
                        </span>
                    ) : query ? (
                        <span className="text-neutral-400">
                            {results.length} results for "{query}"
                        </span>
                    ) : (
                        <span className="text-neutral-500">Type to search jobs</span>
                    )}
                </div>
                <span className="text-xs text-neutral-500">Debounce: 300ms</span>
            </div>

            {/* Results */}
            <div className="mt-6 space-y-3">
                {results.map((job) => (
                    <div
                        key={job.id}
                        className="flex items-center justify-between rounded-xl border border-neutral-800 bg-[#0f0f10] p-5 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-neutral-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">{job.title}</h3>
                                <div className="flex items-center gap-3 mt-1 text-sm text-neutral-400">
                                    <span>{job.company.name}</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-emerald-400">
                                {23}% match
                            </span>
                            <p className="text-xs text-neutral-500 mt-1">
                                Relevance score
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Debug Panel */}
            <div className="mt-8 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-4">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Cancellation Debug
                </h4>
                <div className="grid grid-cols-4 gap-4 text-xs">
                    <div>
                        <span className="text-neutral-500">Query:</span>
                        <span className="ml-2 text-amber-400 font-mono">
                            "{query || "empty"}"
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Active Request:</span>
                        <span
                            className={`ml-2 ${activeRequest ? "text-blue-400" : "text-neutral-500"}`}
                        >
                            {String(activeRequest)}
                        </span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Cancelled:</span>
                        <span className="ml-2 text-red-400">{cancelledCount}</span>
                    </div>
                    <div>
                        <span className="text-neutral-500">Results:</span>
                        <span className="ml-2 text-emerald-400">{results.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
