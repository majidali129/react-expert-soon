import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";
import { SidebarToggle } from "./components/sidebar-toggle";
import { DemoContent } from "./components/demo-content";
import { Link } from "react-router";

export const ContextBasics = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/state-management/phase-2"
                            className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-lg font-semibold">
                                2.1 useContext Basics
                            </h1>
                            <p className="text-xs text-neutral-500">
                                createContext, Provider, and consumption
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Instructions */}
                <div className="mb-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                    <h3 className="font-semibold text-blue-400 mb-2">Your Tasks</h3>
                    <ul className="text-sm text-neutral-400 space-y-1">
                        <li>1. Create ThemeContext with dark/light mode</li>
                        <li>2. Create SidebarContext for collapse state</li>
                        <li>3. Add typed context with TypeScript</li>
                        <li>4. Create custom hooks (useTheme, useSidebar)</li>
                        <li>5. Compose multiple providers</li>
                    </ul>
                </div>

                {/* Context Template */}
                <div className="mb-6 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h4 className="text-sm font-medium mb-3 text-amber-400">
                        Context Template
                    </h4>
                    <pre className="text-xs font-mono text-neutral-400 overflow-x-auto">
                        {`// 1. Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 2. Create Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Create Custom Hook (with error boundary)
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}`}
                    </pre>
                </div>

                {/* Demo Area */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <DemoContent />
                    </div>
                    <div className="space-y-4">
                        <ThemeToggle />
                        <SidebarToggle />

                        {/* Debug */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                            <h4 className="text-sm font-medium mb-3">Context Values</h4>
                            <div className="space-y-2 text-xs font-mono">
                                <div className="p-2 bg-neutral-800 rounded">
                                    <span className="text-neutral-500">theme:</span>
                                    <span className="text-blue-400 ml-2">"dark"</span>
                                </div>
                                <div className="p-2 bg-neutral-800 rounded">
                                    <span className="text-neutral-500">sidebarOpen:</span>
                                    <span className="text-emerald-400 ml-2">true</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
