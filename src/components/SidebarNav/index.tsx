import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users } from "lucide-react";

const navItems = [
  { name: "Accueil", path: "/", icon: Home },
  { name: "Conversation IA", path: "/conversation", icon: Users },
  { name: "Évaluation Devoir", path: "/evaluations/123", icon: Users },
  { name: "Évaluation inexistante", path: "/evaluations/wrong", icon: Users },
];

const SidebarNav = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col h-screen bg-gray-100 w-64 border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold">ED AI</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2 p-4">
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
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
