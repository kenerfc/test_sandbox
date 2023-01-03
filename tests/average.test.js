const { average } = require("../utils/fn_for_test");

describe('average', () => {
    test('with one value is the value itself', () => {
        expect(average([1])).toBe(1)
    })

    test('with many, calculated correctly', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
    })
    
    test('with empty array is zero', () => {
        expect(average([])).toBe(0)
    })
    
    test('with undefined', () => {
        expect(average()).toBeUndefined()
    })
})