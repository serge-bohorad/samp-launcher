declare namespace NodeJS {
  interface Global {
    ExObject: ExObjectConstructor
    ExFunction: ExFunctionConstructor
    ExArray: ExArrayConstructor
    ExString: ExStringConstructor
    ExNumber: ExNumberConstructor
    Pair: PairConstructor
  }
}

declare const ExObject: ExObjectConstructor
declare const ExFunction: ExFunctionConstructor
declare const ExArray: ExArrayConstructor
declare const ExString: ExStringConstructor
declare const ExNumber: ExNumberConstructor
declare const Pair: PairConstructor

// Webpack variables
declare const DEVELOPMENT: boolean
