import express from "express"
const router = express.Router()

import authenticate from "@/middleware/authenticate.ts"
import { addStudyPlan, fetchStudyPlan, updateStudyPlanThreadId, updateTaskStatus } from "@/controller/firebase/studyplan_controller.ts"

router.post("/", authenticate, addStudyPlan)

router.get("/", authenticate, fetchStudyPlan)

router.put("/", authenticate, updateStudyPlanThreadId)

router.put("/task", authenticate, updateTaskStatus)


export default router
