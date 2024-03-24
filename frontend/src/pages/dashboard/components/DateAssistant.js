import React from "react"
import { callDateAssistant } from "../../../api"

export default function DateAssistant() {
    const [input, setInput] = React.useState("")

    // React.useEffect(() => {
    //     callDateAssistant()
    //         .then(data => console.log(data))
    // }, [])

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (input.trim().length > 0) {
            console.log(input)
        }
    }

    return (
        <>
            <span className="text-h2">Date Assistant</span>
            <div className="date-assistant">
                <div className="date-assistant-text-container">
                    <span>
                        I'm your date assistant! How can I help you today?
                    </span>
                </div>

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