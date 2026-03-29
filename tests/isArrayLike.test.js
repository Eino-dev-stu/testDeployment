import isArrayLike from "../src/isArrayLike"
describe("isArrayLike.js testit", () => {
  test("tunnistaa array-like objektit oikein", () => {
    expect(isArrayLike([1, 2, 3])).toBe(true)
  })
})
