import openai from "../utils/openai.js"
import { Request, Response } from "express"
import { systemDateAdviceContext, systemInitPrompt } from "../utils/promptPresets.js"

const callDateAssistant = async (req: Request, res: Response) => {
    try {
        const userMessage = req.body.message
        const completion = await openai.chat.completions.create({
            messages: [ 
                systemInitPrompt, 
                systemDateAdviceContext,
                { role: "user", content: userMessage }
            ],
            model: "gpt-3.5-turbo",
            response_format: { type: "json_object" },
        });
        //console.log("openai response: ", completion.choices[0].message.content)
        const dateResponse = JSON.parse(completion.choices[0]?.message.content!)
        
        res.status(200).json(dateResponse)
        console.log("tokens used: ", completion.usage);
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const callDateSpots = async (req: Request, res: Response) => {
    try {
        const userMessage = req.body.message
        const completion = await openai.chat.completions.create({
            messages: [ 
                systemInitPrompt, 
                systemDateAdviceContext,
                { role: "user", content: userMessage }
            ],
            model: "gpt-3.5-turbo",
            response_format: { type: "json_object" },
        });
        //console.log("openai response: ", completion.choices[0].message.content)
        const dateResponse = JSON.parse(completion.choices[0]?.message.content!)
        
        res.status(200).json(dateResponse)
        console.log("tokens used: ", completion.usage);
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const callDateActivities = (req: Request, res: Response) => {
    res.status(200).json("These are the hottest date activities")
}

export {
    callDateAssistant,
    callDateSpots,
    callDateActivities
}