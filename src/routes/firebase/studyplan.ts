import express from "express"
const router = express.Router()

import authenticate from "@/middleware/authenticate.ts"
import { addStudyPlan, fetchStudyPlan } from "@/controller/firebase/studyplan_controller.ts"

router.post("/", authenticate, addStudyPlan)

router.get("/", authenticate, fetchStudyPlan)


export default router
