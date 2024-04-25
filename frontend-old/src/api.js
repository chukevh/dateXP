export async function callDateAssistant(input) {
    try {
        const res = await fetch("/api/assistant", 
            {
                method:"post",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({ message: input }) 
            }
        )
        const data = await res.json()

        return data
    } catch (error) {
        console.log(error.message)
    }

    return null
}

export async function callDateSpots(input) {
    try {
        const res = await fetch("/api/assistant/spots", 
            {
                method:"post",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({ message : input }) 
            }
        )
        const data = await res.json()

        return data
    } catch (error) {
        console.log(error.message)
    }

    return null
}

export async function callDateActivities(input) {
    try {
        const res = await fetch("/api/assistant/activities", 
            {
                method:"post",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({ message : input }) 
            }
        )
        const data = await res.json()

        return data
    } catch (error) {
        console.log(error.message)
    }

    return null
}