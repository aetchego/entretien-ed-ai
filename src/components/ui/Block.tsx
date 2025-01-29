import { ReactNode } from "react";

interface BlockProps {
  title?: string;
  color?: string;
  children: ReactNode;
}

const Block = ({ title, color = "bg-white", children }: BlockProps) => {
  return (
    <div
      className={`flex flex-col w-full p-5 border-solid border-[1px] border-gray-100 rounded-sm ${color} space-y-5`}
    >
      {title && (
        <div className="w-full">
          <p className="font-semibold text-left">{title}</p>
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Block;
