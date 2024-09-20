import express from "express"
const router = express.Router()

import {
  fetchUserSkills,
  fetchSkillInfo,
  addNewSkill,
} from "../../controller/firebase/userskill_controller.ts"
import authenticate from "@/middleware/authenticate.ts"

router.get("/", authenticate, fetchUserSkills)

router.post("/", authenticate, addNewSkill)

router.get("/skillinfo", authenticate, fetchSkillInfo)

export default router