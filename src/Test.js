import { useEffect, useState } from "react"
import { generateNumber } from "./App";

export const Test = () => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setNum(generateNumber(2))
        }, 1000);
    }, [])
    return (
        <>
            <h1>Num: {num}</h1>
        </>
    )
}