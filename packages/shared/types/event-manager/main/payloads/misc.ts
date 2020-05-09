import { FileFilter } from 'electron'

import { SystemDialogType } from '../../../misc'

export interface ShowingSystemDialogPayload {
  type: SystemDialogType
  defaultPath?: string
  filters?: FileFilter[]
}
