import News from "../components/News";

export default function Dashboard() {
    return (
        <>
            <section className="dashboard-container">
                <div className="module-container test">
                    <News />
                </div>
                <div className="module-container ">
                    Date Assistant
                </div>
                <div className="module-container">
                    Date activities go here
                </div>
                <div className="module-container">
                    Notes go here
                </div>
                <div className="module-container">
                    Time since I last saw her
                </div>
            </section>
        </>
    )
}