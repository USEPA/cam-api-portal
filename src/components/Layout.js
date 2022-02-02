import React from "react";
import { Outlet } from "react-router-dom";
import { SubHeader } from "./SubHeader/SubHeader";

export const Layout = () => {
  return (
    <>
      <SubHeader />
      <div>
        <header className="App-header">
          <p>CAM-API-Portal Subheader</p>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
