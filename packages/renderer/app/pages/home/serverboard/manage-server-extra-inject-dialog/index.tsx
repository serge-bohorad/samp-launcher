import React, { FunctionComponent, useCallback } from 'react'

import { onSaveServerExtraInject } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { ManageExtraInjectDialog } from '@app/components/particular/home/shared/manage-extra-inject-dialog'

export const ManageServerExtraInjectDialog: FunctionComponent = () => {
  const { selectedServer, setManageServerExtraInjectDialogShown } = useSelector(
    ({ server }) => server
  )

  const { extraInject } = selectedServer || {}

  const onClickClose = useCallback(() => {
    setManageServerExtraInjectDialogShown(false)
  }, [])

  const onClickSave = useCallback((newExtraInject: Pair<string>[]) => {
    onSaveServerExtraInject(newExtraInject)

    onClickClose()
  }, [])

  return (
    <ManageExtraInjectDialog
      caption="Manage server extra inject"
      initialExtraInject={extraInject as Pair<string>[]}
      onClickClose={onClickClose}
      onClickSave={onClickSave}
    />
  )
}
