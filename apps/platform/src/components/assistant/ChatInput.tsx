"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend(message: string): void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [text, setText] = useState("");

  function send() {
    const value = text.trim();

    if (!value) return;

    onSend(value);
    setText("");
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 rounded-lg border px-3 py-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask Genesis anything..."
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />

      <Button onClick={send}>
        Send
      </Button>
    </div>
  );
}
