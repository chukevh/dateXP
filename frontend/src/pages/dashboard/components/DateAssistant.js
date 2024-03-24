import React from "react"

export default function DateAssistant() {
    const [input, setInput] = React.useState("")

    function handleChange(e) {
        setInput(e.target.value)
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

                <form className="date-assistant-form">
                    <textarea
                        className="date-assistant-input"
                        value={input}
                        onChange={handleChange}
                        placeholder="Ask a question..."
                    />
                </form>
            </div>
        </>
    )
}