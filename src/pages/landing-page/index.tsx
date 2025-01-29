import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Block from "../../components/ui/Block";
import { GraduationCap, MessageCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-full space-y-10">
        <div>
          <h1 className="text-gray-500 text-8xl md:text-9xl">ED AI</h1>
        </div>
        <div className="flex w-[80%] flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
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
