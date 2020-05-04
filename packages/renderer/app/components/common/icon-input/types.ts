import { RefObject } from 'react'

import { Props as InputProps } from '../input/types'

export interface Props extends InputProps {
  ref?: RefObject<HTMLInputElement>
  icon: any
}
