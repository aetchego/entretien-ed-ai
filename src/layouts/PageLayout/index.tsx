import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="w-full p-8 items-center">
      <Outlet />
    </div>
  );
};

export default PageLayout;
