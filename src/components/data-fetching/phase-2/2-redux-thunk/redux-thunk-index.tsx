import { ArrowLeft } from "lucide-react";
import { JobListRedux } from "./components/job-list-redux";
import { Link } from "react-router";

export const ReduxThunk = () => {
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
                    <h1 className="text-xl font-semibold">2.2 Redux Thunk (Classic)</h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Traditional Redux with thunk middleware for async actions
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <JobListRedux />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Create Redux store with{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    redux-thunk
                                </code>{" "}
                                middleware
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Define action types: FETCH_JOBS_REQUEST,
                                FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Create thunk action creator that dispatches multiple
                                actions
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>Handle all states in reducer (loading, data, error)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>
                                Connect component with{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useSelector
                                </code>{" "}
                                and{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    useDispatch
                                </code>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Redux Pattern */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Classic Thunk Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// Action Types
const FETCH_JOBS_REQUEST = 'jobs/fetchRequest';
const FETCH_JOBS_SUCCESS = 'jobs/fetchSuccess';
const FETCH_JOBS_FAILURE = 'jobs/fetchFailure';

// Thunk Action Creator
const fetchJobs = () => async (dispatch) => {
  dispatch({ type: FETCH_JOBS_REQUEST });
  try {
    const response = await fetch('/api/jobs');
    const data = await response.json();
    dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
  }
};

// Reducer
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FETCH_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
