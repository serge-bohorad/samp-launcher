import '../'

describe('Number extensions', () => {
  describe('isNumber', () => {
    test('default', () => {
      expect(Number.isNumber(0)).toBeTruthy()
    })

    test('when a string is passed', () => {
      expect(Number.isNumber('')).toBeFalsy()
    })

    test('when a boolean is passed', () => {
      expect(Number.isNumber(true)).toBeFalsy()
    })

    test('when a plain object is passed', () => {
      expect(Number.isNumber({})).toBeFalsy()
    })

    test('when an array is passed', () => {
      expect(Number.isNumber([])).toBeFalsy()
    })

    test('when a function is passed', () => {
      expect(Number.isNumber(() => 0)).toBeFalsy()
    })

    test('when null is passed', () => {
      expect(Number.isNumber(null)).toBeFalsy()
    })

    test('when undefined is passed', () => {
      expect(Number.isNumber(undefined)).toBeFalsy()
    })
  })

  describe('equal', () => {
    const num = 0

    test('default', () => {
      expect(num.equal(0)).toBeTruthy()
    })

    test('when numbers are not equal', () => {
      expect(num.equal(1)).toBeFalsy()
    })
  })
})
