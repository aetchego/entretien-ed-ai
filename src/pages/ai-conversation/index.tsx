import { useEffect } from "react";
import {
  BOT_USR,
  useConversation,
} from "../../features/conversation/hooks/useConversation";
import MessageBubble from "../../features/conversation/components/MessageBubble";
import MessageInput from "../../features/conversation/components/MessageInput";
import ConversationLayout from "../../layouts/ConversationLayout";
import { useScroll } from "../../hooks/useScroll";

const Conversation = () => {
  const { messages, onSendMessage } = useConversation();
  const { scrollToRef, scrollTo } = useScroll();

  useEffect(() => {
    scrollTo();
  }, [scrollTo]);

  return (
    <ConversationLayout>
      <div className="flex-grow overflow-y-auto pb-4">
        {messages.map((msg, index) => (
          <div
            className={`flex flex-row ${
              msg.username === BOT_USR ? "justify-start" : "justify-end"
            } mb-4`}
            key={index}
          >
            <MessageBubble
              time={msg.time}
              username={msg.username}
              message={msg.message}
              amIAuthor={msg.username !== BOT_USR}
              isTyping={msg.isTyping}
            />
          </div>
        ))}
        <div ref={scrollToRef} />
      </div>
      <div className="mt-4">
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </ConversationLayout>
  );
};

export default Conversation;
