import { ArrowLeft } from "lucide-react";
import { ProtectedDashboard } from "./components/protected-dashboard";
import { Link } from "react-router";

export const ContextDI = () => {
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
                    <h1 className="text-xl font-semibold">
                        2.1 Context for Dependency Injection
                    </h1>
                    <p className="text-sm text-neutral-400 mt-1">
                        Auth, permissions, theme, and API client via Context providers
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                <ProtectedDashboard />

                {/* Instructions */}
                <section className="mt-8 rounded-xl border border-neutral-800 bg-[#0f0f10] p-6">
                    <h2 className="font-medium mb-4 text-amber-400">Your Tasks</h2>
                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">1.</span>
                            <p>
                                Create{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    AuthContext
                                </code>{" "}
                                with user session and login/logout
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">2.</span>
                            <p>
                                Create{" "}
                                <code className="text-amber-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                                    PermissionsContext
                                </code>{" "}
                                for role-based access
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">3.</span>
                            <p>
                                Inject API client via context (avoid importing directly)
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">4.</span>
                            <p>Show/hide UI based on permissions (admin vs user)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0 text-neutral-500">5.</span>
                            <p>Fetch user data on login and persist in context</p>
                        </div>
                    </div>
                </section>

                {/* Context Structure */}
                <section className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3">
                        Context Structure
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// AuthContext
interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

// PermissionsContext
interface PermissionsContext {
  permissions: string[];
  hasPermission: (permission: string) => boolean;
  role: 'admin' | 'user' | 'guest';
}

// APIContext (Dependency Injection)
interface APIContext {
  client: {
    get: <T>(url: string) => Promise<T>;
    post: <T>(url: string, data: unknown) => Promise<T>;
  };
}`}
                    </pre>
                </section>
            </main>
        </div>
    );
};
