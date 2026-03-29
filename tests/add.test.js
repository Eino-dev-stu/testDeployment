import add from "../src/add.js"
describe("add.js testit", () => {
  test("lisää kaksi positiivista lukua oikein", () => {
    expect(add(6, 4)).toBe(10)
  })

  test("lisää positiivisen ja negatiivisen luvun", () => {
    expect(add(6, -4)).toBe(2)
  })

  test("lisää kaksi negatiivista lukua tanne", () => {
    expect(add(-6, -4)).toBe(-10)
  })

  test("palauttaa luvun itse, jos toinen parametri on 0", () => {
    expect(add(5, 0)).toBe(5)
    expect(add(0, 5)).toBe(5)
  })
})
