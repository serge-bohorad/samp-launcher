type Result<V = null, E = string> = [V, null] | [null, E]

type PlainObject = Record<string | number, any>
type Callback = (...args) => any

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
type ObjectOmit<O extends PlainObject, K extends keyof O> = Omit<O, K>
