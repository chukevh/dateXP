import express from 'express'
import { callDateActivities, callDateAssistant, callDateRestaurants } from '../controllers/dateAssistantController.js'

const router = express.Router()

router.post("/", callDateAssistant)
router.post("/restaurants", callDateRestaurants)
router.post("/activities", callDateActivities)

export default router