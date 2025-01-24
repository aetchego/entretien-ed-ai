import { AnswerStatus, AnswerStatusLabel } from "../types";

export const mapAnswerStatusToLabel = (
  status: AnswerStatus
): AnswerStatusLabel => {
  switch (status) {
    case AnswerStatus.CORRECT:
      return AnswerStatusLabel.CORRECT;
    case AnswerStatus.NOT_DONE:
      return AnswerStatusLabel.NOT_DONE;
    case AnswerStatus.WRONG:
      return AnswerStatusLabel.WRONG;
    case AnswerStatus.PARTIAL:
      return AnswerStatusLabel.PARTIAL;
    default:
      return AnswerStatusLabel.UNKNOW;
  }
};
