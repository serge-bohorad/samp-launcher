import '../'

describe('String extensions', () => {
  describe('isString', () => {
    test('default', () => {
      expect(String.isString('')).toBeTruthy()
    })

    test('when a number is passed', () => {
      expect(String.isString(0)).toBeFalsy()
    })

    test('when a boolean is passed', () => {
      expect(String.isString(true)).toBeFalsy()
    })

    test('when a plain object is passed', () => {
      expect(String.isString({})).toBeFalsy()
    })

    test('when an array is passed', () => {
      expect(String.isString([])).toBeFalsy()
    })

    test('when a function is passed', () => {
      expect(String.isString(() => 0)).toBeFalsy()
    })

    test('when null is passed', () => {
      expect(String.isString(null)).toBeFalsy()
    })

    test('when undefined is passed', () => {
      expect(String.isString(undefined)).toBeFalsy()
    })
  })

  describe('equal', () => {
    const str = 'foo'

    test('default', () => {
      expect(str.equal('foo')).toBeTruthy()
    })

    test('when strings are not equal', () => {
      expect(str.equal('bar')).toBeFalsy()
    })
  })

  describe('contains', () => {
    const str = 'HELLO world, WeLcOmE to tHE uniVERSE'

    test('default', () => {
      expect(str.contains('Hello world, welcome to the universe')).toBeTruthy()
    })

    test('when a string does not contain a substring', () => {
      expect(str.contains('...')).toBeFalsy()
    })
  })

  describe('containsStrict', () => {
    const str = 'Hello world, welcome to the universe'

    test('default', () => {
      expect(str.containsStrict('Hello world, welcome to the universe')).toBeTruthy()
    })

    test('when string registers do not match', () => {
      expect(str.containsStrict('hello WorlD')).toBeFalsy()
    })
  })
})
