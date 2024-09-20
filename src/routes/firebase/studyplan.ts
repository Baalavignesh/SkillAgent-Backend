import express from "express"
const router = express.Router()

import authenticate from "@/middleware/authenticate.ts"
import { addStudyPlan } from "@/controller/firebase/studyplan_controller.ts"

router.post("/", authenticate, addStudyPlan)

export default router
