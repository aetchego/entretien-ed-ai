import type React from "react";
import { AnswerStatus, AnswerStatusLabel } from "../../types/evaluation";

interface StatusChipProps {
  name: string;
  status: AnswerStatus;
  label: AnswerStatusLabel;
}

const StatusChip: React.FC<StatusChipProps> = ({ name, status, label }) => {
  const getStatusColor = (status: AnswerStatus): string => {
    switch (status) {
      case AnswerStatus.CORRECT:
        return "bg-green-100 text-green-800";
      case AnswerStatus.NOT_DONE:
        return "bg-gray-100 text-gray-800";
      case AnswerStatus.WRONG:
        return "bg-red-100 text-red-800";
      case AnswerStatus.PARTIAL:
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center p-3 rounded-md text-xs font-medium ${getStatusColor(
        status
      )}`}
    >
      {name}: {label}
    </span>
  );
};

export default StatusChip;
