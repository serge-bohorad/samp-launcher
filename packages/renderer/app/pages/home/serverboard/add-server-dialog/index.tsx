import React, { FunctionComponent, useState, useCallback } from 'react'

import { onAddServer } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

// TODO: show group creation dialog
export const AddServerDialog: FunctionComponent = () => {
  const { setAddServerDialogShown } = useSelector(({ server }) => server)

  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setAddServerDialogShown(false)
  }, [])

  const onClickAdd = useCallback(async (serverAddress: string) => {
    const addingError = await onAddServer(serverAddress)

    if (addingError) {
      return setError(addingError)
    }

    onClickClose()
  }, [])

  return (
    <DialogInput
      caption="Add server"
      placeholder="Server address"
      error={error}
      firstButtonText="Add"
      onClickClose={onClickClose}
      onClickFirstButton={onClickAdd}
      onClickSecondButton={onClickClose}
    />
  )
}
