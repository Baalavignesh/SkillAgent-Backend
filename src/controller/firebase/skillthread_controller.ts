import { setDoc, doc, getDoc, getFirestore } from "firebase/firestore";
import OpenAI from "openai";
import { IThreadInfo } from "../../models/threadInfo.js";
import db from "../../config/firebase.js";

let AddThread = async (
  accessToken: string,
  thread: OpenAI.Beta.Threads.Thread,
  skill: string,
  assistantId: string
) => {
  let threadInfo: IThreadInfo = {
    username: accessToken,
    threadId: thread.id,
    assistantId: assistantId,
    skill: skill,
  };
  let documentId = accessToken + skill;
  await setDoc(doc(db, "skillthread", documentId), threadInfo);
};

let fetchThreadId = async (accessToken, skill) => {
  let documentId = accessToken + skill;
  const docRef = doc(db, "skillthread", documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    // You can also do something with the data, like storing it in a variable
    const skillData = docSnap.data();
    return skillData;
  } else {
    console.log("No such document!");
  }
};

export { AddThread, fetchThreadId };
