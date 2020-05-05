import { MouseEvent } from 'react'

export interface Props {
  className?: string
  text: string
  onClick: (e: MouseEvent) => any
}
