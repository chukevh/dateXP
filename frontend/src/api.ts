export async function callDateAssistant(input: string) {
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
    } catch (error: unknown) {
        console.log(error)
    }

    return null
}

export async function callDateSpots(input: any) {
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
    } catch (error: unknown) {
        console.log(error)
    }

    return null
}

export async function callDateActivities(input: any) {
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
    } catch (error: unknown) {
        console.log(error)
    }

    return null
}