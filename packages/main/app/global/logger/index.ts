import fs from 'fs'
import moment from 'moment'

import { directoryPath, logFilePath } from './data'

class Logger implements LoggerConstructor {
  constructor() {
    if (!this.isLogDirectoryExists()) {
      this.createLogDirectory()
    }
  }

  info = (data): void => {
    this.log('INFO', data)
  }

  warning = (data): void => {
    this.log('WARNING', data)
  }

  error = (data): void => {
    this.log('ERROR', data)
  }

  runtimeError = ({ stack, message }: Error): void => {
    this.log('RUNTIME ERROR', stack || message)
  }

  debug = (data): void => {
    if (!DEVELOPMENT) {
      return
    }

    this.log('DEBUG', data)
  }

  private log = (type: string, data: any): void => {
    const entry = this.generateEntry(type, data)

    if (DEVELOPMENT) {
      console.log(entry)
    }

    fs.appendFile(logFilePath, entry, (error) => {
      if (error) {
        console.log(error)
      }
    })
  }

  private generateEntry = (type: string, data): string => {
    return `[${this.getDate()}] [${type}] ${data}\n`
  }

  private getDate = (): string => {
    return moment().format('DD-MM-YYYY HH:mm:ss')
  }

  private isLogDirectoryExists = (): boolean => {
    return fs.existsSync(directoryPath)
  }

  private createLogDirectory = (): void => {
    fs.mkdirSync(directoryPath)
  }
}

global.Logger = new Logger()
