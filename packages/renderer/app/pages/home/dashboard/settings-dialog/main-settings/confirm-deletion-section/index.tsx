import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { onSaveDeletionConfirm } from '@app/services/settings'

import { useSelector, useInputCallback } from '@app/hooks/common'

import { SwitchableSection } from '@app/components/particular/home/dashboard/settings-dialog/switchable-section'

const ConfirmDeletionSectionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { deletionConfirm } = useSelector(({ settings }) => settings)

  const onChange = useInputCallback(({ checked }) => {
    onSaveDeletionConfirm(checked)
  })

  return (
    <SwitchableSection
      className={className}
      title="Confirm deletion of groups and servers"
      checked={deletionConfirm}
      onChange={onChange}
    >
      Confirm deletion
    </SwitchableSection>
  )
}

export const ConfirmDeletionSection = observer(ConfirmDeletionSectionComponent)
