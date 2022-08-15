import React, { useEffect, useState } from "react"
import { generateNumber } from "./App";

export const Test = ({ digit, numberOfMembers, duration }) => {
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
    }, [])
    return ended ? <Answer rightAnswer={num} /> : (
        <>
            <h1>{num}</h1>
        </>
    )
}

const Answer = ({ rightAnswer }) => {
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const submit = (userAnswer) => {
        setAnswered(true)
        setCorrect(userAnswer == rightAnswer)
        console.log(userAnswer)
    }
    const RenderResult = () => {
        return answered ? correct ?
            <>
                <h1>正解</h1>
            </>
            :
            <>
                <h1>不正解</h1>
                <h1>答え：{rightAnswer}</h1>
            </>
            :
            <></>

    }
    return (
        <AnswerForm RenderResult={RenderResult} submit={submit} />
    )
}

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => this.setState({ value: event.target.value });

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.value)
    }

    render = () =>
        <>
            <h1>{<this.props.RenderResult />}</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>回答を入力:</h1>
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
}