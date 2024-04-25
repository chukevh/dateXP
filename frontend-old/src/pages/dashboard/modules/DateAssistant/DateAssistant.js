import React from "react"
import { callDateAssistant } from "../../../../api"
import { DateAssistantDisplay } from "./components/DateAssistantDisplay"

export default function DateAssistant() {
    const [input, setInput] = React.useState("")
    const [dateLog, setDateLog] = React.useState([
        { 
            role: "assistant",
            message: "I'm your date assistant! How can I help you today?"
        }
    ])

    function handleChange(e) {
        setInput(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (input.trim().length > 0) {
            try {
                const userLog = {
                    role: "user",
                    message: input
                }
                addToDateLog(userLog)
                setInput("")
                const data = await callDateAssistant(userLog.message)
                addToDateLog(data) 
            } catch (error) {
                console.log(error)
            }
        }
    }

    function addToDateLog(log) {
        setDateLog(prevLog => {
            return [
                ...prevLog,
                log
            ]
        })
    }

    return (
        <>
            <span className="text-h2">Date Assistant</span>
            <div className="date-assistant">
                <DateAssistantDisplay dateLog={dateLog}/>
                <form className="date-assistant-form" onSubmit={handleSubmit}>
                    <textarea
                        className="date-assistant-input"
                        value={input}
                        onChange={handleChange}
                        placeholder="Ask a question..."
                    />
                    <button 
                        type="submit" 
                        className="date-assistant-btn"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}