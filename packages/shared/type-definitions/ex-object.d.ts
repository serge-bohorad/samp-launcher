interface ExObjectConstructor {
  /**
   * Determines whether a value is a plain object.
   * @param testable The testable value.
   */
  isPlainObject: (testable) => testable is object
  /**
   * Determines whether a value of some field is equal to testable.
   * @param obj The target object.
   * @param testable The testable value.
   */
  someEqual: (obj: PlainObject, testable) => boolean
  /**
   * Determines whether all field values are equal to testable.
   * @param obj The target object.
   * @param testable The testable value.
   */
  everyEqual: (obj: PlainObject, testable) => boolean
  /**
   * Replaces an object values according to properties.
   * @param obj The target object.
   * @param props The replaceable properties.
   */
  replace<O extends PlainObject>(obj: O, props: Partial<O>): void
  /**
   * Determines the size of a specific object.
   * @param obj The target object.
   */
  size(obj: PlainObject): number
  /**
   * Creates a new object, omitting the specified keys.
   * @param obj The target object.
   * @param keys The keys for omitting.
   */
  omit<O extends PlainObject, K extends keyof O>(obj: O, keys: K[]): Omit<O, K>
}
