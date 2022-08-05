import React from "react";
import { GridContainer, Grid } from "@trussworks/react-uswds";

export const APIKeyPage = () => {
  const loadAPISignup = () => {
    window["apiUmbrellaSignupOptions"] = {
      registrationSource: "cam-api-portal",
      apiKey: "%REACT_APP_API_UMBRELLA_KEY_CREATOR%",
      exampleApiUrl:
        "https://api.epa.gov/easey/master-data-mgmt/control-technologies?api_key=?api_key={{api_key}}",
      contactUrl: "https://www.epa.gov/airmarkets/forms/cam-api-contact-us",
    };
    const existingScript = document.getElementById("apisignup-script");
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement("script");
    script.src = "https://api.data.gov/static/javascripts/signup_embed.js";
    script.id = "apisignup-script";
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    loadAPISignup();
  });

  return (
    <GridContainer>
      <Grid row gap>
        <Grid desktop={{ col: 6 }} className="text-left">
          <h1>Sign Up for an API Key</h1>
          <div id="apidatagov_signup">Loading signup form...</div>
        </Grid>
      </Grid>
    </GridContainer>
  );
};
