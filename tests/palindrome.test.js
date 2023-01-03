const { palindrome } = require("../utils/fn_for_test");

describe('palindrome', () => {
    test("with kenerdev", () => {
        const result = palindrome("kenerdev");
        expect(result).toBe("vedrenek");
    });

    test("with empty string", () => {
        const result = palindrome("");
        expect(result).toBe("");
    });

    test("with undefined", () => {
        const result = palindrome();
        expect(result).toBeUndefined();
    });
});
