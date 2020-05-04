declare namespace NodeJS {
  interface Global {
    Logger: LoggerConstructor
  }
}

declare const Logger: NodeJS.Global['Logger']
