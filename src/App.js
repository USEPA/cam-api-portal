import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { NotFoundPage } from "./components/NotFoundPage";
import "./App.css";
import "uswds/dist/css/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
