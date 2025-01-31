import { useEvaluation } from "../../features/evaluation/hooks/useEvaluation";
import { useParams } from "react-router";
import Loader from "../../components/ui/Loader";
import EvaluationHeader from "../../features/evaluation/components/EvaluationHeader";
import PageLayout from "../../layouts/PageLayout";
import Exercices from "../../features/evaluation/components/Exercices";
import Comment from "../../features/evaluation/components/Comments";
import Status from "../../features/evaluation/components/Status";
import Improvements from "../../features/evaluation/components/Improvements";

const Evaluation = () => {
  const { studentId } = useParams();
  const {
    loading,
    error,
    examName,
    studentName,
    grades,
    aiDetection,
    comment,
    exercices,
    pdf,
    generalImprovements,
    specificImprovements,
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
        <div className="flex flex-col space-y-5">
          <div className="flex w-full justify-center mb-5">
            {examName && studentName && (
              <EvaluationHeader
                pdfText={pdf}
                name={examName}
                studentName={studentName}
              />
            )}
          </div>
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-1">
              {grades && aiDetection && (
                <Status aiDetection={aiDetection} grades={grades} />
              )}
            </div>
            <div className="lg:col-span-2">
              {comment && <Comment comment={comment} />}
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-1">
              {exercices && <Exercices exercices={exercices} />}
            </div>
            <div className="lg:col-span-2">
              {generalImprovements && specificImprovements && (
                <Improvements
                  specific={specificImprovements}
                  general={generalImprovements}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Evaluation;
