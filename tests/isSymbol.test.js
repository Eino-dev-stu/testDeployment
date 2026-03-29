import isSymbol from "../src/isSymbol"
describe("isSymbol.js testit", () => {
  test("tunnistaa symbolit oikein", () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })
})
