import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSidebar } from "@/state/context/basics/sidebar-context";
import { PanelLeftClose, PanelLeft } from "lucide-react";

export const SidebarToggle = () => {
    const { isOpen, toggle } = useSidebar();

    return (
        <Card className="">
            <CardHeader>
                <CardTitle>
                    <h4 className="text-sm font-medium mb-3">Sidebar</h4>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Button
                    variant="secondary"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={toggle}
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
                </Button>
            </CardContent>
        </Card>
    );
};
