interface LoggerConstructor {
  info: (data) => Promise<void>
  warning: (data) => Promise<void>
  error: (error: Error) => Promise<void>
  debug: (data) => Promise<void>
}
