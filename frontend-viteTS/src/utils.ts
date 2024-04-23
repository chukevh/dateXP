export function capitalizeFirstLetter(string: string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function filterButtons(btnState: any) {
    const like: string[] = []
    const dislike: string[] = []

    for (const key in btnState) {
        if (btnState[key] === "active") {
            like.push(key)
        } else if (btnState[key] === "disabled") {
            dislike.push(key)
        }
    }

    return { 
        like: like, 
        dislike: dislike
    }
}