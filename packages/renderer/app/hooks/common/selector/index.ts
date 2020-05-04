import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

import { GrabFn } from './types'

export function useSelector<Selected = unknown>(selector: GrabFn<Selected>): Selected {
  const { store } = useContext(MobXProviderContext)

  return selector(store)
}
