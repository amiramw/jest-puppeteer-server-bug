module.exports = {
  exitOnPageError: false,
  launch: {
    // headless: false,
    // devtools: true
  },
  server: {
    command:
      "echo hello",
    port: 4444,
    launchTimeout: 30000
  }
};
