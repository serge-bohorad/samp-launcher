import {
  AddingPayload,
  UpdatingNicknamePayload,
  UpdatingAddressPayload,
  UpdatingNamePayload,
  UpdatingDescriptionPayload,
  UpdatingExtraInjectPayload,
  RefreshingPayload,
  UpdatingPasswordPayload
} from '../payloads/server'
import { Server, ServerInfo } from '../../../entities'

export interface ServerEvents {
  SERVER_ADD
  SERVER_DELETE
  SERVER_CLONE
  SERVER_UPDATE_NICKNAME
  SERVER_UPDATE_ADDRESS
  SERVER_UPDATE_NAME
  SERVER_UPDATE_DESCRIPTION
  SERVER_UPDATE_EXTRA_INJECT
  SERVER_GET_PING
  SERVER_GET_INFO
  SERVER_UPDATE_PASSWORD
}

export interface ServerEventsPayload {
  SERVER_ADD: AddingPayload
  SERVER_DELETE: number
  SERVER_CLONE: number
  SERVER_UPDATE_NICKNAME: UpdatingNicknamePayload
  SERVER_UPDATE_ADDRESS: UpdatingAddressPayload
  SERVER_UPDATE_NAME: UpdatingNamePayload
  SERVER_UPDATE_DESCRIPTION: UpdatingDescriptionPayload
  SERVER_UPDATE_EXTRA_INJECT: UpdatingExtraInjectPayload
  SERVER_GET_PING: RefreshingPayload
  SERVER_GET_INFO: RefreshingPayload
  SERVER_UPDATE_PASSWORD: UpdatingPasswordPayload
}

export interface ServerEventsReturns {
  SERVER_ADD: Server
  SERVER_DELETE
  SERVER_CLONE: Server
  SERVER_UPDATE_NICKNAME
  SERVER_UPDATE_ADDRESS
  SERVER_UPDATE_NAME
  SERVER_UPDATE_DESCRIPTION
  SERVER_UPDATE_EXTRA_INJECT
  SERVER_GET_PING: number
  SERVER_GET_INFO: ServerInfo
  SERVER_UPDATE_PASSWORD
}
