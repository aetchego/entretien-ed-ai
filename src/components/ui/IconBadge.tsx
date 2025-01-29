interface ScoreDisplayProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconBadge = ({ icon, title, description }: ScoreDisplayProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-xs font-medium text-gray-500 whitespace-nowrap">
          {title}
        </h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default IconBadge;
