"use client";

import { useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function AssistantPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hello. I'm Genesis. How can I help?",
    },
  ]);

  function handleSend(text: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content: text,
      },
      {
        id: Date.now() + 1,
        role: "assistant",
        content: "AI integration coming next.",
      },
    ]);
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Genesis Assistant</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <MessageList messages={messages} />
        <ChatInput onSend={handleSend} />
      </CardContent>
    </Card>
  );
}
