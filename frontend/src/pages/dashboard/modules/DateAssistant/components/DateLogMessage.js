export default function DateLogMessage(props) {
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