const {niceLogger} = require("../src/niceLogger.js")

test("niceLogger returns Hello World", () => {
    // Test happens here
    // expect(something).toBe(something)

    // Lets make a test
    expect(niceLogger()).toBe("Hello World.")
})