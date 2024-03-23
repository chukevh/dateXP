import News from "../../components/News";
import DateTime from "./components/DateTime";

export default function Dashboard() {
    const date = new Date()

    return (
        <section className="dashboard-container">
            <div className="db-header-text">
                <span className="text-h0">Hey Kevin</span>
                <span className="text-h2">{date.toDateString()}</span>
            </div>
            <div className="grid-container">
                <div className="module-container">
                    <DateTime />
                </div>
                <div className="module-container grid-long-2">
                    Notes go here
                </div>
                <div className="module-container grid-long-3">
                    Date Assistant
                </div>
                <div className="module-container grid-long-3">
                    <News />
                </div>
                <div className="module-container grid-long-3">
                    Date activities go here
                </div>
            </div>
        </section>
    )
}