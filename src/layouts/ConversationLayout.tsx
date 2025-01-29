import { ReactNode } from "react";

interface ConversationLayoutProps {
  children: ReactNode;
}

const ConversationLayout = ({ children }: ConversationLayoutProps) => {
  return (
    <div className="flex flex-col justify-end h-screen px-[50px] py-4">
      {children}
    </div>
  );
};

export default ConversationLayout;
