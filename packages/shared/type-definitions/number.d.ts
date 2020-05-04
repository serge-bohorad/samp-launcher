interface NumberConstructor {
  /**
   * Determines whether a value is a number.
   * @param value A testable value.
   */
  isNumber(value: any): boolean
  /**
   * Determines whether a number is in the specified range.
   * @param min A minimum number.
   * @param min A maximum number.
   * @param value A testable value.
   */
  isInRange(min: number, max: number, value: number): boolean
  /**
   * Returns a number in fixed-point notation.
   * @param num A target number.
   * @param fractionDigits A number of digits after the decimal point
   */
  fixed(num: number, fractionDigits: number): number
}

interface Number {
  /**
   * Determines whether two numbers have the same value.
   * @param num A testable value.
   */
  equal(num: number): boolean
}
