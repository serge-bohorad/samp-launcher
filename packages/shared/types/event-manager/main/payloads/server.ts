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
  serverId: number
  host: string
  port: number
}

export interface UpdatingNamePayload {
  serverId: number
  name: string
}

export interface UpdatingDescriptionPayload {
  serverId: number
  description: string
}

export interface UpdatingExtraInjectPayload {
  serverId: number
  extraInject: string[]
}

export interface RefreshingPayload {
  host: string
  port: number
}

export interface UpdatingPasswordPayload {
  serverId: number
  password: string
}
