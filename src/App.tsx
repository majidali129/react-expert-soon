import { Route, Routes } from "react-router";
import { FormHandlingLayout } from "./components/form-handling/layout";
import Phase1Page from "./pages/form-handling/phase-1-page";
import Phase2Page from "./pages/form-handling/phase-2-page";
import Phase3Page from "./pages/form-handling/phase-3-page";
import { FormHandlingHomePage } from "./components/form-handling/home-page";

export const App = () => {
    return (
        <Routes>
            <Route index element={<FormHandlingHomePage />} />
            <Route path="/" element={<FormHandlingHomePage />} />
            <Route path="phase-1" element={<Phase1Page />} />
            <Route path="phase-2" element={<Phase2Page />} />
            <Route path="phase-3" element={<Phase3Page />} />
            {/* </Route> */}
        </Routes>
    );
};
