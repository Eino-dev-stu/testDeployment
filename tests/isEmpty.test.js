import isEmpty from "../src/isEmpty"
describe("isEmpty.js testit", () => {
  test("tunnistaa tyhjät objektit oikein", () => {
    expect(isEmpty({})).toBe(true)
  })
})
