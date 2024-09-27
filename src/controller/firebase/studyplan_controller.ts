import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore"
import { Request, Response } from "express"
import db from "../../config/firebase.js"

let addStudyPlan = async (req: Request, res: Response) => {
  try {
    const docRef = await addDoc(collection(db, "studyplan"), req.body)
    return res.status(200).json({ documentId: docRef.id })
  } catch (error) {
    console.error("Error adding study plan:", error)
    return res.status(500).json({ error: "Error adding study plan" })
  }
}

let fetchStudyPlan = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string
    const skill = req.query.skill as string

    const q = query(
      collection(db, "studyplan"),
      where("email", "==", email),
      where("title", "==", skill)
    )

    const querySnapshot = await getDocs(q)
    const studyPlanInfo: any[] = []

    querySnapshot.forEach((doc) => {
      studyPlanInfo.push(doc.data())
    })
    return res.status(200).json(studyPlanInfo[0])
  } catch (error) {
    console.error("Error fetching studyplan info :", error)
    return res.status(500).json({ error: "Error fetching studyplan" })
  }
}

let updateStudyPlanThreadId = async (req: Request, res: Response) => {
  try {
    const docId = req.body.docId as string
    const newThreadId = req.body.newThreadId as string
    const dayNumber = req.body.dayNumber as number

    console.log(docId, newThreadId, dayNumber)
    const studyPlanRef = doc(db, "studyplan", docId)

    const userDoc = await getDoc(studyPlanRef)

    if (userDoc.exists()) {
      const userData = userDoc.data()
      console.log(userData);
      const updatedPlans = userData.plan.map((planItem:any, index:number) => {
        // Update the threadId for the specified dayNumber
        if (index+1 === dayNumber) {
          return {
            ...planItem,
            threadId: newThreadId,
          };
        }
        return planItem;
      });

      // Update the document with the modified `plan` array
      await updateDoc(studyPlanRef, {
        plan: updatedPlans,
      })
      return res.status(200).json({ message: "Data added successfully" })
    }
    else {
      console.log("burh")
    }
  } catch (error) {
    console.error("Error adding study plan:", error)
    return res.status(500).json({ error: "Error adding study plan" })
  }
}
export { addStudyPlan, fetchStudyPlan, updateStudyPlanThreadId }
