import isObject from "../src/isObject"
describe("isObject.js testit", () => {
  test("tunnistaa objektit oikein", () => {
    expect(isObject({})).toBe(true)
  })
})
