import { ChatCompletionSystemMessageParam } from "openai/resources/index.mjs"

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

export {
    systemInitPrompt,
    systemDateAdviceContext
}