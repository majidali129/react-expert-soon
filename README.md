# Frontend Learnings - Practice Hub

## Projects

| # | Project | Route | Focus |
|---|---------|-------|-------|
| 1 | Freelancer Onboarding Portal | `/phase-1`, `/phase-2`, `/phase-3` | Forms |
| 2 | Job Board Dashboard | `/data-fetching` | Data Fetching |
| 3 | E-commerce Admin Dashboard | `/state-management` | State Management |

---

# Project 1: Freelancer Onboarding Portal - Form Mastery

## Overview
You're building the onboarding flow for a freelancer marketplace platform (like Upwork/Fiverr). This covers **every form pattern** you'll encounter in production apps.

---

## Project Structure

\`\`\`
app/
├── page.tsx                    # Landing/Dashboard
├── phase-1/                    # Core React (useState, useRef)
│   ├── page.tsx               # Basic Profile Form
│   └── components/
├── phase-2/                    # React Hook Form
│   ├── page.tsx               # Professional Details Form
│   └── components/
├── phase-3/                    # Shadcn + Zod + RHF
│   ├── page.tsx               # Complete Multi-step Form
│   └── components/
\`\`\`

---

## PHASE 1: Core React Hooks
**Location:** `/phase-1`

### What You'll Practice:
| Concept | Where to Apply |
|---------|----------------|
| `useState` for form state | All input fields |
| `useRef` for uncontrolled inputs | Profile photo upload, quick search |
| Controlled inputs | Email, name, bio fields |
| Uncontrolled inputs | File upload, search box |
| Custom validation logic | Email format, password strength, bio length |
| Real-time validation | Show errors as user types |
| Form submission handling | Prevent default, loading states |

### Form Fields to Implement:
- Full Name (required, min 2 chars)
- Email (required, valid format)
- Password (min 8 chars, 1 uppercase, 1 number)
- Confirm Password (must match)
- Bio (max 500 chars, show counter)
- Profile Photo (uncontrolled file input)
- Accept Terms (checkbox required)

### Challenges:
1. Build without any libraries - pure useState/useRef
2. Implement debounced validation for email (check "availability")
3. Password strength indicator (weak/medium/strong)
4. Character counter for bio that changes color near limit

---

## PHASE 2: React Hook Form
**Location:** `/phase-2`

### What You'll Practice:
| Concept | Where to Apply |
|---------|----------------|
| `useForm` hook | Form initialization |
| `register` | All input registrations |
| `handleSubmit` | Form submission |
| `formState` | errors, isSubmitting, isDirty, isValid |
| `useFieldArray` | Work experience entries |
| `useWatch` | Conditional hourly rate field |
| `useFormContext` | Nested form components |
| `setValue/getValues` | Programmatic updates |
| `reset` | Clear form / load defaults |

### Form Fields to Implement:
- Professional Title (required)
- Hourly Rate (required, min $5)
- Experience Level (select: Junior/Mid/Senior)
- Availability (radio: Full-time/Part-time/Freelance)
- **Work Experience (DYNAMIC ARRAY)**
  - Company Name
  - Role
  - Start Date / End Date
  - Currently Working (checkbox - hides end date)
  - Add/Remove entries
- Skills (multi-select tags)
- Portfolio URL (optional, valid URL if provided)

### Challenges:
1. useFieldArray: Add/remove work experiences dynamically
2. useWatch: Show "Current" badge when "Currently Working" is checked
3. useFormContext: Extract WorkExperienceItem into separate component
4. Conditional validation: End date required only if not currently working
5. Form persistence: Save draft to localStorage, restore on page load

---

## PHASE 3: Shadcn + Zod + RHF Integration
**Location:** `/phase-3`

### What You'll Practice:
| Concept | Where to Apply |
|---------|----------------|
| Zod schemas | All validation rules |
| `zodResolver` | Connect Zod to RHF |
| Shadcn Form components | FormField, FormItem, FormLabel, FormMessage |
| Complex Zod validations | Refinements, transforms, discriminated unions |
| Nested object schemas | Address, social links |
| Array schemas | Services offered |
| Cross-field validation | Date ranges, password confirmation |
| Async validation | Username availability check |

---

## Success Criteria (Forms)

### Phase 1 Complete When:
- [ ] All validations work without libraries
- [ ] You understand controlled vs uncontrolled trade-offs
- [ ] Form prevents submission with invalid data
- [ ] You can explain WHY you chose useState vs useRef for each field

### Phase 2 Complete When:
- [ ] Dynamic fields add/remove smoothly
- [ ] useWatch triggers re-renders only where needed
- [ ] useFormContext shares form across components
- [ ] You can explain RHF's performance optimizations

### Phase 3 Complete When:
- [ ] Zod schemas handle all edge cases
- [ ] Type inference works throughout (no `any`)
- [ ] Multi-step navigation preserves data
- [ ] You can explain resolver pattern benefits

---
---

# Project 2: Job Board Dashboard - Data Fetching Mastery

## Overview
You're building a **Job Board Dashboard** where users can browse jobs, companies can post jobs, and candidates can apply. This naturally covers all data fetching patterns.

---

## Project Structure

\`\`\`
app/data-fetching/
├── page.tsx                    # Dashboard home
│
├── phase-1/                    # Native Patterns
│   ├── page.tsx
│   ├── 1-basic-fetch/          # useState + useEffect
│   ├── 2-custom-hooks/         # useFetch creation
│   ├── 3-waterfall/            # Identifying & fixing
│   └── 4-cancellation/         # AbortController
│
├── phase-2/                    # State Libraries
│   ├── page.tsx
│   ├── 1-context-di/           # Auth/Theme/Permissions
│   ├── 2-redux-thunk/          # Classic thunk
│   ├── 3-rtk-async/            # createAsyncThunk
│   └── 4-zustand/              # Zustand async
│
└── phase-3/                    # React Query
    ├── page.tsx
    ├── 1-query-basics/         # useQuery fundamentals
    ├── 2-mutations/            # useMutation + optimistic
    └── 3-advanced/             # Pagination, prefetch, infinite
\`\`\`

---

## Backend Options (Choose One)

### Option A: Mock Service Worker (MSW) - Recommended
\`\`\`bash
npm install msw --save-dev
\`\`\`
- Intercepts requests at network level
- No actual server needed
- Full control over responses/delays/errors

### Option B: JSON Server (Quick REST API)
\`\`\`bash
npm install -g json-server
json-server --watch db.json --port 3001
\`\`\`

### Option C: Free APIs
- GET/POST: https://jsonplaceholder.typicode.com
- Auth simulation: https://reqres.in/api

### Option D: Your Own Backend (MERN/Supabase)
- Best for end-to-end practice

**Recommendation**: Start with MSW for isolated practice, swap to real backend later.

---

## Phase 1: Native Patterns

### 1.1 useState + useEffect Pattern
**Route:** \`/data-fetching/phase-1/1-basic-fetch\`

**Tasks:**
- [ ] Add useState for jobs, loading, error
- [ ] Fetch in useEffect on mount
- [ ] Handle race conditions with cancelled flag
- [ ] Show loading skeleton
- [ ] Display error with retry

### 1.2 Custom useFetch Hook
**Route:** \`/data-fetching/phase-1/2-custom-hooks\`

**Tasks:**
- [ ] Create generic \`useFetch<T>\` hook
- [ ] Return { data, loading, error, refetch }
- [ ] Add retry logic with configurable attempts
- [ ] Support custom fetch options

### 1.3 Request Waterfalls
**Route:** \`/data-fetching/phase-1/3-waterfall\`

**Tasks:**
- [ ] Identify waterfall (Company → Jobs → Stats → Reviews)
- [ ] Measure with console.time()
- [ ] Fix with Promise.all
- [ ] Compare timing before/after

### 1.4 Request Cancellation
**Route:** \`/data-fetching/phase-1/4-cancellation\`

**Tasks:**
- [ ] Implement AbortController
- [ ] Cancel on unmount
- [ ] Cancel previous request on new search
- [ ] Handle AbortError gracefully
- [ ] Add debounce (300ms)

---

## Phase 2: State Library Integration

### 2.1 Context for DI
**Route:** \`/data-fetching/phase-2/1-context-di\`

**Tasks:**
- [ ] Create AuthContext with user session
- [ ] Create PermissionsContext for roles
- [ ] Inject API client via context
- [ ] Show/hide UI based on permissions

### 2.2 Redux Thunk (Classic)
**Route:** \`/data-fetching/phase-2/2-redux-thunk\`

**Tasks:**
- [ ] Setup store with redux-thunk middleware
- [ ] Create async thunk action creators
- [ ] Handle loading/success/error in reducer
- [ ] Connect with useSelector/useDispatch

### 2.3 RTK createAsyncThunk
**Route:** \`/data-fetching/phase-2/3-rtk-async\`

**Tasks:**
- [ ] Use createAsyncThunk
- [ ] Handle in extraReducers
- [ ] Use rejectWithValue for errors
- [ ] Add request cancellation with signal

### 2.4 Zustand Async
**Route:** \`/data-fetching/phase-2/4-zustand\`

**Tasks:**
- [ ] Create store with async actions
- [ ] Implement selectors
- [ ] Add persist middleware
- [ ] Compare verbosity with Redux

---

## Phase 3: React Query (TanStack)

### 3.1 useQuery Basics
**Route:** \`/data-fetching/phase-3/1-query-basics\`

**Tasks:**
- [ ] Setup QueryClientProvider
- [ ] Implement useQuery with hierarchical keys
- [ ] Configure staleTime vs gcTime
- [ ] Add dependent query with enabled
- [ ] Show background refetch indicator

### 3.2 Mutations
**Route:** \`/data-fetching/phase-3/2-mutations\`

**Tasks:**
- [ ] Implement useMutation for save/unsave
- [ ] Add optimistic update in onMutate
- [ ] Rollback in onError
- [ ] Invalidate queries in onSettled
- [ ] Show mutation status in UI

### 3.3 Advanced Patterns
**Route:** \`/data-fetching/phase-3/3-advanced\`

**Tasks:**
- [ ] Implement offset pagination
- [ ] Add useInfiniteQuery for infinite scroll
- [ ] Prefetch on hover
- [ ] Sync filters with URL (useSearchParams)
- [ ] Add placeholder data

---

## Mock Data Schema

\`\`\`typescript
interface Job {
  id: string
  title: string
  company: Company
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'remote'
  salary: { min: number; max: number; currency: string }
  description: string
  requirements: string[]
  postedAt: string
  isSaved?: boolean
}

interface Company {
  id: string
  name: string
  logo: string
  industry: string
}

interface Application {
  id: string
  jobId: string
  userId: string
  status: 'pending' | 'reviewing' | 'interview' | 'offered' | 'rejected'
}
\`\`\`

---

## API Endpoints to Mock

\`\`\`
GET    /api/jobs                 # List jobs (paginated)
GET    /api/jobs/:id             # Single job
POST   /api/jobs                 # Create job
GET    /api/companies/:id        # Single company
GET    /api/applications         # User's applications
POST   /api/applications         # Apply to job
POST   /api/jobs/:id/save        # Save job
DELETE /api/jobs/:id/save        # Unsave job
POST   /api/auth/login           # Login
GET    /api/auth/me              # Current user
\`\`\`

---

## Success Criteria (Data Fetching)

### Phase 1 Complete When:
- [ ] Basic fetch with all states handled
- [ ] Custom useFetch hook is reusable
- [ ] Waterfalls identified and parallelized
- [ ] All requests properly cancelled

### Phase 2 Complete When:
- [ ] Auth/permissions via context working
- [ ] Redux thunk pattern understood
- [ ] RTK async thunk implemented
- [ ] Zustand store working with async

### Phase 3 Complete When:
- [ ] React Query basics mastered
- [ ] Optimistic updates working
- [ ] Infinite scroll implemented
- [ ] URL state synchronized

---
---

# Project 3: E-commerce Admin Dashboard - State Management Mastery

## Overview
You're building an **E-commerce Admin Dashboard** for managing products, orders, customers, and inventory. This naturally covers all state management patterns from local state to global stores.

---

## Project Structure

\`\`\`
app/state-management/
├── page.tsx                        # Dashboard home
│
├── phase-1/                        # Local State
│   ├── page.tsx
│   ├── 1-usestate/                 # Basic & grouped state
│   ├── 2-usereducer/               # Reducer patterns
│   ├── 3-routing-state/            # URL state integration
│   └── 4-prop-drilling/            # Re-render analysis
│
├── phase-2/                        # Context API
│   ├── page.tsx
│   ├── 1-context-basics/           # createContext & useContext
│   ├── 2-context-patterns/         # State/dispatch separation
│   └── 3-context-di/               # Dependency injection
│
├── phase-3/                        # Redux Ecosystem
│   ├── page.tsx
│   ├── 1-redux-core/               # Store, actions, reducers
│   ├── 2-redux-middleware/         # Custom middleware
│   ├── 3-redux-patterns/           # Normalized state
│   └── 4-redux-toolkit/            # RTK + RTK Query
│
└── phase-4/                        # Zustand
    ├── page.tsx
    ├── 1-zustand-basics/           # Create store
    ├── 2-zustand-patterns/         # Slices & immer
    ├── 3-zustand-context/          # Context integration
    └── 4-zustand-middleware/       # Persist, devtools
\`\`\`

---

## Phase 1: Local State

### 1.1 useState (Individual & Grouped)
**Route:** \`/state-management/phase-1/1-usestate\`

**Tasks:**
- [ ] Individual state for each filter (status, category, search)
- [ ] Grouped state object for form fields
- [ ] Array state for selected items
- [ ] State batching demonstration
- [ ] Functional updates for counters

### 1.2 useReducer
**Route:** \`/state-management/phase-1/2-usereducer\`

**Tasks:**
- [ ] Define action types (ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART)
- [ ] Create reducer with complex state transitions
- [ ] Handle payload validation in reducer
- [ ] Implement undo/redo with action history

### 1.3 State + Routing Hooks
**Route:** \`/state-management/phase-1/3-routing-state\`

**Tasks:**
- [ ] useSearchParams for filters (status, category, page)
- [ ] useParams for product/:id routes
- [ ] Sync filters with URL on change
- [ ] Handle browser back/forward navigation
- [ ] Persist filters across page reload

### 1.4 Prop Drilling & Re-rendering
**Route:** \`/state-management/phase-1/4-prop-drilling\`

**Tasks:**
- [ ] Identify prop drilling (5+ levels deep)
- [ ] Use React DevTools Profiler to measure renders
- [ ] Apply React.memo to pure components
- [ ] Optimize callbacks with useCallback
- [ ] Memoize expensive calculations with useMemo
- [ ] Refactor with composition pattern

---

## Phase 2: Context API

### 2.1 useContext Basics
**Route:** \`/state-management/phase-2/1-context-basics\`

**Tasks:**
- [ ] Create ThemeContext with dark/light mode
- [ ] Create SidebarContext for collapse state
- [ ] Add typed context with defaults
- [ ] Custom hook (useTheme, useSidebar)
- [ ] Provider composition

### 2.2 Context Patterns (State & Actions Separate)
**Route:** \`/state-management/phase-2/2-context-patterns\`

**Tasks:**
- [ ] Separate CartStateContext and CartDispatchContext
- [ ] Prevent unnecessary re-renders with split context
- [ ] Create typed dispatch actions
- [ ] Custom hooks: useCartState, useCartDispatch

### 2.3 Context with Caution (DI Use Cases)
**Route:** \`/state-management/phase-2/3-context-di\`

**Tasks:**
- [ ] API client injection via context
- [ ] Feature flags context
- [ ] Analytics provider context
- [ ] Understand when NOT to use context
- [ ] Performance profiling before/after

---

## Phase 3: Redux Ecosystem

### 3.1 Redux Core
**Route:** \`/state-management/phase-3/1-redux-core\`

**Tasks:**
- [ ] Create store manually (createStore)
- [ ] Define rootReducer with combineReducers
- [ ] Action creators for products CRUD
- [ ] connect HOC pattern (legacy)
- [ ] useSelector and useDispatch hooks

### 3.2 Redux Middlewares
**Route:** \`/state-management/phase-3/2-redux-middleware\`

**Tasks:**
- [ ] Understand middleware signature (store => next => action)
- [ ] Create logger middleware
- [ ] Create analytics middleware
- [ ] Create error boundary middleware
- [ ] Apply with applyMiddleware

### 3.3 Redux Patterns & Best Practices
**Route:** \`/state-management/phase-3/3-redux-patterns\`

**Tasks:**
- [ ] Normalized state shape (entities, ids pattern)
- [ ] createSelector for memoized selectors
- [ ] Action creators with TypeScript
- [ ] Duck pattern (actions + reducer in one file)

### 3.4 Redux Toolkit
**Route:** \`/state-management/phase-3/4-redux-toolkit\`

**Tasks:**
- [ ] configureStore with default middleware
- [ ] createSlice for products, orders, users
- [ ] createAsyncThunk for API calls
- [ ] RTK Query for data fetching
- [ ] Code-splitting with injectEndpoints

---

## Phase 4: Zustand

### 4.1 Zustand Basics
**Route:** \`/state-management/phase-4/1-zustand-basics\`

**Tasks:**
- [ ] Create store with create()
- [ ] Define state and actions together
- [ ] Use selectors to prevent re-renders
- [ ] Subscribe to state changes
- [ ] getState() for outside React

### 4.2 Zustand Best Practices & Patterns
**Route:** \`/state-management/phase-4/2-zustand-patterns\`

**Tasks:**
- [ ] Store slicing pattern
- [ ] Immer integration for immutable updates
- [ ] TypeScript patterns (StateCreator)
- [ ] Computed/derived state
- [ ] Actions vs setters debate

### 4.3 Zustand + Context Integration
**Route:** \`/state-management/phase-4/3-zustand-context\`

**Tasks:**
- [ ] Create store in context (scoped stores)
- [ ] Prevent global store access
- [ ] Instance per Provider pattern
- [ ] Use case: multi-tenant dashboards

### 4.4 Zustand Middlewares
**Route:** \`/state-management/phase-4/4-zustand-middleware\`

**Tasks:**
- [ ] persist middleware (localStorage)
- [ ] devtools middleware
- [ ] Create custom middleware
- [ ] Combine multiple middlewares
- [ ] Handle hydration issues

---

## Mock Data Schema

\`\`\`typescript
interface Product {
  id: string
  name: string
  sku: string
  price: number
  stock: number
  category: string
  status: 'active' | 'draft' | 'archived'
  images: string[]
  createdAt: string
}

interface Order {
  id: string
  customerId: string
  items: OrderItem[]
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  createdAt: string
}

interface OrderItem {
  productId: string
  quantity: number
  price: number
}

interface Customer {
  id: string
  name: string
  email: string
  totalOrders: number
  totalSpent: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
}
\`\`\`

---

## Success Criteria (State Management)

### Phase 1 Complete When:
- [ ] useState patterns mastered (primitive, object, array)
- [ ] useReducer handles complex state logic
- [ ] URL state synced with filters
- [ ] Re-renders optimized with memoization
- [ ] Composition pattern applied to avoid prop drilling

### Phase 2 Complete When:
- [ ] Context created with proper typing
- [ ] State/dispatch split pattern implemented
- [ ] Understand when context is NOT the answer
- [ ] Performance measured with Profiler

### Phase 3 Complete When:
- [ ] Redux core concepts understood
- [ ] Custom middleware working
- [ ] Normalized state shape implemented
- [ ] RTK significantly reduces boilerplate

### Phase 4 Complete When:
- [ ] Zustand store with selectors working
- [ ] Persist middleware saving to localStorage
- [ ] Context-scoped stores for special cases
- [ ] Can compare Zustand vs Redux trade-offs

---

## Key Insights to Document

After completing each phase, write down:

1. **When would you use this approach?**
2. **What are the trade-offs?**
3. **How does it scale?**
4. **What are the testing implications?**

This reflection will be invaluable in interviews.
