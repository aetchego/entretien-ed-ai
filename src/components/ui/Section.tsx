interface SectionProps {
  title: string;
  items: string[];
}

const Section = ({ title, items }: SectionProps) => {
  return (
    <div className="w-full text-sm text-left space-y-2">
      <p className="bg-gray-100 font-semibold rounded-md p-2">{title}</p>
      <div className="space-y-1">
        {items.map((item, index) => (
          <p key={index} className="list-disc">{`• ${item}`}</p>
        ))}
      </div>
    </div>
  );
};

export default Section;
