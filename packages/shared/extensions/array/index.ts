Array.prototype.isEmpty = function <T>(this: T[]): boolean {
  return !this.length
}

Array.prototype.last = function <T>(this: T[]): T | undefined {
  return this[this.length - 1]
}
