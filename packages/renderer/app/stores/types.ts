import { GroupStore } from './group'
import { ServerStore } from './server'

export interface Store {
  group: GroupStore
  server: ServerStore
}
