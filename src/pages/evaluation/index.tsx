import React from "react";
import { useEvaluation } from "../../features/evaluation/hooks/useEvaluation";
import { useParams } from "react-router";
import Answsers from "../../features/evaluation/components/Answers";
import Loader from "../../components/ui/Loader";
import EvaluationHeader from "../../features/evaluation/components/EvaluationHeader";
import PageLayout from "../../layouts/PageLayout";

const Evaluation = () => {
  let { studentId } = useParams();
  const { loading, error, evaluation } = useEvaluation(studentId);
  return (
    <PageLayout>
      {error && <p>Désolée il y a eu une erreur. Veuillez réessayer.</p>}
      {!error && loading && <Loader />}
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
    </PageLayout>
  );
};

export default Evaluation;
