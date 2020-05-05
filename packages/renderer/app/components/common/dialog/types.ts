import { ReactNode } from 'react'

export interface Props {
  className?: string
  bodyClassName?: string
  concave?: boolean
  closable?: boolean
  disabled?: boolean
  dimming?: boolean
  caption?: ReactNode
  firstButtonText?: string
  secondButtonText?: string
  children?: ReactNode
  onClickClose: () => void
  onClickFirstButton?: (...args) => void
  onClickSecondButton?: () => void
}
