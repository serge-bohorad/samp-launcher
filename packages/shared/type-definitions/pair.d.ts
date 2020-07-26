interface Pair<T> {
  id: string
  value: T
}

interface PairConstructor {
  /**
   * Creates a pair.
   * @param value A value to be contained in the "value" field.
   */
  create<T>(value: T): Pair<T>

  /**
   * Deletes a pair from an array of pairs.
   * @param pairs An array of pairs.
   * @param targetPair A pair to deleted.
   */
  delete<T>(pairs: Pair<T>[], targetPair: Pair<T>): Pair<T>[]

  /**
   * Creates pairs from an array like object.
   * @param arrayLike An array like object.
   */
  from<T>(arrayLike: ArrayLike<T>): Pair<T>[]

  /**
   * Returns the identifiers of all pairs.
   * @param pairs An array of pairs.
   */
  ids<T>(pairs: Pair<T>[]): string[]

  /**
   * Returns the values of all pairs.
   * @param pairs An array of pairs.
   */
  values<T>(pairs: Pair<T>[]): T[]
}
