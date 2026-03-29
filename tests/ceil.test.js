import ceil from "../src/ceil"
describe("ceil.js testit", () => {
  test("tunnistaa ceil-arvot oikein", () => {
    expect(ceil(4.006)).toBe(5)
  })
})
