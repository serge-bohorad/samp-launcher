import { ChangeEvent } from 'react'

export interface Props {
  className?: string
  name?: string
  checked: boolean
  onChange(e: ChangeEvent<HTMLInputElement>): void
}
