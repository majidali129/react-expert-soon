import { Check, X } from "lucide-react";

export const WhenToUseContext = () => {
    return (
        <div className="space-y-4">
            {/* Good Use Cases */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                <h4 className="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Good Use Cases for Context
                </h4>
                <ul className="text-sm text-neutral-400 space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">1.</span>
                        <span>
                            <strong>Theme/Locale</strong> - Rarely changes, needed
                            everywhere
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">2.</span>
                        <span>
                            <strong>Auth/User Session</strong> - Global, infrequent
                            updates
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">3.</span>
                        <span>
                            <strong>Feature Flags</strong> - Set once, read many times
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">4.</span>
                        <span>
                            <strong>API Client Injection</strong> - Dependency injection
                            for testing
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">5.</span>
                        <span>
                            <strong>Analytics Provider</strong> - Fire-and-forget, no
                            re-renders
                        </span>
                    </li>
                </ul>
            </div>

            {/* Bad Use Cases */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                <h4 className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    When NOT to Use Context
                </h4>
                <ul className="text-sm text-neutral-400 space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 shrink-0">1.</span>
                        <span>
                            <strong>Frequently updating state</strong> - Use Zustand/Redux
                            instead
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 shrink-0">2.</span>
                        <span>
                            <strong>Server state</strong> - Use React Query/SWR
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 shrink-0">3.</span>
                        <span>
                            <strong>Form state</strong> - Use React Hook Form
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 shrink-0">4.</span>
                        <span>
                            <strong>Avoiding prop drilling 2-3 levels</strong> - Just pass
                            props
                        </span>
                    </li>
                </ul>
            </div>

            {/* DI Pattern */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h4 className="text-sm font-medium mb-3 text-amber-400">
                    DI Pattern Example
                </h4>
                <pre className="text-xs font-mono text-neutral-400 overflow-x-auto">
                    {`// API Client Context for testing
const APIClientContext = createContext<APIClient>(defaultClient)

// In tests, inject mock client
<APIClientContext.Provider value={mockClient}>
  <App />
</APIClientContext.Provider>

// Components use the injected client
function useAPI() {
  return useContext(APIClientContext)
}

function ProductList() {
  const api = useAPI()
  // api.get('/products') - uses real or mock client
}`}
                </pre>
            </div>
        </div>
    );
};
