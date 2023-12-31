"use state"

//Need to use client side rendering here bc the page gets updated with useState rendering
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}