import { ShowingSystemDialogPayload } from '../payloads/misc'

export interface MiscEvents {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD
  SHOW_SYSTEM_DIALOG
}

export interface MiscEventsPayload {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD: string | number
  SHOW_SYSTEM_DIALOG: ShowingSystemDialogPayload
}

export interface MiscEventsReturns {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD
  SHOW_SYSTEM_DIALOG: void | string[]
}
