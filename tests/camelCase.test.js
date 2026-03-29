import camelCase from "../src/camelCase"
describe("camelCase.js testit", () => {
  test("tunnistaa camelCase stringit oikein", () => {
    expect(camelCase("hello world")).toBe("helloWorld")
  })
})
