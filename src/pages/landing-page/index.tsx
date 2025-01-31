import { Link } from "react-router-dom";
import { GraduationCap, MessageCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            <span className="block">Ton assistant</span>
            <span className="block text-yellow-300">ED AI</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-indigo-100">
            Découvre une nouvelle façon d'apprendre et d'évaluer tes
            connaissances
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="conversation"
            className="group bg-white bg-opacity-20 rounded-lg shadow-lg hover:bg-opacity-30 transition-all duration-300 ease-in-out p-6 flex flex-col items-center"
          >
            <MessageCircle className="h-12 w-12 text-yellow-300 group-hover:text-yellow-400 transition-colors duration-300" />
            <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
              Assistant IA
            </h2>
            <p className="mt-2 text-sm text-indigo-100 group-hover:text-white transition-colors duration-300">
              Pose tes questions et obtiens des réponses instantanées
            </p>
          </Link>

          <Link
            to="evaluations"
            className="group bg-white bg-opacity-20 rounded-lg shadow-lg hover:bg-opacity-30 transition-all duration-300 ease-in-out p-6 flex flex-col items-center"
          >
            <GraduationCap className="h-12 w-12 text-yellow-300 group-hover:text-yellow-400 transition-colors duration-300" />
            <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
              Mes évaluations
            </h2>
            <p className="mt-2 text-sm text-indigo-100 group-hover:text-white transition-colors duration-300">
              Consulte et analyse tes résultats en détail
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
