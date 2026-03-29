import toNumber from "../src/toNumber"
describe("toNumber.js testit", () => {
  test("tunnistaa numerot oikein", () => {
    expect(toNumber("42")).toBe(42)
  })
  test("tunnistaa ei-numerot oikein", () => {
    expect(toNumber("abc")).toBeNaN()
  })
})
