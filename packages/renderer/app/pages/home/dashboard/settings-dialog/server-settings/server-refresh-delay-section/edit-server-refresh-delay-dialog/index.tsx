import React, { FunctionComponent, useCallback, useState } from 'react'

import { onSaveServerRefreshDelay } from '@app/services/settings'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const EditServerRefreshDelayDialog: FunctionComponent = () => {
  const { serverRefreshDelay, setEditServerRefreshDelayDialogShown } = useSelector(
    ({ settings }) => settings
  )

  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setEditServerRefreshDelayDialogShown(false)
  }, [])

  const onClickSave = useCallback((newDelay: string) => {
    const savingError = onSaveServerRefreshDelay(Number(newDelay))

    if (savingError) {
      return setError(savingError)
    }

    onClickClose()
  }, [])

  return (
    <DialogInput
      caption="Edit server refresh delay"
      type="number"
      dimming={true}
      initialValue={serverRefreshDelay}
      error={error}
      firstButtonText="Save"
      onClickClose={onClickClose}
      onClickFirstButton={onClickSave}
      onClickSecondButton={onClickClose}
    />
  )
}
