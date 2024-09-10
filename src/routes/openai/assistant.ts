import express from "express"
const router = express.Router()

import authenticate from "@/middleware/authenticate.ts"
import { CreateAssistant, RetriveAssistant } from "@/controller/openapi/assistant_controller.ts"

router.post("/", authenticate, CreateAssistant)

router.get("/", authenticate, RetriveAssistant)

export default router

