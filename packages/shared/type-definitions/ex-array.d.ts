interface ExArrayConstructor {
  /**
   * Returns the last element of the array.
   * @param array The target array.
   */
  getLast: <T>(array: T[]) => T | undefined
}
