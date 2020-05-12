import React, { FunctionComponent, useCallback } from 'react'

import { onSaveServerName } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const EditServerNameDialog: FunctionComponent = () => {
  const { selectedServer, setEditServerNameDialogShown } = useSelector(({ server }) => server)

  const { name, hostname } = selectedServer || {}

  const onClickClose = useCallback(() => {
    setEditServerNameDialogShown(false)
  }, [])

  const onClickSave = useCallback(async (newName: string) => {
    onSaveServerName(newName)

    onClickClose()
  }, [])

  return (
    <DialogInput
      caption="Edit server name"
      autoSelect={true}
      placeholder="Server name"
      initialValue={name || hostname || ''}
      firstButtonText="Save"
      onClickClose={onClickClose}
      onClickFirstButton={onClickSave}
      onClickSecondButton={onClickClose}
    />
  )
}
