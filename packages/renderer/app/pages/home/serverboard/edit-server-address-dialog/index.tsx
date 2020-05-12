import React, { FunctionComponent, useState, useCallback } from 'react'

import { onSaveServerAddress } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const EditServerAddressDialog: FunctionComponent = () => {
  const { selectedServer, setEditServerAddressDialogShown } = useSelector(({ server }) => server)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { host, port } = selectedServer || {}

  const onClickClose = useCallback(() => {
    setEditServerAddressDialogShown(false)
  }, [])

  const onClickSave = useCallback(async (serverAddress: string) => {
    setLoading(true)

    setError('')

    const savingError = await onSaveServerAddress(serverAddress)

    setLoading(false)

    if (savingError) {
      return setError(savingError)
    }

    onClickClose()
  }, [])

  return (
    <DialogInput
      loading={loading}
      autoSelect={true}
      caption="Edit server address"
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
