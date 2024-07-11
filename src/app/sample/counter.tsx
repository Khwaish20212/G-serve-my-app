'use client'
import { useState } from "react";
import ActionButton from "./action-button";

export default function Counter({ initialCount }: { initialCount: number }) {
    const [count, setCount] = useState(initialCount);

    function increment() { console.log('Incrementing to ' + count); setCount(count + 1); }
    function decrement() { console.log('Decrement to ' + count); setCount(count - 1); }

    return (
        <div className="text-black">
            <h3>Count: {count}</h3>
            <ActionButton text='+1' onAction={increment} />
            <ActionButton text='-1' onAction={decrement} />
            {/* <button className="text-white" onClick={decrement}>====</button> */}
        </div>
    );
}
