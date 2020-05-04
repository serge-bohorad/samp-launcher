import { resolve } from 'path'

export const directoryPath = resolve(process.cwd(), 'logs')
export const logFilePath = resolve(directoryPath, 'main.log')
