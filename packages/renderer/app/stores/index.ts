import { Store } from './types'

import { groupStore } from './group'
import { serverStore } from './server'

export const store: Store = {
  group: groupStore,
  server: serverStore
}
