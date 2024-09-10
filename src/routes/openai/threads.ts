import express from "express"
const router = express.Router()

import authenticate from "@/middleware/authenticate.ts"
import { AddMessageToThread, CreateThread, RetrieveThreadMessages, RunThread } from "@/controller/openapi/threads_controller.ts"

router.post("/createthread", authenticate, CreateThread)

router.post("/addmessage", authenticate, AddMessageToThread)

router.get("/fetchmessage", authenticate, RetrieveThreadMessages)

router.post("/runthread", authenticate, RunThread)



export default router

