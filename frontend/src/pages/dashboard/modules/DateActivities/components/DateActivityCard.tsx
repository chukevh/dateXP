import { Link } from "react-router-dom"
import { Activity } from "../../../../../interfaces/DateActivities.interface";

interface DateActivityCardProps {
    activity: Activity;
}

export default function DateActivityCard(props: DateActivityCardProps) {
    const activity = props.activity

    return (
        <div className="date-spot-card">
            <span>
                <span className="text-h2">{activity.name} </span>
                <Link to={activity.link} className="text-h3">[Link]</Link>
                </span>
            <span className="text-small">Description: {activity.description}</span>
            <span className="text-small">Location: {activity.location}</span>
        </div>
    )
}