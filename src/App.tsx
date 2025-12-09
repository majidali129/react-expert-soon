import { Route, Routes } from "react-router";
import Phase1Page from "./pages/form-handling/phase-1-basic-page";
import Phase2Page from "./pages/form-handling/phase-2-rhf-page";
import Phase3Page from "./pages/form-handling/phase-3-rhf-zod-shadcn-page";
import { FormHandlingHomePage } from "./components/form-handling/home-page";
import StateManagementHomePage from "./pages/state-management";
import { StateManagementPhase1Page } from "./pages/state-management/phase-1";
import { Phase1UseStatePage } from "./pages/state-management/phase-1/use-state";
import { Phase1UseReducerPage } from "./pages/state-management/phase-1/use-reducer";
import { RoutingStatePage } from "./pages/state-management/phase-1/routing-state";
import { PropDrillingPage } from "./pages/state-management/phase-1/prop-drilling";
import { StateManagementPhase2Page } from "./pages/state-management/phase-2";
import { ContextBasicsPage } from "./pages/state-management/phase-2/context-basics";
import { ContextPatternsPage } from "./pages/state-management/phase-2/context-patterns";
import { ContextDiPage } from "./pages/state-management/phase-2/context-di";
import { StateManagementPhase4Page } from "./pages/state-management/phase-4";
import { ZustandBasicsPage } from "./pages/state-management/phase-4/zustand-basics";
import { ZustandPatternsPage } from "./pages/state-management/phase-4/zustand-patterns";
import { ZustandContextPage } from "./pages/state-management/phase-4/zustand-context";
import { ZustandMiddlewarePage } from "./pages/state-management/phase-4/zustand-middleware";

export const App = () => {
    return (
        <Routes>
            <Route index element={<FormHandlingHomePage />} />
            <Route path="/" element={<FormHandlingHomePage />} />
            <Route path="phase-1" element={<Phase1Page />} />
            <Route path="phase-2" element={<Phase2Page />} />
            <Route path="phase-3" element={<Phase3Page />} />
            <Route path="state-management">
                <Route index element={<StateManagementHomePage />} />
                <Route path="phase-1">
                    <Route index element={<StateManagementPhase1Page />} />
                    <Route path="1-usestate" element={<Phase1UseStatePage />} />
                    <Route path="2-usereducer" element={<Phase1UseReducerPage />} />
                    <Route path="3-routing-state" element={<RoutingStatePage />} />
                    <Route path="4-prop-drilling" element={<PropDrillingPage />} />
                </Route>
                <Route path="phase-2">
                    <Route index element={<StateManagementPhase2Page />} />
                    <Route path="1-context-basics" element={<ContextBasicsPage />} />
                    <Route path="2-context-patterns" element={<ContextPatternsPage />} />
                    <Route path="3-context-di" element={<ContextDiPage />} />
                </Route>
                <Route path="phase-3">
                    <Route index element={<StateManagementPhase2Page />} />
                    <Route path="1-context-basics" element={<ContextBasicsPage />} />
                    <Route path="2-context-patterns" element={<ContextPatternsPage />} />
                    <Route path="3-context-di" element={<ContextDiPage />} />
                </Route>
                <Route path="phase-4">
                    <Route index element={<StateManagementPhase4Page />} />
                    <Route path="1-zustand-basics" element={<ZustandBasicsPage />} />
                    <Route path="2-zustand-patterns" element={<ZustandPatternsPage />} />
                    <Route path="3-zustand-context" element={<ZustandContextPage />} />
                    <Route
                        path="4-zustand-middleware"
                        element={<ZustandMiddlewarePage />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};
