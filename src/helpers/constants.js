export const constants = {
  // CAM API Swagger pages
  swaggerPages: [
    {
      name: "account-mgmt",
      url: "https://api.epa.gov/easey/dev/account-mgmt/swagger-json",
      intro:
        "Access account-based data for CAMD's allowance trading programs. This includes account information, account holdings, and transaction history for all account types. Allowance and emissions-based compliance records for facility accounts are also available.",
    },
    {
      name: "facilities-mgmt",
      url: "https://api.epa.gov/easey/dev/facilities-mgmt/swagger-json",
      intro:
        "Access data about the facilities CAMD regulates. The information includes the location of the facility and the electric generating units (EGUs) that operated there including their characteristics, such as unit type, fuels, and pollution controls devices.",
    },
    {
      name: "emissions-mgmt",
      url: "https://api.epa.gov/easey/dev/emissions-mgmt/swagger-json",
      intro:
        "Access continuously monitored operation and CO2, NOx, and SO2 emissions data from electric generating units (EGUs). These data are available at various levels of granularity including hour, day, month, quarter, ozone season, and annual.",
    },
    {
      name: "master-data-mgmt",
      url: "https://api.epa.gov/easey/dev/master-data-mgmt/swagger-json",
      intro:
        "Access the codes and descriptions of common attributes used across our data systems. Examples of these data are the types of fuels a unit can combust, and different pollution control devices used to control a specific pollutant.",
    },
  ],
  releasePages: [
    {
      name: "Account Management OpenAPI Specification",
      version: "v1.0.99",
      publish: "Mon Apr 18 2022",
    },
    {
      name: "Facility Management OpenAPI Specification",
      version: "v1.0.143",
      publish: "Fri Apr 15 2022",
    },
    {
      name: "Emissions Management OpenAPI Specification",
      version: "v1.0.272",
      publish: "Tue May 10 2022",
    },
    {
      name: "Master Data Management OpenAPI Specification",
      version: "v1.0.116",
      publish: "Thu Mar 24 2022",
    },
  ],
};
