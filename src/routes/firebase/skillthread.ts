import express from "express"
const router = express.Router()

import authenticate from "@/middleware/authenticate.ts"
import { AddThread, fetchThreadId } from "@/controller/firebase/skillthread_controller.ts"

router.get("/", authenticate, fetchThreadId)

router.post("/", authenticate, AddThread)

export default router

