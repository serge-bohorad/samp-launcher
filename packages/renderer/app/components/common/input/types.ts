import { ChangeEvent } from 'react'

export interface Props {
  className?: string
  type?: InputTypes
  name?: string
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  invalid?: any
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => any
}

export type InputTypes = 'text' | 'number' | 'password'
