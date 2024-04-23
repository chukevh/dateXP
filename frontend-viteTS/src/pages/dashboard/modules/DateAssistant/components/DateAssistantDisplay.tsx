import { Log } from "../../../../../interfaces/DateAssistant.interface"
import DateLogMessage from "./DateLogMessage"

interface DateAssistantDisplayProps {
    dateLog: Log[]
}

export function DateAssistantDisplay(props: DateAssistantDisplayProps) {
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