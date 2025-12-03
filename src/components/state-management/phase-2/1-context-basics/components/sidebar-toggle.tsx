import { PanelLeftClose, PanelLeft } from "lucide-react";

export const SidebarToggle = () => {
    // TODO: Use useSidebar() from context
    // const { isOpen, toggle } = useSidebar()

    const isOpen = true; // Mock value

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <h4 className="text-sm font-medium mb-3">Sidebar</h4>
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                // TODO: onClick={toggle}
            >
                {isOpen ? (
                    <>
                        <PanelLeftClose className="w-4 h-4" />
                        Collapse Sidebar
                    </>
                ) : (
                    <>
                        <PanelLeft className="w-4 h-4" />
                        Expand Sidebar
                    </>
                )}
            </button>
        </div>
    );
};
