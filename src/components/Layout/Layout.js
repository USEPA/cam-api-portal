import React from "react";
import { Outlet } from "react-router-dom";
import { SubHeader } from "../SubHeader/SubHeader";

export const Layout = () => {
  return (
    <div>
      <SubHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
