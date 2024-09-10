import openaiInstance from "@/config/openai.ts"
import { Request, Response } from "express"

let CreateThread = async (req: Request, res: Response) => {
  try {
    const thread = await openaiInstance.beta.threads.create()
    return res.status(200).json(thread)
  } catch (error) {
    console.error("Error creating thread :", error)
    return res.status(500).json({ error: "Error creating thread" })
  }
}

let AddMessageToThread = async (req: Request, res: Response) => {
  try {
    const message = await openaiInstance.beta.threads.messages.create(
      req.body.threadId,
      {
        role: "user",
        content: req.body.userMessage,
      }
    )
    return res.status(200).json(message)
  } catch (error) {
    console.error("Error adding message to thread:", error)
    return res.status(500).json({ error: "Error adding message to thread:" })
  }
}

let RunThread = async (req: Request, res: Response) => {
  try {
    let run = await openaiInstance.beta.threads.runs.createAndPoll(
      req.body.threadId,
      {
        assistant_id: req.body.assistantId,
      }
    )
    return res.status(200).json(run)
  } catch (error) {
    return res.status(500).json({ error: "Error running thread" })
  }
}

let RetrieveThreadMessages = async (req: Request, res: Response) => {
  try {
    const threadId = req.query.threadId as string
    console.log(threadId)
    const myThread = await openaiInstance.beta.threads.messages.list(threadId)
    return res.status(200).json(myThread)
  } catch (error) {
    return res.status(500).json({ error: "Error retreiving thread message:" })
  }
}

export { CreateThread, AddMessageToThread, RunThread, RetrieveThreadMessages }
