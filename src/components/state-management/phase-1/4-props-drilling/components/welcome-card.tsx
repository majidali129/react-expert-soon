import React from "react";
import { UserGreeting } from "./user-greetings";

export const WelcomeCard = React.memo(
    ({ user }: { user: { name: string; role: string; avatar: string } }) => {
        console.log("Welcome card render!!!!!!!");
        return (
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-6 mb-6">
                <div className="bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400 rounded inline-block mb-2">
                    WelcomeCard (L2) - Renders: 1
                </div>
                <UserGreeting user={user} />
            </div>
        );
    },
);
