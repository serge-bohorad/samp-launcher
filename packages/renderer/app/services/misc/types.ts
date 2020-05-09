import { FileFilter } from 'electron'

export interface ShowSystemDialogOptions {
  defaultPath?: string
  filters?: FileFilter[]
}
