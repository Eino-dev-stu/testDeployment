import keys from "../src/keys"
describe("keys.js testit", () => {
  test("tunnistaa objektien avaimet oikein", () => {
    expect(keys({ a: 1, b: 2 })).toEqual(["a", "b"])
  })
})
