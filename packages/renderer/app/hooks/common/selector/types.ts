import { Store } from '@app/stores/types'

export type GrabFn<Selected> = (store: Store) => Selected
