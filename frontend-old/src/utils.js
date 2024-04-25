export function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function filterButtons(btnState) {
    let like = []
    let dislike = []

    for (let key in btnState) {
        if (btnState[key] === "active") {
            like.push(key)
        } else if (btnState[key] === "disabled") {
            dislike.push(key)
        }
    }

    return { like: like, dislike: dislike}
}