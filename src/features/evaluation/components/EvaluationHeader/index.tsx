import Compass from "../../../../assets/Compass.svg";
import Download from "../../../../assets/Download.svg";
import { generatePdf } from "../../../../utils/pdf";

type EvaluationHeaderProps = {
  name: string;
  studentName: string;
  pdfText: string | null;
};

const EvaluationHeader = ({
  name,
  studentName,
  pdfText,
}: EvaluationHeaderProps) => {
  return (
    <>
      <div className="flex flex-col items-center  p-8 space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img className="bg-indigo-100 p-3 rounded-sm" src={Compass} />
          <div className=" text-1xl font-semibold">{name}</div>
          <div className=" text-center font-normal text-sm text-gray-400">
            {studentName}
          </div>
        </div>
        {pdfText && (
          <button
            onClick={() => window.open(generatePdf(pdfText), "_blank")}
            className="text-[11px] bg-indigo-900 rounded-full text-white flex items-center space-x-2 px-3 py-1"
          >
            <img className="w-4 h-4" src={Download} alt="Download Icon" />
            <span>Télécharger</span>
          </button>
        )}
      </div>
    </>
  );
};

export default EvaluationHeader;
