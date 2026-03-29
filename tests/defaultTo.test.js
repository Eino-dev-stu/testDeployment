import defaultTo from "../src/defaultTo"
describe("defaultTo.js testit", () => {
  test("tunnistaa defaultTo-arvot oikein", () => {
    expect(defaultTo(42, null)).toBe(42)
    expect(defaultTo(undefined, 42)).toBe(42)

    expect(defaultTo("hello", "default")).toBe("hello")
  })
})
