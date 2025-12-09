import { ArrowLeft } from "lucide-react";
import { JobListRTK } from "./components/job-list-rtk";
import { Link } from "react-router";

export default function RTKAsync() {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-neutral-100">
            <header className="border-b border-neutral-800 bg-[#0f0f10]">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <Link
                        to="/data-fetching/phase-2"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Phase 2
                    </Link>
                    <h1 className="text-xl font-semibold">2.3 RTK createAsyncThunk</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Redux Toolkit's modern async handling with extraReducers
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListRTK />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Use{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    createAsyncThunk
                                </code>{" "}
                                for type-safe async actions
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Handle pending/fulfilled/rejected in{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    extraReducers
                                </code>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Use{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    rejectWithValue
                                </code>{" "}
                                for typed error handling
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>Add filters and handle conditional fetching</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>
                                Implement request cancellation with{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    thunkAPI.signal
                                </code>
                            </p>
                        </div>
                    </div>
                </section>

                {/* RTK Pattern */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        createAsyncThunk Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// Async Thunk
export const fetchJobs = createAsyncThunk<
  Job[],              // Return type
  JobFilters,         // Argument type
  { rejectValue: string }  // ThunkAPI config
>(
  'jobs/fetch',
  async (filters, { rejectWithValue, signal }) => {
    try {
      const res = await fetch(\`/api/jobs?\${new URLSearchParams(filters)}\`, { signal });
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Slice with extraReducers
const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});`}
                    </pre>
                </section>
            </main>
        </div>
    );
}
