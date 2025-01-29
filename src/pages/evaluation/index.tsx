import { useEvaluation } from "../../features/evaluation/hooks/useEvaluation";
import { useParams } from "react-router";
import Loader from "../../components/ui/Loader";
import EvaluationHeader from "../../features/evaluation/components/EvaluationHeader";
import PageLayout from "../../layouts/PageLayout";
import Exercices from "../../features/evaluation/components/Exercices";
import Comment from "../../features/evaluation/components/Comments";
import Status from "../../features/evaluation/components/Status";

const Evaluation = () => {
  let { studentId } = useParams();
  const {
    loading,
    error,
    examName,
    studentName,
    grades,
    aiDetection,
    comment,
    exercices,
  } = useEvaluation(studentId);
  return (
    <PageLayout>
      {error && (
        <div className="flex flex-col justify-center h-full">
          <p>Désolée il y a eu une erreur. Veuillez réessayer.</p>
        </div>
      )}
      {!error && loading && <Loader />}
      {!error && !loading && (
        <>
          <div className="flex w-full justify-center">
            {examName && studentName && (
              <EvaluationHeader
                name={examName}
                studentName={studentName}
              ></EvaluationHeader>
            )}
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-row flex-wrap lg:space-x-5 space-y-5 lg:space-y-0 items-stretch">
              <div className="lg:w-[35%] min-w-[500px] w-full">
                {grades && aiDetection && (
                  <Status aiDetection={aiDetection} grades={grades} />
                )}
              </div>
              <div className="lg:flex-grow min-h-full">
                {comment && <Comment comment={comment} />}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                {exercices && <Exercices exercices={exercices} />}
              </div>
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default Evaluation;
