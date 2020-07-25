import fs from 'fs'
import moment from 'moment'

import { directoryPath, logFilePath } from './data'

class Logger implements LoggerConstructor {
  constructor() {
    if (!this.isLogDirectoryExists()) {
      this.createLogDirectory()
    }
  }

  info = (data): Promise<void> => {
    return this.log('INFO', data)
  }

  warning = (data): Promise<void> => {
    return this.log('WARNING', data)
  }

  error = (error: Error): Promise<void> => {
    return this.log('ERROR', error.stack)
  }

  debug = (data): Promise<void> => {
    return this.log('DEBUG', data)
  }

  private log = (type: string, data: any): Promise<void> => {
    const newEntry = this.generateEntry(type, data)

    if (DEVELOPMENT) {
      console.log(newEntry)
    }

    return fs.promises.appendFile(logFilePath, newEntry)
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
