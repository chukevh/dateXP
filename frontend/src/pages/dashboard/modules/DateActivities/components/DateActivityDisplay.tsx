import DateActivityCard from "./DateActivityCard"
import dateActivity from "../../../../../images/dateactivity.gif"
import Loading from "../../../../../components/Loading"
import { Activity } from "../../../../../interfaces/DateActivities.interface";

interface DateActivityDisplayProps {
    dateActivityData: any;
    isSubmit: boolean;
}

export default function DateActivityDisplay(props: DateActivityDisplayProps) {
    const dateActivityData = props.dateActivityData
    const isSubmit = props.isSubmit

    const dateSpotsElements = dateActivityData.map((activity: Activity, index: number) => {
        return <DateActivityCard key={index} activity={activity}/>
    })


    if (isSubmit) {
        return <Loading />
    } else {
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
}