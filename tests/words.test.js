import words from "../src/words"
describe("words.js testit", () => {
  test("erottele sanat pilkulla ja välilyönnillä", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ])
  })
})
