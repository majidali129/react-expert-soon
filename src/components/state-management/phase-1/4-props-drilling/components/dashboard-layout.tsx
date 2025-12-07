import { Minus, Plus } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { StatsGrid } from "./stats-grid";
import { WelcomeCard } from "./welcome-card";
import { Header } from "./header";
import { Button } from "@/components/ui/button";
import { CounterCard } from "./counter-card";
import { Sidebar } from "./sidebar";

export const DashboardLayout = () => {
    const [user, setUser] = useState({ name: "Hamza", role: "User", avatar: "..." });
    const [renderCount, setRenderCount] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setRenderCount((prev) => prev + 1);
    }, []);

    const handleUpdateUser = useCallback(
        (info: { name: string; role: "Admin" | "User"; avatar: string }) => {
            setUser(info);
        },
        [],
    );

    console.log("Parent renders!!!");

    const handleCounterChnge = (v: number) => setCounter((prev) => prev + v);

    return (
        <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <div className="bg-red-500/10 px-3 py-1 text-xs text-red-400 flex items-center justify-between">
                <span>DashboardLayout</span>
                <div className="flex items-center gap-x-2">
                    <Button size="icon" onClick={() => handleCounterChnge(-1)}>
                        <Minus />
                    </Button>
                    <CounterCard counter={counter} />
                    <Button size="icon" onClick={() => handleCounterChnge(+1)}>
                        <Plus />
                    </Button>
                </div>
                <span>Renders: {renderCount}</span>
            </div>

            <div className="flex">
                <Sidebar user={user} />
                <div className="flex-1">
                    <Header user={user} userSetter={handleUpdateUser} />
                    <MainContent user={user} />
                </div>
            </div>
        </div>
    );
};

function MainContent({ user }: { user: { name: string; role: string; avatar: string } }) {
    return (
        <main className="p-6">
            <div className="bg-blue-500/10 px-3 py-1 text-xs text-blue-400 flex items-center justify-between mb-4 rounded">
                <span>MainContent (Level 1)</span>
                <span>Renders: 1</span>
            </div>
            <WelcomeCard user={user} />
            <StatsGrid />
        </main>
    );
}
