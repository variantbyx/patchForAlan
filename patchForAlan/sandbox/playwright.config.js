module.exports = {
  testDir: ".",
  testMatch: /.*\.spec\.(js|ts)/,
  timeout: 30000,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: process.env.BASE_URL || "http://host.docker.internal:5173",
    headless: true,
    screenshot: "on",
    trace: "retain-on-failure",
  },
  outputDir: "test-results",
};
