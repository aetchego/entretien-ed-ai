import { Link, useLocation } from "react-router-dom";
import { Home, GraduationCap, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Accueil", path: "/", icon: Home },
  { name: "Conversation IA", path: "/conversation", icon: MessageCircle },
  { name: "Évaluations", path: "/evaluations", icon: GraduationCap },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-indigo-500 border-b-2 border-indigo-500"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:border-b-2"
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
