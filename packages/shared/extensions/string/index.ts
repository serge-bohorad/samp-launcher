String.isString = function (value: any): boolean {
  return typeof value === 'string'
}

String.prototype.equal = function (this: string, str: string): boolean {
  return this.toString() === str
}

String.prototype.contains = function (this: string, testable: string): boolean {
  return Boolean(this.toLocaleLowerCase().indexOf(testable.toLocaleLowerCase()) + 1)
}

String.prototype.containsStrict = function (this: string, testable: string): boolean {
  return Boolean(this.indexOf(testable) + 1)
}
