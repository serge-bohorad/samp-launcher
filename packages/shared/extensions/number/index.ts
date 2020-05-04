Number.isNumber = function (value: any): boolean {
  return typeof value === 'number'
}

Number.isInRange = function (min: number, max: number, value: number): boolean {
  return value >= min && value <= max
}

Number.fixed = function fixed(num: number, fractionDigits: number): number {
  return Number(num.toFixed(fractionDigits))
}

Number.prototype.equal = function (this: number, num: number): boolean {
  return this.valueOf() === num
}
