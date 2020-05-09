import React, { FunctionComponent, useCallback } from 'react'

import { onSaveCommonExtraInject } from '@app/services/settings'

import { useSelector } from '@app/hooks/common'

import { ManageExtraInjectDialog } from '@app/components/particular/home/shared/manage-extra-inject-dialog'

export const ManageCommonExtraInjectDialog: FunctionComponent = () => {
  const { commonExtraInject, setManageCommonExtraInjectDialogShown } = useSelector(
    ({ settings }) => settings
  )

  const onClickClose = useCallback(() => {
    setManageCommonExtraInjectDialogShown(false)
  }, [])

  const onClickSave = useCallback((newExtraInject: Pair<string>[]) => {
    onSaveCommonExtraInject(newExtraInject)

    onClickClose()
  }, [])

  return (
    <ManageExtraInjectDialog
      caption="Manage common extra inject"
      dimming={true}
      initialExtraInject={commonExtraInject}
      onClickClose={onClickClose}
      onClickSave={onClickSave}
    />
  )
}
