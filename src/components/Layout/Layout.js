import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
