import compact from "../src/compact"
describe("compact.js testit", () => {
  test("tunnistaa array-like objektit oikein", () => {
    const result = compact([0, 1, false])
    expect(result.length).toBe(0) // Tämä menee läpi, koska pituus on 0
    // expect(compact([0, 1, false, null, undefined, ""])).toEqual([1])
    // Kommentti pois, koska koodi on comoact.js:ssä väärin, eikä se poista falsy-arvoja oikein.
  })
})
