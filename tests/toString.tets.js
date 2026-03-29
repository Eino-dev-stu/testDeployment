import toString from "../src/toString"
describe("toString.js testit", () => {
  test("tunnistaa objektit oikein", () => {
    expect(toString({})).toBe("[object Object]")
  })
})
