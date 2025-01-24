import React, { useEffect, useRef } from "react";
import {
  BOT_USR,
  useConversation,
} from "../../features/conversation/hooks/useConversation";
import MessageBubble from "../../features/conversation/components/MessageBubble";
import MessageInput from "../../features/conversation/components/MessageInput";
import ConversationLayout from "../../layouts/ConversationLayout";

const Conversation = () => {
  const { messages, onSendMessage } = useConversation();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ConversationLayout>
      <div className="h-[90%] pb-10 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            className={`flex flex-row ${
              msg.username === "AI BOT" ? "justify-start" : "justify-end"
            }`}
            key={index}
          >
            <div className="flex" key={index}>
              <MessageBubble
                time={msg.time}
                username={msg.username}
                message={msg.message}
                amIAuthor={msg.username !== BOT_USR}
                isTyping={msg.isTyping}
              />
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex-1 h-[20%]">
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </ConversationLayout>
  );
};

export default Conversation;
