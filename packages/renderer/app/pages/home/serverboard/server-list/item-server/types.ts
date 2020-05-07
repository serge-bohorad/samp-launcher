import { CSSProperties } from 'react'

import { Server } from '@shared/types/entities'

export interface Props {
  className?: string
  server: Server
  style: CSSProperties
}
