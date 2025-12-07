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
            </Route>
        </Routes>
    );
};
