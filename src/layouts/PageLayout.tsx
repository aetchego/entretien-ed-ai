import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="w-full p-8 items-center">{children}</div>;
};

export default PageLayout;
