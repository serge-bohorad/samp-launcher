interface ExFunctionConstructor {
  /**
   * Determines whether a value is a function.
   * @param testable A testable value.
   */
  isFunction(testable): testable is Callback
}
