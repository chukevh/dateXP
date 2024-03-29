import React from "react";
import CuisineButtons from "./components/CusineButtons";
import DateSpotsDisplay from "./components/DateSpotsDisplay";
import Autocomplete from "react-google-autocomplete";
import { filterButtons } from "../../../../utils";
import { callDateSpots } from "../../../../api";

export default function DateSpots() {
    const cuisineList = [
        "thai",
        "japanese",
        "korean",
        "italian",
        "french",
        "steakhouse",
        "seafood",
        "bars",
        "vegetarian"
    ]

    let cuisineBtnStateList = {}
    cuisineList.forEach((cuisine) => {
        cuisineBtnStateList = {
            ...cuisineBtnStateList,
            [cuisine]: "default"
        }
    })
    const [cuisineBtnState, setCuisineBtnState] = React.useState(cuisineBtnStateList)

    const [form, setForm] = React.useState({
        location: "",
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
        setCuisineBtnState(prevState => {
            return {
                ...prevState,
                [name]: newValue
            }
        })
    }

    function handleClear() {
        setCuisineBtnState(cuisineBtnStateList)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const input = {
            ...form,
            ...filterButtons(cuisineBtnState)
        }

        const data = await callDateSpots(input)
        console.log(data)
    }

    return (
        <>
            <span className="text-h2">Date Spots</span>
            <div className="date-spots">
                <form className="date-spots-form">
                    <CuisineButtons 
                        cuisineList={cuisineList} 
                        cuisineBtnState={cuisineBtnState}
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
                <DateSpotsDisplay />
            </div>
        </>
    )
}