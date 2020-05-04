import fs from 'fs'
import momentjs from 'moment'

import { directoryPath, logFilePath } from './data'

const moment = momentjs()

class Logger implements LoggerConstructor {
  constructor() {
    if (!this.isLogDirectoryExist()) {
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
    return moment.utcOffset('Europe/Moscow').format('DD-MM-YYYY HH:MM:SS')
  }

  private isLogDirectoryExist = (): boolean => {
    return fs.existsSync(directoryPath)
  }

  private createLogDirectory = (): void => {
    fs.mkdirSync(directoryPath)
  }
}

global.Logger = new Logger()
