interface userMessage {
    message: string
}

interface userDateSpotMessage {
    location: string
    time: string
    like: []
    dislike: []
    price: string
}

export {
    userMessage,
    userDateSpotMessage
}