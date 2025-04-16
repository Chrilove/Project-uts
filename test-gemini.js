import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const result = await ai.models.generateContent({
    model: "gemini-pro", // bisa diganti jadi gemini-1.5-pro kalau punya akses
    contents: [
      {
        role: "user",
        parts: [{ text: "Jelaskan bagaimana AI bekerja secara singkat" }],
      },
    ],
  });

  const response = await result.response;
  const text = response.candidates[0].content.parts[0].text;
  console.log(text);
}

main();
