export const UserGreeting = ({
    user,
}: {
    user: { name: string; role: string; avatar: string };
}) => {
    console.log("Greetings render!!!!!!!");
    return (
        <div>
            <div className="bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400 rounded inline-block mb-2">
                UserGreeting (L3) - Renders: 1
            </div>
            <h3 className="text-xl font-semibold">Welcome back, {user.name}!</h3>
            <p className="text-neutral-400 mt-1">
                Here is what is happening with your store today.
            </p>
        </div>
    );
};
