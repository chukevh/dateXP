import { ChatCompletionSystemMessageParam, ChatCompletionUserMessageParam } from "openai/resources/index.mjs"
import { userDateSpotMessage } from "../interfaces/userMessage.js"

const systemInitPrompt: ChatCompletionSystemMessageParam = { 
    role: "system", 
    content: `
        You are the ultimate dating assistant. Your job is to provide dating advice from restaurants to activities to tips on how to keep your partner happy. Reply in JSON format only.
    `,
}

const systemDateAdviceContext: ChatCompletionSystemMessageParam = {
    role: "system",
    content: `
        Return the response in JSON format like this:

        {
            role: assistant
            message: <Dating Advice>
        }
    `
}

const systemDateSpotsContext: ChatCompletionSystemMessageParam = {
    role: "system",
    content: `
        You are taking your partner out for a dinner date. Pick 4 of the best trending restaurants that are mid priced. Return the response in JSON format like below:

        [
            {
                name: <Restaurant name>,
                description: <Restaurant description>,
                location: <Restaurant location>,
                link: <html link to restaurant>
            },
            {            
                name: <Restaurant name>,
                description: <Restaurant description>,
                location: <Restaurant location>,
                link: <html link to restaurant>
            }
        ]
        
    `
}

function createUserDateSpotContext(
    userMessage: userDateSpotMessage
): ChatCompletionUserMessageParam {
    const userDateSpotContext: ChatCompletionUserMessageParam = {
        role: "user",
        content: `
            Use these cuisines as preferred preferences: 
            ${userMessage.like}

            Exclude these cuisines: 
            ${userMessage.dislike}

            The location should be in: 
            ${userMessage.location}

            Pick restaurants trending in the last: 
            ${userMessage.time}
        `
    }

    return userDateSpotContext
}

const systemDateActivityContext: ChatCompletionSystemMessageParam = {
    role: "system",
    content: `
        You are taking your partner out for a date activity. Pick 4 of the best trending activities. Don't include restaurants. Return the response in JSON format like below:

        [
            {
                name: <Activity name>,
                description: <Activity description>,
                location: <Activity location>,
                link: <html link to activity>
            },
            {            
                name: <Activity name>,
                description: <Activity description>,
                location: <Activity location>,
                link: <html link to activity>
            }
        ]
        
    `
}

function createUserDateActivityContext(
    userMessage: userDateSpotMessage
): ChatCompletionUserMessageParam {
    const userActivitySpotContext: ChatCompletionUserMessageParam = {
        role: "user",
        content: `
            Use these activity types as preferred preferences: 
            ${userMessage.like}

            Exclude these activity types: 
            ${userMessage.dislike}

            The location should be in: 
            ${userMessage.location}

            Pick restaurants trending in the last: 
            ${userMessage.time}
        `
    }

    return userActivitySpotContext
}

export {
    systemInitPrompt,
    systemDateAdviceContext,
    systemDateSpotsContext,
    systemDateActivityContext,
    createUserDateSpotContext,
    createUserDateActivityContext
}