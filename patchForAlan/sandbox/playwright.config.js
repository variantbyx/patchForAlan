module.exports = {
  testDir: ".",
  testMatch: /.*\.spec\.(js|ts)/,
  timeout: 30000,
  retries: 0,
  reporter: "list",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  outputDir: "test-results",
};
