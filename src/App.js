import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { APIDocs } from "./components/APIDocs/APIDocs";
import { HelpResources } from "./components/HelpResources/HelpResources";
import "./App.css";
import "uswds/dist/css/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { SwaggerPage } from "./components/SwaggerPage/SwaggerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/documentation" element={<APIDocs />} />
          <Route path="/swagger/:endpoint" element={<SwaggerPage />} />
          <Route path="/help-resources" element={<HelpResources />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
