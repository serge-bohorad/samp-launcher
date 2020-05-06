import { MouseEvent } from 'react'

export interface Props {
  className?: string
  title?: string
  icon: any
  onClick: (event: MouseEvent) => any
}
