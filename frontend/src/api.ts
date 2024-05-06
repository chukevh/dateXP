export async function callDateAssistant(input: string) {
    const res = await fetch("/api/assistant", 
        {
            method:"post",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ message: input }) 
        }
    )
    
    const data = await res.json()
    
    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    return data

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
        return error
    }
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
        return error
    }
}