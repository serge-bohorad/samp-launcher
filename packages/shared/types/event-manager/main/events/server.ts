import { AddingPayload, UpdatingAddressPayload } from '../payloads/server'
import { Server } from '../../../entities'

export interface ServerEvents {
  SERVER_ADD
  SERVER_DELETE
  SERVER_CLONE
  SERVER_UPDATE_ADDRESS
}

export interface ServerEventsPayload {
  SERVER_ADD: AddingPayload
  SERVER_DELETE: number
  SERVER_CLONE: number
  SERVER_UPDATE_ADDRESS: UpdatingAddressPayload
}

export interface ServerEventsReturns {
  SERVER_ADD: Server
  SERVER_DELETE
  SERVER_CLONE: Server
  SERVER_UPDATE_ADDRESS
}
