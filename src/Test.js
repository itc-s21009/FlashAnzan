import React, {useContext, useEffect, useState} from "react"
import {generateNumber, SCREEN_HOME, ScreenContext} from "./App";

export const Test = ({digit, numberOfMembers, duration}) => {
    const STATES = {
        COUNTDOWN: 0,
        TESTING: 1,
        ANSWER: 2
    }
    const [state, setState] = useState(STATES.COUNTDOWN)
    const [rightAnswer, setRightAnswer] = useState()
    const ExecCountdown = () => {
        const [count, setCount] = useState(3)
        useEffect(() => {
            const intervalId = setInterval(() => {
                setCount(count => {
                    --count
                    if (count <= 0) {
                        setState(STATES.TESTING)
                        clearInterval(intervalId)
                    }
                    return count
                })
            }, 700)
        }, [])
        return (
            <div className="count">
                <h1>{count}</h1>
            </div>
        )
    }
    const ExecTest = () => {
        const [num, setNum] = useState(0)
        useEffect(() => {
            const members = [...Array(numberOfMembers).keys()].map(_ => generateNumber(digit))
            const interval = duration / numberOfMembers * 1000
            let i = 0
            const task = () => {
                if (i >= numberOfMembers) {
                    let ans = 0
                    members.forEach(x => ans += x)
                    setState(STATES.ANSWER)
                    setRightAnswer(ans)
                    clearInterval(intervalId)
                    return
                }
                setNum(members[i++])
                setTimeout(() => {
                    setNum("")
                }, interval - 150);
            }
            task()
            const intervalId = setInterval(task, interval, 0);
        }, [])
        return (
            <div className="question">
                <h1>{num}</h1>
            </div>
        )
    }
    switch (state) {
        case STATES.COUNTDOWN:
            return <ExecCountdown/>
        case STATES.TESTING:
            return <ExecTest/>
        case STATES.ANSWER:
            return <AnswerForm rightAnswer={rightAnswer}/>
        default:
            return <></>
    }
}

const AnswerForm = ({rightAnswer}) => {
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [answer, setAnswer] = useState(0)
    const setScreen = useContext(ScreenContext)
    const submit = (userAnswer) => {
        setAnswered(true)
        setCorrect(parseInt(userAnswer) === rightAnswer)
        setTimeout(() => {
            setScreen(SCREEN_HOME)
        }, 5000);
    }
    const RenderResult = () => {
        return answered ? correct ?
                <div className="result">
                    <h1>正解</h1>
                </div>
                :
                <div className="result">
                    <h1>不正解</h1>
                    <h1>答え：{rightAnswer}</h1>
                </div>
            :
            <></>

    }
    return (
        <>
            <div className="result">
                <div className="btn" onClick={() => setScreen(SCREEN_HOME)}>
                    タイトルに戻る
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    submit(answer)
                }}>
                    <label>
                        <p>回答を入力:</p>
                        <input type="number" className="no-spin" onChange={e => setAnswer(e.target.value)}
                               autoFocus={true} disabled={answered}/>
                    </label>
                </form>
            </div>
            {<RenderResult/>}
        </>
    )
}