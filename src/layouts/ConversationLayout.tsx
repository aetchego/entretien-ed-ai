import type { ReactNode } from "react";

interface ConversationLayoutProps {
  children: ReactNode;
}

const ConversationLayout = ({ children }: ConversationLayoutProps) => {
  return (
    <div className="flex flex-col justify-end h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-4">
      {children}
    </div>
  );
};

export default ConversationLayout;
