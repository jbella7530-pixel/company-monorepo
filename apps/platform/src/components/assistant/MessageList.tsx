interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({
  messages,
}: MessageListProps) {
  return (
    <div className="flex h-80 flex-col gap-3 overflow-y-auto rounded-lg border p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`rounded-lg p-3 ${
            message.role === "assistant"
              ? "bg-muted"
              : "bg-primary text-primary-foreground ml-auto max-w-[80%]"
          }`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}
