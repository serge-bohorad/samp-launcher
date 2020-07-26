import uid from 'uid'

class PairClass implements PairConstructor {
  create = <T>(value: T): Pair<T> => {
    return { id: uid(6), value }
  }

  delete = <T>(pairs: Pair<T>[], targetPair: Pair<T>): Pair<T>[] => {
    return pairs.filter(({ id }) => id !== targetPair.id)
  }

  from = <T>(arrayLike: ArrayLike<T>): Pair<T>[] => {
    const arr: Pair<T>[] = []
    const length = arrayLike.length || 0

    for (let i = 0; i < length; i++) {
      arr.push(this.create(arrayLike[i]))
    }

    return arr
  }

  ids = <T>(pairs: Pair<T>[]): string[] => {
    return pairs.map(({ id }) => id)
  }

  values = <T>(pairs: Pair<T>[]): T[] => {
    return pairs.map(({ value }) => value)
  }
}

global.Pair = new PairClass()
