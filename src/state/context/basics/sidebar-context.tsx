import { createContext, useContext, useState, type ReactNode } from "react";

type SidebarContextType = {
    isOpen: boolean;
    toggle: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <SidebarContext.Provider value={{ isOpen, toggle }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context)
        throw new Error("useSidebar must be used within the SidebarContext Provider");
    return context;
};
