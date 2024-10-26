const {niceLogger, messageRepeater} = require("../src/niceLogger.js")

describe("niceLogger function test", () => {

    // different test cases

    test("niceLogger returns Hello World", () => {
        // Test happens here
        // expect(something).toBe(something)
    
        // Lets make a test
        expect(niceLogger()).toBe("Hello World.")
    });
});

describe("messageRepeater Function Tests", () => {
    test("messageRepeater repeats words correctly", () => {

    });

    test("messageRepeater repeats numbers correctly", () => {

    });

    test.skip("messageRepeater repeats arrays correctly", () => {

    });
});