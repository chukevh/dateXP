import express from 'express';
import { callDateActivities, callDateAssistant, callDateSpots } from '../controllers/dateAssistantController.js';
const router = express.Router();
router.post("/", callDateAssistant);
router.post("/spots", callDateSpots);
router.post("/activities", callDateActivities);
export default router;
//# sourceMappingURL=dateAssistantRoute.js.map