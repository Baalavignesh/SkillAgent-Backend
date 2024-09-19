import { setDoc, doc, getDoc } from "firebase/firestore"
import { IThreadInfo } from "../../models/threadInfo.js"
import db from "../../config/firebase.js"
import { Request, Response } from "express"

let AddThread = async (req: Request, res: Response) => {
  let threadInfo: IThreadInfo = {
    email: req.body.email,
    threadId: req.body.threadId,
    assistantId: req.body.assistantId,
    skill: req.body.skill,
  }
  let documentId = req.body.email + req.body.skill

  try {
    await setDoc(doc(db, "skillthread", documentId), threadInfo)
    return res.status(200).json({ message: "Thread added" })
  } catch (error) {
    console.error("Error adding thread :", error)
    return res.status(500).json({ error: "Error adding thread" })
  }
}

let fetchThreadId = async (req: Request, res: Response) => {
  const email = req.query.email as string
  const skill = req.query.skill as string

  let documentId = email + skill
  console.log(documentId);
  try {
    const docRef = doc(db, "skillthread", documentId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const skillData = docSnap.data()
      return res.status(200).json(skillData)
    } else {
      console.log("No such document!")
      return res.status(200).json({message: "no document"})
    }
  } catch (error) {
    console.error("Error fetching skillthread ID", error)
    return res.status(500).json({ error: "Error fetching skillthread ID" })
  }
}



export { AddThread, fetchThreadId }
