import DateActivityCard from "./DateActivityCard"
import dateActivity from "../../../../../images/dateactivity.gif"

export default function DateActivityDisplay(props) {
    const dateActivityData = props.dateActivityData

    const dateSpotsElements = dateActivityData.map((activity, index) => {
        return <DateActivityCard key={index} activity={activity}/>
    })

    if (dateActivityData.length > 0) {
        return (
            <div className="date-spots-display">
                {dateSpotsElements}
            </div>
        )
    } else {
        return (
            <div className="display-placeholder">
                <span>Pick your activity!</span>
                <img src={dateActivity} alt="date activity" className="display-img"/>
            </div>
        )
    }
}