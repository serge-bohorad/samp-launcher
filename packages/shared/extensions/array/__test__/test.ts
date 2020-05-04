import '../'

describe('Array extensions', () => {
  describe('isEmpty', () => {
    test('default', () => {
      const arr = []

      expect(arr.isEmpty()).toBeTruthy()
    })

    test('when an array is not empty', () => {
      const arr = [0]

      expect(arr.isEmpty()).toBeFalsy()
    })
  })

  describe('latest', () => {
    test('default', () => {
      const arr = [0, 1, 2, 3, 4]

      expect(arr.last()).toBe(4)
    })

    test('when an array is empty', () => {
      const arr = []

      expect(arr.last()).toBeUndefined()
    })
  })
})
