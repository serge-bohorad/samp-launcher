import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { EditableSection } from '@app/components/particular/home/dashboard/settings-dialog/editable-section'
import { ManageCommonExtraInjectDialog } from './manage-common-extra-inject-dialog'

const CommonExtraInjectSectionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    commonExtraInject,
    manageCommonExtraInjectDialogShown,
    setManageCommonExtraInjectDialogShown
  } = useSelector(({ settings }) => settings)

  const onClickManageExtraInject = useCallback(() => {
    setManageCommonExtraInjectDialogShown(true)
  }, [])

  return (
    <>
      <EditableSection
        className={className}
        caption="Common extra inject"
        onClick={onClickManageExtraInject}
      >
        {Pair.values(commonExtraInject).join('; ') || 'Common extra inject is not provided'}
      </EditableSection>

      {manageCommonExtraInjectDialogShown && <ManageCommonExtraInjectDialog />}
    </>
  )
}

export const CommonExtraInjectSection = observer(CommonExtraInjectSectionComponent)
