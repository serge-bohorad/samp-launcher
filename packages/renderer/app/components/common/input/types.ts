import { ChangeEvent, FocusEvent } from 'react'

export interface Props {
  className?: string
  type?: InputTypes
  name?: string
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  placeholder?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => any
  onBlur?: (event: FocusEvent<HTMLInputElement>) => any
}

export type InputTypes = 'text' | 'number' | 'password'
