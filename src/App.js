import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { APIDocs } from "./components/APIDocs/APIDocs";
import { HelpResources } from "./components/HelpResources/HelpResources";
import { ReleaseNotes } from "./components/ReleaseNotes/ReleaseNotes";
import { RelatedResources } from "./components/RelatedResources/RelatedResources";
import { FAQ } from "./components/FAQ/FAQ";
import "./App.css";
import "@trussworks/react-uswds/lib/uswds.css";
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
          <Route path="/release-notes" element={<ReleaseNotes />} />
          <Route path="/related-resources" element={<RelatedResources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
