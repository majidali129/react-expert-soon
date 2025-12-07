import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Settings } from "lucide-react";
import { UserAvatar } from "./user-avatar";
import React from "react";

export const Header = React.memo(
    ({
        user,
        userSetter,
    }: {
        user: { name: string; role: string; avatar: string };
        userSetter: (info: {
            name: string;
            role: "Admin" | "User";
            avatar: string;
        }) => void;
    }) => {
        return (
            <header className="border-b border-neutral-800">
                <div className="bg-blue-500/10 px-3 py-1 text-xs text-blue-400 flex items-center justify-between">
                    <span>Header (Level 1)</span>
                    <span>Renders: 1</span>
                </div>
                <div className="px-6 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Dashboard Overview</h2>
                    <HeaderActions user={user} userSetter={userSetter} />
                </div>
            </header>
        );
    },
);

function HeaderActions({
    user,
    userSetter,
}: {
    user: { name: string; role: string; avatar: string };
    userSetter: (info: { name: string; role: "Admin" | "User"; avatar: string }) => void;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 rounded">
                HeaderActions (L2) - Renders: 1
            </div>
            <button
                type="button"
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            >
                <Bell className="w-5 h-5 text-neutral-400" />
            </button>
            <button
                type="button"
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            >
                <Settings className="w-5 h-5 text-neutral-400" />
            </button>
            <UserMenu user={user} userSetter={userSetter} />
        </div>
    );
}

function UserMenu({
    user,
    userSetter,
}: {
    user: { name: string; role: string; avatar: string };
    userSetter: (info: { name: string; role: "Admin" | "User"; avatar: string }) => void;
}) {
    return (
        <div className="flex items-center gap-2">
            <div className="bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400 rounded">
                UserMenu (L3) - Renders: 1
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="w-fit!">
                        <UserAvatar user={user} size="sm" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-foreground">
                    <DropdownMenuItem asChild className="w-full">
                        <Button
                            onClick={() =>
                                userSetter?.({
                                    name: "Majid",
                                    role: "Admin",
                                    avatar: "",
                                })
                            }
                        >
                            Majid
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="w-full">
                        <Button
                            onClick={() =>
                                userSetter?.({
                                    name: "Hamza",
                                    role: "User",
                                    avatar: "",
                                })
                            }
                        >
                            Hamza
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
