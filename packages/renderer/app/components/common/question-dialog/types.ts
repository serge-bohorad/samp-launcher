/* eslint-disable @typescript-eslint/no-empty-interface */
import { Props as DialogProps } from '../dialog/types'

export interface Props extends DialogProps {
  onClickFirstButton: (askNext: boolean) => any
}
