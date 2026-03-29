import defaultToAny from "../src/defaultToAny"
describe("defaultToAny.js testit", () => {
  test("tunnistaa defaultToAny-arvot oikein", () => {
    expect(defaultToAny(undefined, null, NaN, 42)).toBe(42)
    expect(defaultToAny(undefined, null, NaN, "hello")).toBe("hello")
    expect(defaultToAny(undefined, null, NaN)).toBeUndefined()
  })
})
