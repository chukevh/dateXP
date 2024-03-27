import openai from "../utils/openai.js";
import presets from "../utils/promptPresets.js";
const callDateAssistant = async (req, res) => {
    try {
        const userMessage = req.body.message;
        const completion = await openai.chat.completions.create({
            messages: [
                presets.systemInitPrompt,
                // presets.systemDateAdviceContext,
                { role: "user", content: userMessage }
            ],
            model: "gpt-3.5-turbo",
            response_format: { type: "json_object" },
        });
        //console.log("openai response: ", completion.choices[0].message.content)
        const dateResponse = JSON.parse(completion?.choices[0]?.message.content);
        res.status(200).json(dateResponse);
        console.log("tokens used: ", completion.usage);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
const callDateSpots = (req, res) => {
    res.status(200).json("These are the hottest date restaurants");
};
const callDateActivities = (req, res) => {
    res.status(200).json("These are the hottest date activities");
};
export { callDateAssistant, callDateSpots, callDateActivities };
//# sourceMappingURL=dateAssistantController.js.map