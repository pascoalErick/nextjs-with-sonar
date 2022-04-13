const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "202287feba9dfcdb97d099ba53c109c4b044c0d5",
    options: {
      "sonar.login": "admin",
      "sonar.password": "admin13",
    },
  },
  () => {}
);
