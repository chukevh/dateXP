import { Link } from "react-router-dom"
import { Spot } from "../../../../../interfaces/DateSpots.interface";

interface DateSpotCardProps {
    spot: Spot;
}

export default function DateSpotCard(props: DateSpotCardProps) {
    const spot = props.spot

    return (
        <div className="date-spot-card">
            <span>
                <span className="text-h2">{spot.name} </span>
                <Link to={spot.link} className="text-h3">[Link]</Link>
                </span>
            <span className="text-small">Description: {spot.description}</span>
            <span className="text-small">Location: {spot.location}</span>
        </div>
    )
}