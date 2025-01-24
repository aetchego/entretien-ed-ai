import React from "react";
//import Compass from "../../../../assets";

type EvaluationHeaderProps = {
  name: string;
  studentName: string;
};

const EvaluationHeader = ({ name, studentName }: EvaluationHeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full">{/*<img src={Compass} />*/}</div>
      <div className="flex w-full">{name}</div>
      <div className="flex w-full">{studentName}</div>
    </div>
  );
};

export default EvaluationHeader;
