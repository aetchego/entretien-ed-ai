import type React from "react";

type BlockProps = {
  title?: string;
  children: React.ReactNode;
  color?: string;
};

const Block = ({ title, children, color = "bg-white" }: BlockProps) => {
  return (
    <div
      className={`${color} rounded-lg p-5 h-full flex flex-col border-solid border-[1px] border-gray-100`}
    >
      {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Block;
