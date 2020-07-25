interface LoggerConstructor {
  info: (data) => void
  warning: (data) => void
  error: (data: string) => void
  runtimeError: (error: Error) => void
  debug: (data) => void
}
