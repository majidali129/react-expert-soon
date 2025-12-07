import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeContextProvider } from "./state/context/basics/theme-context.tsx";
import { SidebarContextProvider } from "./state/context/basics/sidebar-context.tsx";

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <BrowserRouter>
        <ThemeContextProvider>
            <SidebarContextProvider>
                <App />
            </SidebarContextProvider>
        </ThemeContextProvider>
    </BrowserRouter>,
    // </StrictMode>,
);
