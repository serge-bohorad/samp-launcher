import { RenamingPayload } from '../payloads/group'
import { Group } from '../../../entities'

export interface GroupEvents {
  GROUP_FETCH
  GROUP_CREATE
  GROUP_DELETE
  GROUP_RENAME
  GROUP_SWITCH_SELECTED
}

export interface GroupEventsPayload {
  GROUP_FETCH
  GROUP_CREATE: string
  GROUP_DELETE: number
  GROUP_RENAME: RenamingPayload
  GROUP_SWITCH_SELECTED: number
}

export interface GroupEventsReturns {
  GROUP_FETCH: Group[]
  GROUP_CREATE: Group
  GROUP_DELETE
  GROUP_RENAME
  GROUP_SWITCH_SELECTED
}
