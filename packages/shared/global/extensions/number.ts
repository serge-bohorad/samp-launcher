class ExNumberClass implements ExNumberConstructor {
  isNumber = (testable): testable is number => {
    return typeof testable === 'number'
  }

  fixed = (num: number, fractionDigits: number): number => {
    return +num.toFixed(fractionDigits)
  }

  equal = (num1: number, num2: number): boolean => {
    return num1 === num2
  }

  withinRange = (num: number, min: number, max: number): boolean => {
    return num >= min && num <= max
  }
}

global.ExNumber = new ExNumberClass()
