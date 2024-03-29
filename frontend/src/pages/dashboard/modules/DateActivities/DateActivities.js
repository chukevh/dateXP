import React from "react";
import CuisineButtons from "./components/CusineButtons";
import Autocomplete from "react-google-autocomplete";
import { filterButtons } from "../../../../utils";
import { callDateActivities, callDateSpots } from "../../../../api";
import DateActivityDisplay from "./components/DateActivityDisplay";

export default function DateActivities() {
    const activityList = [
        "Arts and Culture",
        "Outdoor",
        "Gaming",
        "Puzzles",
        "Theater",
        "Sports",
        "Culinary"
    ]

    let activityBtnStateList = {}
    activityList.forEach((activity) => {
        activityBtnStateList = {
            ...activityBtnStateList,
            [activity]: "default"
        }
    })
    const [activityBtnState, setActivityBtnState] = React.useState(activityBtnStateList)
    const [dateActivityData, setDateActivityData] = React.useState([])
    const [form, setForm] = React.useState({
        location: "Sydney, NSW",
        time: "week"
    })

    function handleLocation(location) {
        setForm(prevForm => {
            return {
                ...prevForm,
                location: location.formatted_address
            }
        })
    }

    function handleChange(e) {
        const {name, value} = e.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    function handleButtonClick(e) {
        const {name, value} = e.target
        let newValue = null
        switch (value) {
            case "default":
                newValue = "active"
                break
            case "active":
                newValue = "disabled"
                break
            default:
                newValue = "default"
                break
        }
        setActivityBtnState(prevState => {
            return {
                ...prevState,
                [name]: newValue
            }
        })
    }

    function handleClear() {
        setActivityBtnState(activityBtnStateList)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const input = {
            ...form,
            ...filterButtons(activityBtnState)
        }

        const data = await callDateActivities(input)
        setDateActivityData(data.activities)
    }

    return (
        <>
            <span className="text-h2">Date Activities</span>
            <div className="date-spots">
                <form className="date-spots-form">
                    <CuisineButtons 
                        cuisineList={activityList} 
                        cuisineBtnState={activityBtnState}
                        handleButtonClick={handleButtonClick}
                    />
                    <div className="date-spot-details-container">
                        <Autocomplete
                        className="date-spots-form-location"
                            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                            onPlaceSelected={(location) => handleLocation(location)}
                        />
                        <select 
                            name="time" 
                            className="date-spots-form-select" 
                            onChange={handleChange}
                            value={form.time}
                        >
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
                        <button 
                            type="button" 
                            onClick={handleClear}
                            className="date-spots-submit-btn"
                        >
                            Clear
                        </button>
                    </div>
                </form>
                <DateActivityDisplay dateActivityData={dateActivityData}/>
            </div>
        </>
    )
}