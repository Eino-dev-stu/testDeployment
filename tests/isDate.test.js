import isDate from "../src/isDate"
describe("isDate.js testit", () => {
  test("tunnistaa päivämäärät oikein", () => {
    expect(isDate(new Date())).toBe(true)
  })
})
