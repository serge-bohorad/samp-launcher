import '../'

describe('Object extensions', () => {
  describe('isPlainObject', () => {
    class Foo {}

    test('default', () => {
      expect(Object.isPlainObject({})).toBeTruthy()
    })

    test('when a number is passed', () => {
      expect(Object.isPlainObject(0)).toBeFalsy()
    })

    test('when a string is passed', () => {
      expect(Object.isPlainObject('')).toBeFalsy()
    })

    test('when a boolean is passed', () => {
      expect(Object.isPlainObject(true)).toBeFalsy()
    })

    test('when a class is passed', () => {
      expect(Object.isPlainObject(new Foo())).toBeFalsy()
    })

    test('when an array is passed', () => {
      expect(Object.isPlainObject([])).toBeFalsy()
    })

    test('when a function is passed', () => {
      expect(Object.isPlainObject(() => 0)).toBeFalsy()
    })

    test('when null is passed', () => {
      expect(Object.isPlainObject(null)).toBeFalsy()
    })

    test('when undefined is passed', () => {
      expect(Object.isPlainObject(undefined)).toBeFalsy()
    })
  })
})
