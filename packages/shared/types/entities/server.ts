export interface Server extends ServerInfo {
  id: number
  name: string
  host: string
  port: number
  description: string
  nickname: string
  password: string
  extraInject: string[] | Pair<string>[]
}

export interface ServerInfo {
  locked?: boolean
  hostname?: string
  players?: number
  maxPlayers?: number
  ping?: number
  mode?: string
  language?: string
  lagcomp?: string
  mapname?: string
  version?: string
  weather?: string
  weburl?: string
  worldtime?: string
}
