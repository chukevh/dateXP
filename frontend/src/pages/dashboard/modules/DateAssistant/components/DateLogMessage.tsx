import { Log } from "../../../../../interfaces/DateAssistant.interface"

interface DateLogMessageProps {
    log: Log;
    key: number;
}

export default function DateLogMessage(props: DateLogMessageProps) {
    const log = props.log

    if (log.role === "assistant") {
        return (
            <>
                <span><b>Assistant:</b> {log.message}</span>
            </>
        )
    } else {
        return (
            <>
                <span><b>User:</b> {log.message}</span>
            </>
        )
    }
}