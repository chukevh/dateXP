interface userMessage {
    message: string
}

interface userDateSpotMessage {
    location: string
    time: string
    like: []
    dislike: []
}

export {
    userMessage,
    userDateSpotMessage
}