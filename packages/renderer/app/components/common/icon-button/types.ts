import { MouseEvent } from 'react'

export interface Props {
  className?: string
  title?: string
  disabled?: boolean
  icon: any
  onClick: (event: MouseEvent) => any
}
