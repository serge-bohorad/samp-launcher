export interface MiscEvents {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD
}

export interface MiscEventsPayload {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD: string | number
}

export interface MiscEventsReturns {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD
}
