import { MiscStore } from './misc'
import { GroupStore } from './group'
import { ServerStore } from './server'
import { SettingsStore } from './settings'

export interface Store {
  misc: MiscStore
  group: GroupStore
  server: ServerStore
  settings: SettingsStore
}
