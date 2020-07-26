interface ExStringConstructor {
  /**
   * Determines whether a value is a string.
   * @param testable The testable value.
   */
  isString(testable): testable is string
  /**
   * Determines whether two strings are equal to each other.
   * @param str1 The first testable value.
   * @param str2 The second testable value
   */
  equal(str1: string, str2: string): boolean
  /**
   * Determines whether a string contains a case-insensitive substring.
   * @param str The target string.
   * @param testable The testable value.
   */
  contains(str: string, testable: string): boolean
  /**
   * Determines whether a string within a specific length.
   * @param str The target string.
   * @param min The minimum length.
   * @param max The maximum length.
   */
  withinLength(str: string, min: number, max: number)
}
