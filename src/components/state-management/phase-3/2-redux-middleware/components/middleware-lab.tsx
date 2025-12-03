import { Play, Terminal, BarChart3, AlertOctagon, Layers, Clock } from "lucide-react";

const sampleActions = [
    { type: "inventory/ADD_ITEM", payload: { name: "New Widget" } },
    { type: "inventory/UPDATE_STOCK", payload: { id: "p1", qty: 100 } },
    { type: "cart/ADD_TO_CART", payload: { productId: "p1", quantity: 2 } },
    { type: "auth/LOGIN_SUCCESS", payload: { userId: "u123" } },
    { type: "api/FETCH_ERROR", payload: { message: "Network failed" }, error: true },
];

export const MiddlewareLab = () => {
    // TODO: Create logger middleware that logs action type and payload
    // TODO: Create analytics middleware that tracks specific actions
    // TODO: Create error middleware that catches and reports errors
    // TODO: Create timing middleware that measures action processing time
    // TODO: Compose all middlewares with applyMiddleware

    return (
        <div className="space-y-6">
            {/* Middleware Pipeline Visualization */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Middleware Pipeline</h3>
                <div className="flex items-center gap-4 overflow-x-auto pb-4">
                    <div className="shrink-0 px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-center">
                        <p className="text-xs text-purple-400 mb-1">dispatch()</p>
                        <p className="text-sm font-medium">Action</p>
                    </div>
                    <div className="w-8 h-0.5 bg-neutral-700 shrink-0" />
                    <div className="shrink-0 px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-center">
                        <Terminal className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <p className="text-sm font-medium">Logger</p>
                    </div>
                    <div className="w-8 h-0.5 bg-neutral-700 shrink-0" />
                    <div className="shrink-0 px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
                        <BarChart3 className="w-4 h-4 text-green-400 mx-auto mb-1" />
                        <p className="text-sm font-medium">Analytics</p>
                    </div>
                    <div className="w-8 h-0.5 bg-neutral-700 shrink-0" />
                    <div className="shrink-0 px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-lg text-center">
                        <AlertOctagon className="w-4 h-4 text-red-400 mx-auto mb-1" />
                        <p className="text-sm font-medium">Error</p>
                    </div>
                    <div className="w-8 h-0.5 bg-neutral-700 shrink-0" />
                    <div className="shrink-0 px-4 py-3 bg-amber-500/20 border border-amber-500/30 rounded-lg text-center">
                        <Clock className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                        <p className="text-sm font-medium">Timing</p>
                    </div>
                    <div className="w-8 h-0.5 bg-neutral-700 shrink-0" />
                    <div className="shrink-0 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-center">
                        <Layers className="w-4 h-4 text-neutral-400 mx-auto mb-1" />
                        <p className="text-sm font-medium">Reducer</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Action Dispatcher */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold">Dispatch Actions</h3>
                        <p className="text-xs text-neutral-500 mt-1">
                            Click to dispatch and watch middleware in action
                        </p>
                    </div>
                    <div className="p-4 space-y-2">
                        {sampleActions.map((action) => (
                            <button
                                type="button"
                                key={action.type}
                                className={`w-full p-3 text-left rounded-lg border transition-colors ${
                                    action.error
                                        ? "bg-red-500/10 border-red-500/20 hover:border-red-500/40"
                                        : "bg-neutral-800 border-neutral-700 hover:border-purple-500/40"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-mono text-purple-400">
                                        {action.type}
                                    </span>
                                    <Play className="w-4 h-4 text-neutral-500" />
                                </div>
                                <pre className="text-xs text-neutral-500 truncate">
                                    {JSON.stringify(action.payload)}
                                </pre>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Console Output */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                    <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-green-400" />
                            Middleware Console
                        </h3>
                        <button
                            type="button"
                            className="text-xs text-neutral-500 hover:text-neutral-300"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="p-4 font-mono text-xs space-y-2 max-h-80 overflow-y-auto bg-neutral-950 rounded-b-xl">
                        <div className="text-blue-400">
                            [Logger] Dispatching: inventory/ADD_ITEM
                        </div>
                        <div className="text-neutral-500 pl-4">
                            {"  "}payload: {"{"} name: "New Widget" {"}"}
                        </div>
                        <div className="text-green-400">
                            [Analytics] Tracked: inventory/ADD_ITEM
                        </div>
                        <div className="text-amber-400">
                            [Timing] inventory/ADD_ITEM took 2.3ms
                        </div>
                        <div className="text-blue-400">
                            [Logger] New state: {"{"} inventory: [...] {"}"}
                        </div>
                        <div className="border-t border-neutral-800 my-2" />
                        <div className="text-red-400">
                            [Error] Caught error in action: api/FETCH_ERROR
                        </div>
                        <div className="text-red-300 pl-4">
                            {"  "}message: "Network failed"
                        </div>
                        <div className="text-neutral-600">---</div>
                    </div>
                </div>
            </div>

            {/* Middleware Templates */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <h3 className="text-sm font-medium text-blue-400 mb-3">
                        Logger Middleware
                    </h3>
                    <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                        {`const loggerMiddleware = store => next => action => {
  console.group(action.type)
  console.log('Payload:', action.payload)
  console.log('Prev state:', store.getState())
  
  const result = next(action)
  
  console.log('Next state:', store.getState())
  console.groupEnd()
  
  return result
}`}
                    </pre>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <h3 className="text-sm font-medium text-green-400 mb-3">
                        Analytics Middleware
                    </h3>
                    <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                        {`const analyticsMiddleware = store => next => action => {
  const trackedActions = [
    'cart/ADD_TO_CART',
    'auth/LOGIN_SUCCESS',
    'checkout/COMPLETE'
  ]
  
  if (trackedActions.includes(action.type)) {
    analytics.track(action.type, action.payload)
  }
  
  return next(action)
}`}
                    </pre>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <h3 className="text-sm font-medium text-red-400 mb-3">
                        Error Middleware
                    </h3>
                    <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                        {`const errorMiddleware = store => next => action => {
  try {
    if (action.error) {
      errorReporter.capture(action.payload)
    }
    return next(action)
  } catch (err) {
    errorReporter.capture(err)
    // Optionally dispatch error action
    return next({ type: 'ERROR_CAUGHT', payload: err })
  }
}`}
                    </pre>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <h3 className="text-sm font-medium text-amber-400 mb-3">
                        Timing Middleware
                    </h3>
                    <pre className="text-xs text-neutral-400 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                        {`const timingMiddleware = store => next => action => {
  const start = performance.now()
  
  const result = next(action)
  
  const duration = performance.now() - start
  console.log(\`[Timing] \${action.type}: \${duration.toFixed(2)}ms\`)
  
  if (duration > 16) {
    console.warn('Slow action detected!')
  }
  
  return result
}`}
                    </pre>
                </div>
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
                            <span>Create loggerMiddleware</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create analyticsMiddleware</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create errorMiddleware</span>
                        </li>
                    </ul>
                    <ul className="text-xs text-neutral-400 space-y-2">
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Create timingMiddleware</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Compose with applyMiddleware</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-0.5" />
                            <span>Test action flow through pipeline</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
