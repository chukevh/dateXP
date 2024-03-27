import express from "express";
import "dotenv/config";
import dateAssistantRoute from "./routes/dateAssistantRoute.js";
const app = express();
app.use(express.json());
app.use("/api/assistant", dateAssistantRoute);
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}...`);
});
//# sourceMappingURL=server.js.map