import CuisineButtons from "./components/CusineButtons";
import DateSpotsDisplay from "./components/DateSpotsDisplay";

export default function DateSpots() {
    const cuisineList = [
        "Thai",
        "Japanese",
        "Korean",
        "Italian",
        "French",
        "Steakhouse",
        "Seafood",
        "Bars",
        "Vegetarian"
    ]

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submit")
    }

    return (
        <>
            <span className="text-h2">Date Spots</span>
            <div className="date-spots">
                <form className="date-spots-form">
                    <CuisineButtons cuisineList={cuisineList}/>
                    <div className="date-spot-details-container">
                        <input
                            id="location"
                            placeholder="Enter your Location"
                        />
                        <select>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="year">This Year</option>
                        </select>
                        <button 
                            type="submit" 
                            onClick={handleSubmit}
                            className="date-spots-submit-btn"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <DateSpotsDisplay />
            </div>
        </>
    )
}