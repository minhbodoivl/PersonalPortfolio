"use client";

import { useState } from "react";

export default function Counter()
{
    const [nums, setNums] = useState(0);
    
    function handleClickPlus() {
        setNums(prev => prev + 1);
    }
    function handleClickMinus() {
        setNums(prev => (prev > 0 ? prev - 1 : 0))
    }
    

    return (
        <section>
            <p className="text-xl">
                {nums}
            </p>

            <button onClick={handleClickPlus} className="mt-2 px-4 py-2 border">
                +
            </button>
            <button onClick={handleClickMinus} className="mt-2 px-4 py-2 border">
                -
            </button>
        </section>
    )
}