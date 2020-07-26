class ExArrayClass implements ExArrayConstructor {
  getLast = <T>(array: T[]): T | undefined => {
    return array[array.length - 1]
  }
}

global.ExArray = new ExArrayClass()
