import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
    }, [digit, duration, numberOfMembers])
    return ended ? <Answer rightAnswer={num}/> : (
        <div className="question">
            <h1>{num}</h1>
        </div>
    )
}

const Answer = ({ rightAnswer }) => {
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const submit = (userAnswer) => {
        setAnswered(true)
        setCorrect(userAnswer === rightAnswer)
        console.log(userAnswer)
        setTimeout(() => {
            window.location.reload()
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
            <div className="result">
                <Link to="/">
                    <div className="btn">
                        タイトルに戻る
                    </div>
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>回答を入力:</p>
                        <input type="number" className="no-spin" onChange={this.handleChange} />
                    </label>
                </form>
            </div>
            {<this.props.RenderResult />}
        </>
}