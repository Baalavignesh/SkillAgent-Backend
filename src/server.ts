import express from "express"
import "dotenv/config"
import userskill_routes from "./routes/firebase/userskills.js"
import userauth_routes from "./routes/firebase/auth.ts";
import openai_threads_routes from "./routes/openai/threads.ts";
import openai_assistant_routes from "./routes/openai/assistant.ts";
import cors from 'cors';

const app = express()
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
}))

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/auth", userauth_routes)

app.use("/api/userskill", userskill_routes)

app.use("/api/openai/thread", openai_threads_routes)

app.use("/api/openai/assistant", openai_assistant_routes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
