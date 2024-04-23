import DateSpotCard from "./DateSpotCard"
import dateSpot from "../../../../../images/datespot.gif"
import Loading from "../../../../../components/Loading"
import { Spot } from "../../../../../interfaces/DateSpots.interface";

interface DateSpotsDiplayProps {
    dateSpotsData: any;
    isSubmit: boolean;
}

export default function DateSpotsDisplay(props: DateSpotsDiplayProps) {
    const dateSpotsData = props.dateSpotsData
    const isSubmit = props.isSubmit

    const dateSpotsElements = dateSpotsData.map((spot: Spot, index: number) => {
        return <DateSpotCard key={index} spot={spot}/>
    })


    if (isSubmit) {
        return <Loading />
    } else {
        if (dateSpotsData.length > 0) {
            return (
                <div className="date-spots-display">
                    {dateSpotsElements}
                </div>
            )
        } else {
            return (
                <div className="display-placeholder">
                    <span>Pick your spot!</span>
                    <img src={dateSpot} alt="date activity" className="display-img"/>
                </div>
            )
        }
    }
}