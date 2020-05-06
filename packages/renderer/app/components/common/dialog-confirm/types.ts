import { Props as DialogProps } from '../dialog/types'
import { ReactNode } from 'react'

export interface Props extends DialogProps {
  className?: string
  checkboxHint?: ReactNode
  onClickFirstButton: (showConfirmNext: boolean) => any
}
