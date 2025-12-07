import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";
type ThemeContextType = {
    theme: Theme;
    toggleTheme: (theme?: Theme) => void;
    toggleToLight: () => void;
    toggleToDark: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const toggleToLight = () => setTheme("light");
    const toggleToDark = () => setTheme("dark");

    useEffect(() => {
        document.documentElement.setAttribute("class", theme);
    }, [theme]);

    const themeContextValue: ThemeContextType = {
        theme,
        toggleTheme,
        toggleToDark,
        toggleToLight,
    };
    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
};
