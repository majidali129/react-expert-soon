import { ArrowLeft, ArrowRight } from "lucide-react";
import { InventoryDashboard } from "./components/inventory-dashboard";
import { Link } from "react-router";

export const ReduxCore = () => {
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
                                <h1 className="text-lg font-semibold">3.1 Redux Core</h1>
                                <p className="text-xs text-neutral-500">
                                    Store, Actions, Reducers, connect HOC
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/state-management/phase-3/2-redux-middleware"
                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                        >
                            Next: Middlewares <ArrowRight className="w-4 h-4" />
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
                            - Understand Redux core concepts: Store, Actions, Reducers
                        </li>
                        <li>- Implement createStore and combineReducers</li>
                        <li>- Use connect HOC pattern (legacy but important to know)</li>
                        <li>- Use modern useSelector and useDispatch hooks</li>
                    </ul>
                </div>

                {/* Code Template */}
                <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="text-sm font-medium text-neutral-300 mb-3">
                        Redux Core Pattern
                    </h3>
                    <pre className="text-xs text-neutral-400 overflow-x-auto">
                        {`// store.ts
import { createStore, combineReducers } from 'redux'

// Action Types
const ADD_ITEM = 'inventory/ADD_ITEM'
const UPDATE_STOCK = 'inventory/UPDATE_STOCK'

// Action Creators
const addItem = (item) => ({ type: ADD_ITEM, payload: item })
const updateStock = (id, qty) => ({ type: UPDATE_STOCK, payload: { id, qty } })

// Reducer
const inventoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
    case UPDATE_STOCK:
      return state.map(item => 
        item.id === action.payload.id 
          ? { ...item, stock: action.payload.qty }
          : item
      )
    default:
      return state
  }
}

// Store
const rootReducer = combineReducers({ inventory: inventoryReducer })
const store = createStore(rootReducer)

// Connect HOC (legacy)
const mapStateToProps = (state) => ({ items: state.inventory })
const mapDispatchToProps = { addItem, updateStock }
export default connect(mapStateToProps, mapDispatchToProps)(Component)

// Modern Hooks
const items = useSelector(state => state.inventory)
const dispatch = useDispatch()
dispatch(addItem({ id: 1, name: 'Widget' }))`}
                    </pre>
                </div>

                <InventoryDashboard />
            </main>
        </div>
    );
};
