import { Link, useRouteError } from "react-router-dom"

export default function Error() {
    const error: any = useRouteError()

    return (
        <>
            <div className="error-container">
                <h1>Sorry! An Error has occured!</h1>
                <pre>Error: { error.message }</pre>
                <pre>{error.status} - {error.statusText}</pre>
                <Link to="..">Return to Dashboard</Link>    
            </div>
        </>
    )
}