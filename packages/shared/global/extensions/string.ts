class ExStringClass implements ExStringConstructor {
  isString = (testable): testable is string => {
    return typeof testable === 'string'
  }

  equal = (str1: string, str2: string): boolean => {
    return str1 === str2
  }

  contains = (str: string, testable: string): boolean => {
    return !!str.toLocaleLowerCase().includes(testable.toLocaleLowerCase())
  }

  withinLength = (str: string, min: number, max: number): boolean => {
    return str.length >= min && str.length <= max
  }
}

global.ExString = new ExStringClass()
