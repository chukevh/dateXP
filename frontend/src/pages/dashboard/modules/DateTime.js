import React from "react"
import { useDateTimeLocalStorage } from "../../../hooks/useLocalStorage";
import gif from "../../../images/datetime.gif"

export default function DateTime() {
    const [prevDate, setPrevDate] = useDateTimeLocalStorage()
    const [dateTimer, setDateTimer] = React.useState("")

    React.useEffect(() => {
        const interval = setInterval(() => {
            const currDate = new Date()
            setDateTimer(calcDateTime(currDate, prevDate))
        }, 1000);
        return () => clearInterval(interval);
    }, [prevDate])

    function handleClick() {
        const newDate = new Date()
        localStorage.setItem("datetime", newDate)
        setDateTimer(0)
        setPrevDate(newDate) 
    }

    function calcDateTime(currDate, prevDate) {
        return Math.floor((currDate - prevDate)/1000)
    }

    return (
        <>
            <span className="text-h2">Date time</span>
            <div className="datetime-container">
                <div className="datetime-text-container">
                    <span className="text-h3">Time since you last met:</span>
                    <span className="">{dateTimer} seconds</span>
                </div>

                <img src={gif} className="datetime-img"/>
                <button onClick={handleClick} className="datetime-btn primary-bg">Reset</button>
            </div>
        </>

    )
}