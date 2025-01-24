import React from "react";
import clsx from "clsx";

interface MessageBubbleProps {
  username: string;
  time: string;
  message: string;
  isTyping: boolean;
  amIAuthor?: boolean;
}

export default function MessageBubble({
  username,
  time,
  message,
  amIAuthor = true,
  isTyping,
}: MessageBubbleProps) {
  const TypingAnimation = () => (
    <div className="flex space-x-1">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: `${dot * 0.2}s` }}
        ></div>
      ))}
    </div>
  );

  return (
    <div
      className={clsx("flex items-start p-4 rounded-lg shadow-sm min-w-35", {
        "bg-gray-200": amIAuthor,
        "bg-blue-200": !amIAuthor,
      })}
    >
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between space-x-3">
          <h4 className="text-sm font-semibold">{username}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className="flex items-left">
          {isTyping ? (
            <TypingAnimation />
          ) : (
            <p className="text-sm text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
