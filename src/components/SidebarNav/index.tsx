import { Link, useLocation } from "react-router-dom";
import { Home, GraduationCap, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Accueil", path: "/", icon: Home },
  { name: "Conversation IA", path: "/conversation", icon: MessageCircle },
  { name: "Évaluation Devoir", path: "/evaluations", icon: GraduationCap },
];

const SidebarNav = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col h-full bg-gray-100 w-20 border-r">
        <div className="flex-grow" />
      <div className="flex-col h-[70%] space-y-8 ">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center w-full px-4 py-2 text-gray-500 text-left ${
              location.pathname === item.path
                ? "bg-gray-200"
                : "hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center justify-center mr-2">
              <item.icon className="w-10 h-10" />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;
