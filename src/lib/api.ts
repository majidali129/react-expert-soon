export const DEFAULT_BASE = "http://localhost:4000";
export const BASE_URL = (import.meta.env.VITE_API_URL as string) || DEFAULT_BASE;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
    }

    return (await res.json()) as T;
}

export type Job = {
    id: string;
    title: string;
    company: { id: string; name: string; logo?: string };
    location: string;
    type: string;
    salary?: { min: number; max: number; currency?: string };
    description?: string;
    requirements?: string[];
    postedAt?: string;
    isSaved?: boolean;
};

export type Application = {
    id?: number;
    jobId: number;
    userId: number;
    status?: string;
    createdAt?: string;
};

export const getJobs = async (opts?: { page?: number; limit?: number; q?: string }) => {
    const params = new URLSearchParams();
    if (opts?.page) params.set("_page", String(opts.page));
    if (opts?.limit) params.set("_limit", String(opts.limit));
    if (opts?.q) params.set("q", opts.q);

    const path = `/jobs${params.toString() ? `?${params.toString()}` : ""}`;
    return request<Job[]>(path);
};

export const getJob = async (id: number) => {
    return request<Job>(`/jobs/${id}`);
};

export const toggleSaveJob = async (id: number, save: boolean) => {
    // json-server supports PATCH
    return request<Job>(`/jobs/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ isSaved: save }),
    });
};

export const applyToJob = async (payload: Application) => {
    return request<Application>(`/applications`, {
        method: "POST",
        body: JSON.stringify(payload),
    });
};

export const getApplications = async (userId?: number) => {
    const params = new URLSearchParams();
    if (userId) params.set("userId", String(userId));
    const path = `/applications${params.toString() ? `?${params.toString()}` : ""}`;
    return request<Application[]>(path);
};
