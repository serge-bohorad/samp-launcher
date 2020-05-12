import React, { FunctionComponent, useState, useMemo, useCallback } from 'react'

import { getClipboardTextSync } from '@app/services/misc'
import { onAddServer } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const AddServerDialog: FunctionComponent = () => {
  const { setAddServerDialogShown } = useSelector(({ server }) => server)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const clipboardText = useMemo(() => getClipboardTextSync(), [])

  const onClickClose = useCallback(() => {
    setAddServerDialogShown(false)
  }, [])

  const onClickAdd = useCallback(async (serverAddress: string) => {
    setError('')

    setLoading(true)

    const addingError = await onAddServer(serverAddress)

    setLoading(false)

    if (addingError) {
      return setError(addingError)
    }

    onClickClose()
  }, [])

  return (
    <DialogInput
      autoSelect={true}
      loading={loading}
      caption="Add server"
      placeholder="Server address"
      initialValue={clipboardText}
      error={error}
      firstButtonText="Add"
      onClickClose={onClickClose}
      onClickFirstButton={onClickAdd}
      onClickSecondButton={onClickClose}
    />
  )
}
