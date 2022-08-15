export const constants = {
  // CAM API Swagger pages
  swaggerPages: [
    {
      name: "account-mgmt",
      url: "https://api.epa.gov/easey/account-mgmt/swagger-json",
      title: "Account",
      description:
        "Account management API endpoints for account information, allowance holdings, transactions, and compliance",
    },
    {
      name: "facilities-mgmt",
      url: "https://api.epa.gov/easey/facilities-mgmt/swagger-json",
      title: "Facilities",
      description:
        "Facility management API endpoints for power sector facilities and their attributes (e.g. units, stacks, and owners)",
    },
    {
      name: "emissions-mgmt",
      url: "https://api.epa.gov/easey/emissions-mgmt/swagger-json",
      title: "Emissions",
      description:
        "Emissions management API endpoints for apportioned emissions data (e.g. hourly, daily, monthly, annual, and ozone season)",
    },
    {
      name: "master-data-mgmt",
      url: "https://api.epa.gov/easey/master-data-mgmt/swagger-json",
      title: "Master Data Management",
      description:
        "Master data management API endpoints for lookup codes and data relationships",
    },
    {
      name: "streaming-services",
      url: "https://api.epa.gov/easey/streaming-services/swagger-json",
      title: "Streaming Services",
      description:
        "Streaming services API contains endpoints to stream account, allowance, facilities, and emissions data",
    },
  ],
  releasePages: [
    {
      title: "Account",
      description:
        "Account management API endpoints for account information, allowance holdings, transactions, and compliance",
      version: "v1.0.99",
      publish: "Mon Apr 18 2022",
    },
    {
      title: "Facilities",
      description:
        "Facility management API endpoints for power sector facilities and their attributes (e.g. units, stacks, and owners)",
      version: "v1.0.143",
      publish: "Fri Apr 15 2022",
    },
    {
      title: "Emissions",
      description:
        "Emissions management API endpoints for apportioned emissions data (e.g. hourly, daily, monthly, annual, and ozone season)",
      version: "v1.0.272",
      publish: "Tue May 10 2022",
    },
    {
      title: "Master Data Management",
      description:
        "Master data management API endpoints for lookup codes and data relationships",
      version: "v1.0.116",
      publish: "Thu Mar 24 2022",
    },
    {
      title: "Streaming Services",
      description:
        "Streaming services API contains endpoints to stream account, allowance, facilities, and emissions data",
      version: "v1.0.5",
      publish: "Mon Jun 13 2022",
    },
  ],
  subHeaderMenuList: [
    {
      label: "Home",
      link: `/`,
      external: false,
    },
    {
      label: "API Documentation",
      link: `/documentation`,
      external: false,
    },
    {
      label: "Help & Resources",
      link: `/help-resources`,
    },
    {
      label: "Contact Us",
      link: `https://www.epa.gov/airmarkets/forms/cam-api-contact-us`,
      external: true,
    },
    {
      label: "Request an API Key",
      link: `/api-key-signup`,
      external: false,
    },
  ],
};
