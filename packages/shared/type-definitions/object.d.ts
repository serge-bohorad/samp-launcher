interface ObjectConstructor {
  /**
   * Determines whether a value is a plain object.
   * @param value A testable value.
   */
  isPlainObject(value): boolean
  /**
   * Determines whether a value of some field is equal to testable.
   * @param object A target object.
   * @param testable A testable value.
   */
  someEqual(object: PlainObject, testable): boolean
  /**
   * Determines whether all field values are equal to testable.
   * @param object A target object.
   * @param testable A testable value.
   */
  everyEqual(object: PlainObject, testable): boolean
  /**
   * Creates a new object skipping values for the specified keys.
   * @param object A target object.
   * @param keys An object keys array.
   * @returns A new object without specified keys.
   */
  omit<O extends PlainObject, K extends keyof O>(object: O, keys: K[]): Omit<O, K>
}
