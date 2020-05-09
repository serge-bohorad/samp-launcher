import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { onSaveAutoSwitchNickname } from '@app/services/settings'

import { useSelector, useInputCallback } from '@app/hooks/common'

import { SwitchableSection } from '@app/components/particular/home/dashboard/settings-dialog/switchable-section'

const AutoSwitchNicknameSectionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { autoSwitchNickname } = useSelector(({ settings }) => settings)

  const onChange = useInputCallback(({ checked }) => {
    onSaveAutoSwitchNickname(checked)
  })

  return (
    <SwitchableSection
      className={className}
      title="Auto switch common nickname to the nickname of the selected server if specified"
      checked={autoSwitchNickname}
      onChange={onChange}
    >
      Auto switch nickname
    </SwitchableSection>
  )
}

export const AutoSwitchNicknameSection = observer(AutoSwitchNicknameSectionComponent)
