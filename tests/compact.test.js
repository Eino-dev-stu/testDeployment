import compact from "../src/compact"
describe("compact.js testit", () => {
  test("tunnistaa array-like objektit oikein", () => {
    expect(compact([0, 1, false, null, undefined, ""])).toEqual([1])
  })
})
