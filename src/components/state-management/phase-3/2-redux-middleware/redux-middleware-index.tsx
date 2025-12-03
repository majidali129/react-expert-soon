import { ArrowLeft, ArrowRight } from "lucide-react";
import { MiddlewareLab } from "./components/middleware-lab";
import { Link } from "react-router";

export const ReduxMiddleware = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/state-management/phase-3"
                                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-lg font-semibold">
                                    3.2 Redux Middlewares
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    Custom middleware creation, Logger, DevTools
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-3/3-redux-patterns"
                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                        >
                            Next: Patterns <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Learning Objectives */}
                <div className="mb-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <h2 className="font-medium text-purple-400 mb-2">
                        Learning Objectives
                    </h2>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>
                            - Understand middleware signature: store =&gt; next =&gt;
                            action
                        </li>
                        <li>- Create custom logger middleware</li>
                        <li>- Create analytics/tracking middleware</li>
                        <li>- Implement error boundary middleware</li>
                        <li>- Compose multiple middlewares with applyMiddleware</li>
                    </ul>
                </div>

                {/* Middleware Signature */}
                <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="text-sm font-medium text-neutral-300 mb-3">
                        Middleware Signature
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// Middleware signature (curried function)
const myMiddleware = (store) => (next) => (action) => {
  // Before action reaches reducer
  console.log('Dispatching:', action.type)
  
  // Call next middleware or reducer
  const result = next(action)
  
  // After action has been processed
  console.log('New state:', store.getState())
  
  return result
}

// Apply middlewares
import { createStore, applyMiddleware } from 'redux'
const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, analyticsMiddleware, errorMiddleware)
)`}
                    </pre>
                </div>

                <MiddlewareLab />
            </main>
        </div>
    );
};
