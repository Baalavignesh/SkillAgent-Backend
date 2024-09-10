import openaiInstance from "@/config/openai.ts"
import { Request, Response } from "express"

let CreateAssistant = async (req: Request, res: Response) => {
  try {
    const assistant = await openaiInstance.beta.assistants.create({
      name: `Personal ${req.body.name}`,
      instructions: req.body.instruction,
      model: "gpt-4o",
    })

    return res.status(200).json(assistant)
  } catch (error) {
    return res.status(500).json({ error: "Error creating assistant" })
  }
}

let RetriveAssistant = async (req: Request, res: Response) => {
  const assistantId = req.query.assistantId as string

  try {
    const assistant = await openaiInstance.beta.assistants.retrieve(assistantId)
    return res.status(200).json(assistant)
  } catch (error) {
    return res.status(500).json({ error: "Error retreiving assistant" })
  }
}

export { CreateAssistant, RetriveAssistant }
