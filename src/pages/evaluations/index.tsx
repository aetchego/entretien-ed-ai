import { Link, Outlet, useLocation } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";

const Evaluations = () => {
  const location = useLocation();
  return (
    <PageLayout>
      <div className="flex flex-row">
        <Link
          key="123"
          to="123"
          className={`items-center px-4 py-2 text-gray-500 text-left ${
            location.pathname === "/evaluations/123"
              ? "bg-gray-200"
              : "hover:bg-gray-200"
          }`}
        >
          Devoir 123
        </Link>
        <Link
          key="124"
          to="124"
          className={`items-center px-4 py-2 text-gray-500 text-left ${
            location.pathname === "/evaluations/124"
              ? "bg-gray-200"
              : "hover:bg-gray-200"
          }`}
        >
          Devoir 124
        </Link>
        <Link
          key="unknown"
          to="unknow"
          className={`items-center px-4 py-2 text-gray-500 text-left ${
            location.pathname === "/evaluations/unknown"
              ? "bg-gray-200"
              : "hover:bg-gray-200"
          }`}
        >
          Devoir Manquant
        </Link>
        <Link
          key="incomplete"
          to="125"
          className={`items-center px-4 py-2 text-gray-500 text-left ${
            location.pathname === "/evaluations/125"
              ? "bg-gray-200"
              : "hover:bg-gray-200"
          }`}
        >
          Devoir Incomplet
        </Link>
      </div>
      <Outlet />
    </PageLayout>
  );
};

export default Evaluations;
