export interface AddingPayload {
  host: string
  port: number
  groupId: number
}

export interface UpdatingNicknamePayload {
  serverId: number
  nickname: string
}

export interface UpdatingAddressPayload {
  host: string
  port: number
  serverId: number
}
