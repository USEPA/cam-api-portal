import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header className="App-header">
        <p>CAM-API-Portal Subheader</p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
