import { useEffect, useState } from "react";

type Config = {
    retries?: number;
    retryDelay?: number;
};

export const useQuery = <T>(fn: () => Promise<T>, config: Config = {}) => {
    // export refetch function to manually trigger fetch
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    const { retries = 3, retryDelay = 300 } = config;

    useEffect(() => {
        let cancelled = false;
        const fetcher = async () => {
            setLoading(true);
            let delay = retryDelay;
            let attempt = 0;

            while (attempt <= retries) {
                try {
                    const result = await fn();
                    if (!cancelled) {
                        setData(result as T);
                        setError(null);
                        setLoading(false);
                    }
                    return;
                } catch (err: any) {
                    attempt += 1;

                    const errorMessage =
                        err instanceof Error ? err.message : "Unknown error";
                    const isNetworkError =
                        (err instanceof Error && err.name === "AbortError") ||
                        errorMessage.includes("NetworkError") ||
                        errorMessage.includes("Request failed");

                    if (!isNetworkError || attempt > retries) {
                        if (!cancelled) {
                            setError(errorMessage);
                            setLoading(false);
                            setData(null);
                        }
                        return;
                    }

                    await new Promise((resolve) => setTimeout(resolve, delay));
                    delay *= 2; // Exponential backoff
                }
            }
        };

        fetcher();

        return () => {
            cancelled = true;
        };
    }, [fn, retries, retryDelay]);

    return { data, loading, error };
};
