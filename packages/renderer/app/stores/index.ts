import { Store } from './types'

import { miscStore } from './misc'
import { groupStore } from './group'
import { serverStore } from './server'
import { settingsStore } from './settings'

export const store: Store = {
  misc: miscStore,
  group: groupStore,
  server: serverStore,
  settings: settingsStore
}
