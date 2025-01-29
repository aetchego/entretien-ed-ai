import Block from "../../../../components/ui/Block";
import TimerImage from "../../../../assets/Timer.png";
import Shield from "../../../../assets/Shield.svg";
import Feather from "../../../../assets/Feather.svg";
import { getGradeRange } from "../../utils";
import IconBadge from "../../../../components/ui/IconBadge";
import { Grade } from "../../types";

type StatusProps = {
  aiDetection: number;
  grades: Grade;
};

const Status = ({ aiDetection, grades }: StatusProps) => {
  return (
    <Block title="Statut" color="bg-gray-50">
      <div className="flex flex-col items-center space-y-5">
        <img src={TimerImage} className="w-[50px] h-auto" />
        <span className="font-bold">{getGradeRange(grades[0])}</span>
        <div className="flex flex-row">
          <IconBadge
            icon={<img src={Feather} alt="Shield Icon" />}
            title="Niveau de français"
            description={`${grades[0]}/${grades[1]}`}
          />
          <IconBadge
            icon={<img src={Shield} alt="Shield Icon" />}
            title="Détection d'IA"
            description={`${aiDetection * 100}%`}
          />
        </div>
      </div>
    </Block>
  );
};

export default Status;
