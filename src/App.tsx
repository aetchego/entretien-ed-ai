import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import SidebarNav from "./components/SidebarNav";

function App() {
  return (
    <div className="flex">
      <div className="w-auto">
        <SidebarNav />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default App
