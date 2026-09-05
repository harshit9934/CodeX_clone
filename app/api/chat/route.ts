import { google } from "@ai-sdk/google";
import { frontendTools } from "@assistant-ui/react-ai-sdk";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();
  const result = streamText({
    model: google("gemini-3.6-flash"),
    system,
    messages: await convertToModelMessages(messages),
    tools: frontendTools(tools),
  });
  return result.toUIMessageStreamResponse();
}
