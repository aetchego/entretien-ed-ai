import React, { useEffect, useRef } from "react";
import MessageBubble from "../../components/Conversation/MessageBubble";
import MessageInput from "../../components/Conversation/MessageInput";
import { BOT_USR, useConversation } from "../../hooks/useConversation";

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
    <div className="flex flex-col justify-end h-screen px-[50px] py-4">
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
    </div>
  );
};

export default Conversation;
