import React, { FunctionComponent, useState, useCallback } from 'react'

import { onSaveServerAddress } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const EditServerAddressDialog: FunctionComponent = () => {
  const { selectedServer, setEditServerAddressDialogShown } = useSelector(({ server }) => server)

  const { host, port } = selectedServer || {}

  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setEditServerAddressDialogShown(false)
  }, [])

  const onClickSave = useCallback(async (serverAddress: string) => {
    const savingError = await onSaveServerAddress(serverAddress)

    if (savingError) {
      return setError(savingError)
    }

    onClickClose()
  }, [])

  return (
    <DialogInput
      caption="Edit server address"
      autoSelect={true}
      placeholder="Server address"
      initialValue={`${host}:${port}`}
      error={error}
      firstButtonText="Save"
      onClickClose={onClickClose}
      onClickFirstButton={onClickSave}
      onClickSecondButton={onClickClose}
    />
  )
}
