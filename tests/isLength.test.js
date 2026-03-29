import isLength from "../src/isLength"
describe("isLength.js testit", () => {
  test("tunnistaa pituuden oikein", () => {
    expect(isLength(3)).toBe(true)
  })
})
