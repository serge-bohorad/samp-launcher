import { ChangeEvent } from 'react'

export interface Props {
  className?: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => any
}
