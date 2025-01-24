import React from "react";
import { useEvaluation } from "../../../hooks/useEvaluation";
import { useParams } from "react-router";
import EvaluationHeader from "../../../components/Evaluation/EvaluationHeader";
import Answsers from "../../../components/Evaluation/Answers";
import CircularProgress from "../../../components/ui/Loader";

const Evaluation = () => {
  let { studentId } = useParams();
  const { loading, error, evaluation } = useEvaluation(studentId);
  return (
    <>
      {error && <p>Désolée il y a eu une erreur. Veuillez réessayer.</p>}
      {!error && loading && <CircularProgress />}
      {!error && !loading && (
        <>
          {evaluation.exam && evaluation.student && (
            <EvaluationHeader
              name={evaluation.exam?.name}
              studentName={evaluation.student?.name}
            ></EvaluationHeader>
          )}
          {evaluation.studentExam && (
            <Answsers answers={evaluation.studentExam.exercices} />
          )}
        </>
      )}
    </>
  );
};

export default Evaluation;
