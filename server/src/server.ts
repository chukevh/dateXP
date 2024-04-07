import express from "express"
import "dotenv/config"
import dateAssistantRoute from "./routes/dateAssistantRoute.js"
import { logger } from "./middleware/middleware.js"
import { limiter } from "./utils/utils.js"

const app = express()

app.use(express.json())
app.use(limiter)

app.use("/api/assistant", logger, dateAssistantRoute)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}...`)
})