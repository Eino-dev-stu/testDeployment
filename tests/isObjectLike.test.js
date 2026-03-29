import isObjectLike from "../src/isObjectLike"
describe("isObjectLike.js testit", () => {
  test("tunnistaa objektimaiset  oikein", () => {
    expect(isObjectLike({})).toBe(true)
  })
})
