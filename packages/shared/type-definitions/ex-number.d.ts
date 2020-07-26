interface ExNumberConstructor {
  /**
   * Determines whether a value is a number.
   * @param testable The testable value.
   */
  isNumber(testable): testable is number
  /**
   * Returns a number in fixed-point notation.
   * @param num The target number.
   * @param fractionDigits A number of digits after the decimal point.
   */
  fixed(num: number, fractionDigits: number): number

  /**
   * Determines whether two numbers are equal to each other.
   * @param num1 The first testable value.
   * @param num2 The second testable value.
   */
  equal(num1: number, num2: number): boolean
  /**
   * Determines whether a number within a specific length.
   * @param num The target number.
   * @param min The minimum number.
   * @param min The maximum number.
   */
  withinRange(num: number, min: number, max: number): boolean
}
