describe("my test", () => {

  beforeAll(async () => {
    await page.goto("http://localhost:4444");
  });

  it("reach watt legacy service method getTitle from wattIframeContribution theia contribution", async () => {
    expect("hello").toEqual("world");
  });
});
