class ExObjectClass implements ExObjectConstructor {
  isPlainObject = (testable): testable is object => {
    return !!testable && Object.getPrototypeOf(testable) === Object.prototype
  }

  someEqual = (obj: PlainObject, testable): boolean => {
    return Object.keys(obj).some((key) => obj[key] === testable)
  }

  everyEqual = (obj: PlainObject, testable): boolean => {
    return Object.keys(obj).every((key) => obj[key] === testable)
  }

  replace = <O extends PlainObject>(obj: O, props: Partial<O>): void => {
    for (const [key] of Object.keys(props)) {
      obj[key as any] = props[key]
    }
  }

  size = (obj: PlainObject): number => {
    return Object.keys(obj).length
  }

  omit = <O extends PlainObject, K extends keyof O>(obj: O, keys: K[]): Omit<O, K> => {
    const newObj = {}

    for (const [key] of Object.keys(obj)) {
      if (!keys.includes(key as any)) {
        newObj[key] = obj[key]
      }
    }

    return newObj as any
  }
}

global.ExObject = new ExObjectClass()
