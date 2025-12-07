import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeContextProvider } from "./state/context/basics/theme-context.tsx";
import { SidebarContextProvider } from "./state/context/basics/sidebar-context.tsx";
import { CartContextProvider } from "./state/context/patterns/cart-context.tsx";
import { CartContextWithReducerProvider } from "./state/context/patterns/cart-context-with-reducer-pattern.tsx";

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <BrowserRouter>
        <ThemeContextProvider>
            <SidebarContextProvider>
                <CartContextProvider>
                    <CartContextWithReducerProvider>
                        <App />
                    </CartContextWithReducerProvider>
                </CartContextProvider>
            </SidebarContextProvider>
        </ThemeContextProvider>
    </BrowserRouter>,
    // </StrictMode>,
);
