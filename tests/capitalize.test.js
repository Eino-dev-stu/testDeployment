import capitalize from "../src/capitalize.js"

describe("capitalize.js testit", () => {
  test("muuttaa kokonaan isot kirjaimet oikeaksi (FRED -> Fred)", () => {
    expect(capitalize("FRED")).toBe("Fred")
  })

  test("muuttaa kokonaan pienet kirjaimet oikeaksi (fred -> Fred)", () => {
    expect(capitalize("fred")).toBe("Fred")
  })

  test("muuttaa vain ensimmäisen kirjaimen isoksi (fRed -> Fred)", () => {
    expect(capitalize("fRed")).toBe("Fred")
  })
})
