import express from "express";
import dateAssistantRoute from "./routes/dateAssistantRoute.js"


const app = express()

app.use(express.json())

app.use("/api/assistant", dateAssistantRoute)


app.listen(5000, () => {
    console.log("server is running on port 5000")
})