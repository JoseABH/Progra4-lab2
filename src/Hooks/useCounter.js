import { useState, useEffect } from "react"


export function useCounter() {

    // const [count, setCount] = useState(0)
    const [count, setCount] = useState(() => {

        return parseInt(localStorage.getItem("count")) || 0;
    })

    const restar = () => {
        if (count > 0) {
            setCount((count) => count - 1)
        }
    }

    const sumar = () => {
        setCount((count) => count + 1)
    }


    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);
    return { count, sumar, restar }
}


