# Quick JSON Server Setup (no real backend)

This project includes a ready-to-use `db.json` sample and helper functions to run a quick REST API locally using `json-server`.

Steps

1. Install dev dependencies (only once):

```powershell
pnpm install -D json-server concurrently
```

2. Run JSON Server (serves data from `db.json`):

```powershell
pnpm dev:api
# This runs: json-server --watch db.json --port 4000
```

3. Run the app (in another terminal):

```powershell
pnpm dev
```

4. (Optional) Run both in one terminal:

```powershell
pnpm dev:all
```

API Notes

- Base URL: `http://localhost:4000`
- Jobs list: `GET /jobs` (supports `?_page=1&_limit=10` and `?q=term`)
- Single job: `GET /jobs/:id`
- Toggle saved flag: `PATCH /jobs/:id` with body `{ "isSaved": true }`
- Submit application: `POST /applications` with `{ jobId, userId, status }`

Helpers

The repo includes `src/lib/api.ts` with helper functions:

- `BASE_URL` — reads `import.meta.env.VITE_API_URL` or defaults to `http://localhost:4000`.
- `getJobs`, `getJob`, `toggleSaveJob`, `applyToJob`, `getApplications`.

How to wire into components

- Either call the helpers directly from components or wrap them in `useQuery` / `useMutation` when integrating React Query.
- Example (quick):

```ts
import { getJobs } from '@/lib/api'

useEffect(() => {
  getJobs({ page: 1, limit: 10 }).then(setJobs).catch(setError)
}, [])
```

Switching to a real backend

Set `VITE_API_URL` in your environment or `.env` file to point to a different endpoint and the helpers will pick it up.
