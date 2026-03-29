import upperFirst from "../src/upperFirst"
describe("upperFirst.js testit", () => {
  test("muuttaa kokonaan isot kirjaimet oikeaksi (FRED -> Fred)", () => {
    expect(upperFirst("FRED")).toBe("Fred")
  })
  test("muuttaa kokonaan pienet kirjaimet oikeaksi (fred -> Fred)", () => {
    expect(upperFirst("fred")).toBe("Fred")
  })
})
