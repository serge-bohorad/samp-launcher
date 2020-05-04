type PlainObject = Record<string, any>

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
type ObjectOmit<O extends PlainObject, K extends keyof O> = Omit<O, K>
