"use client";

import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function AssistantPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hello. I'm Genesis. How can I help?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function handleSend(text: string) {
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "Genesis is currently unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          Genesis Assistant
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <MessageList messages={messages} />

        {loading && (
          <p className="text-sm text-muted-foreground">
            Genesis is thinking...
          </p>
        )}

        <ChatInput onSend={handleSend} />
      </CardContent>
    </Card>
  );
}
