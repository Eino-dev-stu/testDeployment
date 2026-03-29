import isBoolean from "../src/isBoolean"
describe("isBoolean.js testit", () => {
  test("tunnistaa booleanit oikein", () => {
    expect(isBoolean(true)).toBe(true)
  })
})
