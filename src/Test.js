import React, {useContext, useEffect, useState} from "react"
import {generateNumber, SCREEN_HOME, ScreenContext} from "./App";

export const Test = ({digit, numberOfMembers, duration}) => {
    const [num, setNum] = useState(0)
    const [ended, setEnded] = useState(false)
    useEffect(() => {
        const members = [...Array(numberOfMembers).keys()].map(_ => generateNumber(digit))
        const interval = duration / numberOfMembers * 1000
        let i = 0
        const task = () => {
            if (i >= numberOfMembers) {
                let ans = 0
                members.forEach(x => ans += x)
                setNum(ans)
                setEnded(true)
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
    }, [digit, duration, numberOfMembers])
    return ended ? <Answer rightAnswer={num}/> : (
        <div className="question">
            <h1>{num}</h1>
        </div>
    )
}

const Answer = ({rightAnswer}) => {
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const setScreen = useContext(ScreenContext)
    const submit = (userAnswer) => {
        setAnswered(true)
        setCorrect(parseInt(userAnswer) === rightAnswer)
        console.log(userAnswer)
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
        <AnswerForm RenderResult={RenderResult} submit={submit}/>
    )
}

const AnswerForm = ({RenderResult, submit}) => {
    const [answer, setAnswer] = useState(0)
    const setScreen = useContext(ScreenContext)
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
                        <input type="number" className="no-spin" onChange={e => setAnswer(e.target.value)}/>
                    </label>
                </form>
            </div>
            {<RenderResult/>}
        </>
    )
}