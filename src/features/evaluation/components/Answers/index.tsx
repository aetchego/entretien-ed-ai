import React, { useMemo } from "react";
import { groupByFirstNumber } from "../../utils";
import { mapAnswerStatusToLabel } from "../../mappers";
import { AnswerStatus } from "../../types";
import Block from "../../../../components/ui/Block";
import StatusChip from "../../../../components/ui/StatusChip";

type Answer = {
  number: string;
  grade: number;
  maxGrade: number;
  status: AnswerStatus;
};

type AnswersProps = {
  answers: Answer[];
};

const Answsers = ({ answers }: AnswersProps) => {
  const formattedAnswers = useMemo(() => {
    const groupedData = groupByFirstNumber(answers, " - ");
    return Object.entries(groupedData);
  }, [answers]);

  return (
    <Block title="Réponses">
      <div className="flex flex-col space-y-3">
        {formattedAnswers.map(([index, exercice]) => (
          <div key={index} className="flex flex-row space-x-2">
            {exercice.map((elem) => (
              <div>
                <StatusChip
                  name={elem.number}
                  label={mapAnswerStatusToLabel(elem.status)}
                  status={elem.status}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Block>
  );
};

export default Answsers;
