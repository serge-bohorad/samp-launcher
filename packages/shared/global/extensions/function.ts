class ExFunctionClass implements ExFunctionConstructor {
  isFunction = (testable): testable is Callback => {
    return typeof testable === 'function'
  }
}

global.ExFunction = new ExFunctionClass()
