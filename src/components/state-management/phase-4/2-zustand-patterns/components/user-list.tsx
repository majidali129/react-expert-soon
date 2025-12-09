import { Button } from "@/components/ui/button";
import { useStore } from "@/state/zustand/patterns/cart-slice";
import { LogOut, User, UserCog2 } from "lucide-react";

export const UserList = () => {
    const user = useStore((s) => s.user);
    const addUser = useStore((s) => s.setUser);
    const logout = useStore((s) => s.logout);

    const userFallback = () => {
        return (
            <div className="min-h-40 flex items-center justify-center flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2">
                    <UserCog2 className="w-4 h-4 text-blue-400" />
                    No User Found 😥
                </h3>

                <div>
                    <Button
                        onClick={() =>
                            addUser({
                                avatar: null,
                                email: "lah@gmail.com",
                                id: "majidali129",
                                name: "Majid Ali",
                            })
                        }
                    >
                        Create Account
                    </Button>
                </div>
            </div>
        );
    };
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
            <div className="p-4 border-b border-neutral-800">
                <h3 className="font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    User Slice
                </h3>
            </div>
            {user ? (
                <div className="p-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <span className="text-lg font-medium text-blue-400">JD</span>
                        </div>
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-neutral-500">{user.email}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="flex-1 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
                        >
                            Edit Profile
                        </button>
                        <button
                            onClick={logout}
                            type="button"
                            className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm flex items-center gap-1 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                userFallback()
            )}
            <div className="p-4 border-t border-neutral-800 bg-neutral-800/50">
                <p className="text-xs text-neutral-500 font-mono">
                    userSlice: {"{"} user, setUser, logout {"}"}
                </p>
            </div>
        </div>
    );
};
