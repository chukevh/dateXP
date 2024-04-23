import DateLogMessage from "./DateLogMessage"

export function DateAssistantDisplay(props) {
    const dateLog = props.dateLog

    const dateAssistantElements = dateLog.map((log,index) => {
        return <DateLogMessage log={log} key={index} />
    })

    return (
        <div className="date-assistant-display">
            {dateAssistantElements}
        </div>
    )
}