import { Users, RefreshCw, CheckCircle, XCircle, Clock } from "lucide-react";

const mockUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "active" },
    { id: 3, name: "Carol White", email: "carol@example.com", status: "inactive" },
];

export const RTKDemo = () => {
    // TODO: Setup configureStore with DevTools and middleware
    // TODO: Create usersSlice with createSlice
    // TODO: Implement fetchUsers with createAsyncThunk
    // TODO: Handle pending/fulfilled/rejected in extraReducers
    // TODO: Setup RTK Query API for users endpoint

    return (
        <div className="space-y-6">
            {/* Async Thunk Demo */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        Users (createAsyncThunk)
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-500">Status: idle</span>
                        <button
                            type="button"
                            className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Loading States Preview */}
                <div className="p-4 border-b border-neutral-800">
                    <p className="text-xs text-neutral-500 mb-2">Async State Handling:</p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="px-3 py-1.5 bg-neutral-800 rounded-lg text-xs flex items-center gap-1.5"
                        >
                            <Clock className="w-3 h-3 text-amber-400" />
                            pending
                        </button>
                        <button
                            type="button"
                            className="px-3 py-1.5 bg-neutral-800 rounded-lg text-xs flex items-center gap-1.5"
                        >
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            fulfilled
                        </button>
                        <button
                            type="button"
                            className="px-3 py-1.5 bg-neutral-800 rounded-lg text-xs flex items-center gap-1.5"
                        >
                            <XCircle className="w-3 h-3 text-red-400" />
                            rejected
                        </button>
                    </div>
                </div>

                {/* User List */}
                <div className="divide-y divide-neutral-800">
                    {mockUsers.map((user) => (
                        <div
                            key={user.id}
                            className="p-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-sm font-medium text-purple-400">
                                        {user.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-xs text-neutral-500">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <span
                                className={`text-xs px-2 py-1 rounded ${
                                    user.status === "active"
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-neutral-700 text-neutral-400"
                                }`}
                            >
                                {user.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* createAsyncThunk Pattern */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    createAsyncThunk Pattern
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users')
      if (!response.ok) throw new Error('Failed to fetch')
      return response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Slice with extraReducers
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})`}
                </pre>
            </div>

            {/* RTK Query Demo */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    RTK Query Setup
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

                          export const usersApi = createApi({
                            reducerPath: 'usersApi',
                            baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
                            tagTypes: ['User'],
                            endpoints: (builder) => ({
                              getUsers: builder.query({
                                query: () => '/users',
                                providesTags: ['User']
                              }),
    getUserById: builder.query({
      query: (id) => \`/users/\${id}\`,
      providesTags: (result, error, id) => [{ type: 'User', id }]
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: \`/users/\${id}\`,
        method: 'PATCH',
        body: patch
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }]
    })
  })
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation
} = usersApi

// Usage in component
function UsersList() {
  const { data: users, isLoading, error } = useGetUsersQuery()
  const [addUser, { isLoading: isAdding }] = useAddUserMutation()
  
  if (isLoading) return <Loader />
  if (error) return <Error message={error} />
  
  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
}`}
                </pre>
            </div>

            {/* Store Setup */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                    configureStore Setup
                </h3>
                <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                    {`import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './services/usersApi'
import usersReducer from './features/usersSlice'
import productsReducer from './features/productsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(customLoggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch`}
                </pre>
            </div>

            {/* TODO Checklist */}
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                <h3 className="font-semibold text-sm text-purple-400 mb-3">
                    Implementation Tasks
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Setup configureStore</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create usersSlice with createSlice</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Implement fetchUsers async thunk</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Handle all loading states</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Setup RTK Query API</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Add cache invalidation</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
