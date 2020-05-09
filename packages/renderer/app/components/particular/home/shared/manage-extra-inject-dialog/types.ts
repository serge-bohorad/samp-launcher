import { Props as DialogProps } from '@app/components/common/dialog/types'

export interface Props extends DialogProps {
  initialExtraInject: Pair<string>[]
  onClickClose: () => any
  onClickSave: (pairs: Pair<string>[]) => any
}
