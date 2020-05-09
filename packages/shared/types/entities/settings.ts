export interface Settings {
  commonNickname: string
  gameDirectory: string
  autoSwitchNickname: boolean
  deletionConfirm: boolean
  serverRefreshDelay: number
  refreshAllServers: boolean
  commonExtraInject: string[] | Pair<string>[]
}
