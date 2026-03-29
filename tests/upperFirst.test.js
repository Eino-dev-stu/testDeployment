import upperFirst from "../src/upperFirst"
describe("upperFirst.js testit", () => {
  test("muuttaa kokonaan isot kirjaimet oikeaksi (FRED -> FRED)", () => {
    expect(upperFirst("FRED")).toBe("FRED")
  })
  test("muuttaa kokonaan pienet kirjaimet oikeaksi (fred -> Fred)", () => {
    expect(upperFirst("fred")).toBe("Fred")
  })
})
