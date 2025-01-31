import Block from "../../../../components/ui/Block";
import Section from "../../../../components/ui/Section";

type ImprovementsProps = {
  general: string[];
  specific: string[];
};

const Improvements = ({ general, specific }: ImprovementsProps) => {
  return (
    <Block title="Lacunes identifiées">
      <div className="space-y-5">
        {specific.length && (
          <Section title="Spécifiques à cet élève" items={specific} />
        )}
        {general.length && (
          <Section title="Communes dans le groupe" items={general} />
        )}
      </div>
    </Block>
  );
};

export default Improvements;
