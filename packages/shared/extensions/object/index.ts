Object.isPlainObject = function (value): boolean {
  return !!value && Object.getPrototypeOf(value) === Object.prototype
}

Object.someEqual = function (object, testable): boolean {
  return Object.keys(object).some((key) => object[key] === testable)
}

Object.everyEqual = function (object, testable): boolean {
  return Object.keys(object).every((key) => object[key] === testable)
}

Object.omit = function (obj, keys: any[]) {
  const newObject = {}

  Object.keys(obj).forEach((key) => !keys.includes(key) && (newObject[key] = obj[key]))

  return newObject as any
}
