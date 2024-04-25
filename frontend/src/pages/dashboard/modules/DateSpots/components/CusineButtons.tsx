import { capitalizeFirstLetter } from "../../../../../utils"

interface CusineButtonsProps {
    cuisineList: string[];
    cuisineBtnState: Record<string, string>;
    handleButtonClick: (e: any) => void;
}

export default function CuisineButtons(props: CusineButtonsProps) {
    const cuisineList = props.cuisineList
    const cuisineBtnState = props.cuisineBtnState
    
    // button state
    // default -> active -> disabled
    function activeStyle(state: string) {
        let style
        if (state === "active") {
            style = { background: "#27ae60", color: "white"}
        }
        if (state === "disabled") {
            style = { background: "#e62143", color: "white" }
        }
        return style
    }

    const buttonElements = cuisineList.map((cuisine, index) => {
        return (
            <button 
                style={activeStyle(cuisineBtnState[cuisine])}
                type="button"
                className="date-spots-btn"
                name={cuisine}
                key={index}
                value={cuisineBtnState[cuisine]}
                onClick={props.handleButtonClick}
            >
                {capitalizeFirstLetter(cuisine)}
            </button>
        )
    })

    return (
        <div className="date-spots-btn-container">
            {buttonElements}
        </div>
    )
}