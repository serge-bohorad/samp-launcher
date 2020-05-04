interface StringConstructor {
  /**
   * Determines whether a value is a string.
   * @param value A testable value.
   */
  isString(value: any): boolean
}

interface String {
  /**
   * Determines whether two strings have the same value.
   * @param str A testable value.
   */
  equal(str: string): boolean
  /**
   * Determines whether the string contain a case-insensitive substring.
   * @param testable A testable value.
   */
  contains(testable: string): boolean
  /**
   * Determines whether the string contain a specific substring.
   * @param testable A testable value.
   */
  containsStrict(testable: string): boolean
}
