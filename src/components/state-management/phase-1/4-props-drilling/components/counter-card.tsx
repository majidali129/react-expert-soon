import React from "react";

export const CounterCard = React.memo(({ counter }: { counter: number }) => {
    console.log("Counter rendered!!!!!!!!");
    return (
        <div className="flex items-center justify-center p-1.5 bg-red-600 text-white rounded-md">
            Counter: {counter}
        </div>
    );
});
