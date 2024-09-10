import OpenAI from "openai";

const openaiInstance = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true
});

export default openaiInstance;