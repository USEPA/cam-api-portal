import React from "react";

export const HomePage = () => {
  return (
    <div className="grid-row">
      <div className="grid-col-6 mobile-lg:margin-y-1 desktop:margin-y-3">
        <h1>About CAM API</h1>
        <p>
          These REST APIs provide access to a variety of data the Clean Air
          Markets Division (CAMD) collects to run programs designed to reduce
          air pollution from power plants. Developers can use these APIs to
          build applications or create analyses using a variety of platforms.
        </p>
      </div>
    </div>
  );
};
