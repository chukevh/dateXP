export default function CuisineButtons(props) {
    const cuisineList = props.cuisineList

    function handleClick(e) {

        console.log("clicked")
    }

    const buttonElements = cuisineList.map((cuisine, index) => {
        return (
            <button 
                type="button"
                className="date-spots-btn"
                key={index}
                id={cuisine}
                onClick={handleClick}
            >
                {cuisine}
            </button>
        )
    })

    return (
        <div className="date-spots-btn-container">
            {buttonElements}
        </div>
    )
}