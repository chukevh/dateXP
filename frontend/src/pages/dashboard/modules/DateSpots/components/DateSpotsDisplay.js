import DateSpotCard from "./DateSpotCard"
import dateSpot from "../../../../../images/datespot.gif"

export default function DateSpotsDisplay(props) {
    const dateSpotsData = props.dateSpotsData
    console.log(dateSpotsData)


    const dateSpotsElements = dateSpotsData.map((spot, index) => {
        return <DateSpotCard key={index} spot={spot}/>
    })


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