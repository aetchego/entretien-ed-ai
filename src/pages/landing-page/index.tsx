import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Block from "../../components/ui/Block";
import { GraduationCap, MessageCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex w-[80%] flex-row space-x-5">
          <Block color="bg-indigo-500 hover:bg-white text-white hover:text-indigo-500">
            <Link
              key="conversation"
              to="conversation"
              className="flex items-center justify-center h-full w-full space-x-2.5 text-inherit font-medium"
            >
              <MessageCircle className="text-lg text-inherit icon-appear" />
              <span className="typewriter pl-2">Assistant IA</span>
            </Link>
          </Block>
          <Block color="bg-indigo-500 hover:bg-white text-white hover:text-indigo-500">
            <Link
              key="evaluations"
              to="evaluations"
              className="flex items-center justify-center h-full w-full space-x-2.5 text-inherit font-medium"
            >
              <GraduationCap className="text-lg text-inherit hover:text-indigo-500" />
              <span className="typewriter"> Mes évaluations</span>
            </Link>
          </Block>
        </div>
      </div>
    </PageLayout>
  );
};

export default LandingPage;
