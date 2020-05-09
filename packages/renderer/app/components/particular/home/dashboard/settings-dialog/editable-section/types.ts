import { MouseEvent } from 'react'

export interface Props {
  className?: string
  caption: string
  title?: string
  onClick: (event: MouseEvent) => any
}
