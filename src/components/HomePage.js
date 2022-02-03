import React from "react";
import { WhatIsNewBox } from "@us-epa-camd/easey-design-system";

export const HomePage = () => {
  return (
    <div className="grid-row">
      <div className="grid-col-8 mobile-lg:margin-y-1 desktop:margin-y-3 mobile-lg:order-2 desktop:order-1 display-flex flex-row flex-align-start text-base-darkest order-3 grid-col-12 desktop:grid-col-8">
        <div className="margin-y-1">
          <h1>About CAM API</h1>
          <p>
            These REST APIs provide access to a variety of data the Clean Air
            Markets Division (CAMD) collects to run programs designed to reduce
            air pollution from power plants. Developers can use these APIs to
            build applications or create analyses using a variety of platforms.
          </p>
        </div>
      </div>
      <div className="grid-col-2 mobile-lg:margin-y-1 desktop:margin-y-3 mobile-lg:order-1 desktop:order-3 display-flex flex-row flex-align-start text-base-darkest grid-col-12 desktop:grid-col-4">
        <WhatIsNewBox
          title="What's new?"
          text="What to find in sections... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam,"
        />
      </div>
    </div>
  );
};
