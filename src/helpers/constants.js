export const constants = {
  // CAM API Swagger pages
  swaggerPages: [
    {
      name: "account-mgmt",
      url: "https://api.epa.gov/easey/dev/account-mgmt/swagger-json",
      title: "Account Management",
      description:
        "Account management API endpoints for account information, allowance holdings, transactions, and compliance",
    },
    {
      name: "facilities-mgmt",
      url: "https://api.epa.gov/easey/dev/facilities-mgmt/swagger-json",
      title: "Facilities Management",
      description:
        "Facility management API endpoints for power sector facilities and their attributes (e.g. units, stacks, and owners)",
    },
    {
      name: "emissions-mgmt",
      url: "https://api.epa.gov/easey/dev/emissions-mgmt/swagger-json",
      title: "Emissions Management",
      description:
        "Emissions management API endpoints for apportioned emissions data (e.g. hourly, daily, monthly, annual, and ozone season)",
    },
    {
      name: "master-data-mgmt",
      url: "https://api.epa.gov/easey/dev/master-data-mgmt/swagger-json",
      title: "Master Data Management",
      description:
        "Master data management API endpoints for lookup codes and data relationships",
    },
  ],
};
