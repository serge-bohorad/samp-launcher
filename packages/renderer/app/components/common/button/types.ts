import { MouseEvent } from 'react'

export interface Props {
  className?: string
  disabled?: boolean
  onClick: (e: MouseEvent) => any
}
