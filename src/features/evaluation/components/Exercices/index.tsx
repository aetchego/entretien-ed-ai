import { useMemo } from "react";
import { groupByFirstKey } from "../../utils";
import { mapAnswerStatusToLabel } from "../../mappers";
import { AnswerStatus } from "../../types";
import Block from "../../../../components/ui/Block";
import StatusChip from "../../../../components/ui/StatusChip";

type Exercice = {
  number: string;
  grade: number;
  maxGrade: number;
  status: AnswerStatus;
};

type ExercicesProps = {
  exercices: Exercice[];
};

const Exercices = ({ exercices }: ExercicesProps) => {
  const formattedExercises = useMemo(() => {
    const groupedData = groupByFirstKey(exercices, "number", " - ");
    return Object.entries(groupedData);
  }, [exercices]);

  return (
    <Block title="Réponses">
      <div className="flex flex-col space-y-3">
        {formattedExercises.map(([index, exercice]) => (
          <div key={index} className="flex flex-row space-x-2">
            {exercice.map((elem) => (
              <StatusChip
                name={elem.number}
                label={mapAnswerStatusToLabel(elem.status)}
                status={elem.status}
              />
            ))}
          </div>
        ))}
      </div>
    </Block>
  );
};

export default Exercices;
