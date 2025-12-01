import { Route, Routes } from "react-router";
import Phase1Page from "./pages/form-handling/phase-1-basic-page";
import Phase2Page from "./pages/form-handling/phase-2-rhf-page";
import Phase3Page from "./pages/form-handling/phase-3-rhf-zod-shadcn-page";
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
