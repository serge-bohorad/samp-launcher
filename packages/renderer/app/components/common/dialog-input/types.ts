import { Props as DialogProps } from '../dialog/types'
import { InputTypes } from '../input/types'

export interface Props extends DialogProps {
  autoSelect?: boolean
  type?: InputTypes
  min?: number
  max?: number
  step?: number
  initialValue?: string | number
  placeholder?: string
  error?: string
  onClickFirstButton(input: string): void
}
