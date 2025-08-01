import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "enhanceai", // Unique app ID
  name: "Enhanceai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
