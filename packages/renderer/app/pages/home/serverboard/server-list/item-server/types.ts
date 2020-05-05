import { CSSProperties } from 'react'

import { Server } from '@shared/types/entities/server'

export interface Props {
  className?: string
  selected: boolean
  server: Server
  style: CSSProperties
  onClick: (server: Server) => any
}
